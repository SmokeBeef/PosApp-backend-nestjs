import { Injectable } from '@nestjs/common';
import { LoginSchema } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import Config from 'src/app/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly config: Config,
  ) {}
  async login(data: LoginSchema) {
    return data;
  }
  async register() {}
}
