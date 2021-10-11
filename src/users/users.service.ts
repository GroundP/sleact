import { Users } from './../entities/Users';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async postUsers(email: string, nickname: string, password: string) {
    if (!email) {
      throw new UnauthorizedException('이메일 에러');
    }

    if (!nickname) {
      throw new UnauthorizedException('닉네임 에러');
    }

    if (!password) {
      throw new UnauthorizedException('패스워드 에러');
    }

    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      // 이미 존재하는 유저(에러)
      throw new UnauthorizedException('해당하는 유저는 이미 존재합니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });

    return;
  }
}
