import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Config from './app/config';
import { mysqlOption } from './app/db/mysql';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(mysqlOption()),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, Config],
})
export class AppModule {}
