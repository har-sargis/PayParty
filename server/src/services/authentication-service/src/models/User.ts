import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import { CreditCard } from './CreditCard';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  firstName!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  lastName?: string | null;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  phoneNumber!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  country?: string | null;

  @HasMany(() => CreditCard)
  creditCards!: CreditCard[];
}
