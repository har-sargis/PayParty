import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  DataType,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./User";

@Table
export class RefreshToken extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id!: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @Column(DataType.TEXT)
  token!: string;

  @Column(DataType.DATE)
  expiresAt!: Date;

  @BelongsTo(() => User)
  user!: User;
}
