import {
    Column,
    CreateDateColumn,
    Double,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('Items')
export class itemsEntity {
    @PrimaryColumn({ generated: true })
    id: number;

    @Column()
    receiptId: number;

    @Column()
    name: string;

    @Column()
    value: string;

    @Column()
    quantity: number;
}
