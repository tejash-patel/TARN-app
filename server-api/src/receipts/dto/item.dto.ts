import {
    ApiProperty
} from '@nestjs/swagger';
import { StringDecoder } from 'string_decoder';

export class Item {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    value: string;

    @ApiProperty()
    quantity: number;
}