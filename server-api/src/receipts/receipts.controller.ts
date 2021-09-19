import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { Receipt } from './dto/receipt.dto'
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('receipt')
@Controller('receipts')
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) { }

  @Post()
  create(@Body() createReceiptDto: CreateReceiptDto) {
    return this.receiptsService.create(createReceiptDto);
  }

  @ApiOkResponse({
    description: 'List of all receipts',
    type: [Receipt]
  })
  @ApiNotFoundResponse({ description: 'No receipts found' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get()
  findAll() {
    return this.receiptsService.findAll();
  }

  @Get('/items')
  findAllItems() {
    return this.receiptsService.findAllItems();
  }

  @Delete('/items')
  purgeItems() {
    return this.receiptsService.purgeItems();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiptsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
    return this.receiptsService.update(+id, updateReceiptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiptsService.remove(+id);
  }
}
