import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Repository, Connection } from 'typeorm';
import { ReceiptsEntity } from './entities/receipt.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { itemsEntity } from './entities/item.entity';

@Injectable()
export class ReceiptsService {
  private _receiptsRepository: Repository<ReceiptsEntity>;
  private _itemsRepository: Repository<itemsEntity>;

  constructor(private _connection: Connection) {
    this._receiptsRepository = this._connection.getRepository(ReceiptsEntity);
    this._itemsRepository = this._connection.getRepository(itemsEntity)
  }

  async createItem(itemReceiptDto) {
    const newItem = this._itemsRepository.create();

    newItem.name = itemReceiptDto.name;
    newItem.value = itemReceiptDto.value;
    newItem.quantity = itemReceiptDto.quantity;
    newItem.receiptId = 0;

    await this._itemsRepository.save(newItem);
    return newItem;
  }

  async create(createReceiptDto: CreateReceiptDto) {
    const newReceipt = this._receiptsRepository.create();

    newReceipt.storeName = createReceiptDto.storeName;
    newReceipt.address = createReceiptDto.address;
    newReceipt.phone = createReceiptDto.phone;
    newReceipt.postalCode = createReceiptDto.postalCode;
    newReceipt.cashierId = createReceiptDto.cashierId;
    newReceipt.logoURL = createReceiptDto.logoURL;

    let newItemIds = [];
    let newItems = [];

    for (let x = 0; x < createReceiptDto.items.length; x++) {
      var newItem = await this.createItem(createReceiptDto.items[x]);
      newItemIds.push(newItem.id);
      newItems.push(newItem);
    }

    newReceipt.itemIds = newItemIds.toString();

    // == saves the post to db ==
    await this._receiptsRepository.save(newReceipt);

    newItems.forEach(item => {
      item.receiptId = newReceipt.id;
      this._itemsRepository.save(item);
    });

    return newReceipt;
  }

  async unfoldItems(receipt: ReceiptsEntity) {
    let newReceipt = {};
    newReceipt["storeName"] = receipt.storeName;
    newReceipt["address"] = receipt.address;
    newReceipt["phone"] = receipt.phone;
    newReceipt["postalCode"] = receipt.postalCode;
    newReceipt["cashierId"] = receipt.cashierId;
    newReceipt["logoURL"] = receipt.logoURL;
    newReceipt["transactionTime"] = receipt.transactionTime;
    newReceipt["id"] = receipt.id;

    let itemIds = receipt.itemIds.split(",");
    let items = await this._itemsRepository.findByIds(itemIds);

    newReceipt["items"] = items;

    return newReceipt;
  }

  async findAll() {
    let allReceipts = await this._receiptsRepository.find();
    let parsedReceipts = [];
    for (let x = 0; x < allReceipts.length; x++) {
      parsedReceipts.push(await this.unfoldItems(allReceipts[x]));
    }
    return parsedReceipts;
  }

  async findAllItems() {
    return await this._itemsRepository.find();
  }

  async purgeItems() {
    let allItems = await this._itemsRepository.find();

    for (let x = 0; x < allItems.length; x++) {
      let receipt = await this._receiptsRepository.findOne(allItems[x].receiptId);
      console.log(receipt);
      if (!receipt) {
        this._itemsRepository.delete(allItems[x].id);
      }
    }

    return 'Successfully deleted hanging items';
  }

  async findOne(id: number) {
    return await this.unfoldItems(await this._receiptsRepository.findOne(id));
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `Error: Receipts are immutable`;
  }

  async remove(id: number) {
    await this._receiptsRepository.delete(id);
    return `Successfully deleted receipt id ` + id.toString();
  }
}
