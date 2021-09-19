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
      console.log(createReceiptDto.items[x]);
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

  async findAll() {
    return await this._receiptsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `Error: Receipts are immutable`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
