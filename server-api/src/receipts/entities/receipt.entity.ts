import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('Receipts')
export class ReceiptsEntity {
    @PrimaryColumn({ generated: true })
    id: number;

    @Column()
    itemIds: string; // Comma separated list of ids

    @Column()
    storeName: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    postalCode: string;

    @Column()
    cashierId: string;

    @Column()
    logoURL: string; // Image URL to be inserted onto the receipt for the logo

    @CreateDateColumn()
    transactionTime: Date;
}
