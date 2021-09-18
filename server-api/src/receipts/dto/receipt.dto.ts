import {
  ApiProperty
} from '@nestjs/swagger';

export class Receipt {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}
