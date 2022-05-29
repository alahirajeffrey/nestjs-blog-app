import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ModuleController } from './service/module/module.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';


@Module({
  imports: [AuthModule, UserModule, BlogModule],
  controllers: [ModuleController, UserController],
  providers: [UserService],
})
export class AppModule {}
