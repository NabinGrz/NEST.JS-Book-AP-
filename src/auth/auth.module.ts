import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
@Module({
  imports: [UsersModule],
  providers: [PassportLocalStrategy],
  controllers: [],
})
export class AuthModule {}
