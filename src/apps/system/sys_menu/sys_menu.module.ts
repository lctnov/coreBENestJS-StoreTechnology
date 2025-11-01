import { Module } from '@nestjs/common';
import { SysMenuController } from './controllers/sys_menu.controller';
import { SysMenuService } from './services/sys_menu.service';
import { SysMenuRepository } from './repositories/sys_menu.repository';
import { PrismaService } from '@libs/database/prisma.service';

@Module({
  controllers: [SysMenuController],
  providers: [
    SysMenuService,
    SysMenuRepository,
    PrismaService,
  ],
  exports: [SysMenuService],
})
export class SysMenuModule {}
