import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Repository, Connection } from 'typeorm';
import { ReceiptsEntity } from './entities/receipt.entity';

@Injectable()
export class ReceiptsService {
  private _receiptsRepository: Repository<ReceiptsEntity>;

  constructor(private _connection: Connection) {
    this._receiptsRepository = this._connection.getRepository(ReceiptsEntity);
  }
  async create(createReceiptDto: CreateReceiptDto) {
    const newReceipt = this._receiptsRepository.create();

    newReceipt.title = createReceiptDto.title;
    newReceipt.content = createReceiptDto.content;

  // == saves the post to db ==
  await this._receiptsRepository.save(newReceipt);
  return newReceipt;
  }

  async findAll() {
    return await this._receiptsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
