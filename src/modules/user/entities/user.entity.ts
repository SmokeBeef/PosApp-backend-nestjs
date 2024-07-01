import {
  AfterInsert,
  BeforeInsert,
  Column,
  Entity,
  Generated,
  PrimaryColumn,
} from 'typeorm';
import bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @BeforeInsert()
  async setCreatedAt() {
    this.createdAt = new Date();
    this.password = await bcrypt.hash(this.password, 10);
  }

  @AfterInsert()
  afterInsert() {
    delete this.password;
  }
}
