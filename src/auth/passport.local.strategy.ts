import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport/dist/passport/passport.strategy';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super();
  }

  validate(username: string, password: string): User {
    const user: User = this.userService.getUserByName(username);

    if (user == undefined) throw new UnauthorizedException();
    if (user.password == password) return user;
  }
}
