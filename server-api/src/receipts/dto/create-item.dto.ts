import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
    ApiProperty
} from '@nestjs/swagger';
import { itemsEntity } from '../entities/item.entity';

export class CreateItemDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    value: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
