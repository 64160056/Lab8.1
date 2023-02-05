import { IsNotEmpty, Length, IsPositive } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @Length(4, 16)
  name: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;
}
