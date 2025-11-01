import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SysMenuService } from '../services/sys_menu.service';
import { CreateSysMenuDto } from '../dto/create-sys_menu.dto';
import { UpdateSysMenuDto } from '../dto/update-sys_menu.dto';

@Controller('menus')
export class SysMenuController {
  constructor(private readonly sysMenuService: SysMenuService) {}

  @Post('list')
  findAll() {
    return this.sysMenuService.findAll();
  }

  @Post('create')
  create(@Body() createDto: CreateSysMenuDto) {
    return this.sysMenuService.create(createDto);
  }

  @Post('update')
  update(rowguid: string, @Body() updateDto: UpdateSysMenuDto) {
    return this.sysMenuService.update(rowguid, updateDto);
  }

  @Post('delete')
  delete(rowguid: string) {
    return this.sysMenuService.delete(rowguid);
  }
}
