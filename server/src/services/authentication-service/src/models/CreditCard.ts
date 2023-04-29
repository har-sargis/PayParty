import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './User';

@Table({
  tableName: 'credit_cards',
  timestamps: true,
})
export class CreditCard extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  cardNumber!: string;

  @Column(DataType.STRING)
  cardHolderName!: string;

  @Column(DataType.DATE)
  expirationDate!: Date;

  @Column(DataType.INTEGER)
  cvv!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User, {
    foreignKey: 'userId',
    as: 'user',
  })
  user!: User;
}
