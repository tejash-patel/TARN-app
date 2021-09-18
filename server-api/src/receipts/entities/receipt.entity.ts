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
    content: string;
  
    @Column()
    title: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
