import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/database/prisma.service';
import { CreateSysMenuDto } from '../dto/create-sys_menu.dto';
import { UpdateSysMenuDto } from '../dto/update-sys_menu.dto';

@Injectable()
export class SysMenuRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.client.sYS_MENU.findMany();
  }

  create(dto: CreateSysMenuDto) {
    return this.prisma.client.sYS_MENU.create({
      data: {
        menuid: dto.menuid,
        menuname: dto.menuname,
        path: dto.path,
        icon: dto.icon,
        parentid: dto.parentid,
        isactive: dto.isactive ?? true,
        createdby: dto.createdby,
        createdtime: new Date(),
      },
    });
  }

  update(rowguid: string, data: UpdateSysMenuDto) {
    return this.prisma.client.sYS_MENU.update({
      where: { rowguid },
      data,
    });
  }

  delete(rowguid: string) {
    return this.prisma.client.sYS_MENU.delete({ where: { rowguid } });
  }
}
