import {
  ApiProperty
} from '@nestjs/swagger';

export class Receipt {
  @ApiProperty()
  id: number;

  @ApiProperty()
  itemIds: string; // Comma separated list of ids

  @ApiProperty()
  storeName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  postalCode: number;

  @ApiProperty()
  cashierId: string;

  @ApiProperty()
  logoURL: string; // Image URL to be inserted onto the receipt for the logo

  @ApiProperty()
  transactionTime: Date;

}
