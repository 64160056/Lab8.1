import { IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(4, 16)
  login: string;

  @IsNotEmpty()
  @Length(4, 16)
  name: string;

  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  )
  password: string;
}
