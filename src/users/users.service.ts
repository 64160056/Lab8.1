import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user: User = new User();
    user.login = createUserDto.login;
    user.name = createUserDto.name;
    user.password = createUserDto.password;
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id: id });
    const updatedUser = { ...user, ...updateUserDto };
    return this.usersRepository.save(updatedUser);
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOneBy({ id: id });
    return this.usersRepository.remove(user);
  }
}
