import { IsNotEmpty, IsString } from 'class-validator';
import {
    ApiProperty
} from '@nestjs/swagger';
import { itemsEntity } from '../entities/item.entity';
import { Double } from 'typeorm';

// export class receiptItem {
//     name: string;
//     quantity: Double;
//     value: Double;
//     receiptId: Double;

//     // constructor(name, quantity, value, receiptId) {
//     //     this.name = name || "default";
//     //     this.quantity = quantity || -1;
//     //     this.value = value || -1;
//     //     this.receiptId = receiptId || -1.
//     // }
// };

export class CreateReceiptDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    storeName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    postalCode: string;

    @ApiProperty()
    @IsNotEmpty()
    cashierId: string;

    @ApiProperty()
    logoURL: string; // Image URL to be inserted onto the receipt for the logo

    @ApiProperty()
    items: object[];
}
