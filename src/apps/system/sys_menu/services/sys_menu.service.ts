import { Injectable } from '@nestjs/common';
import { SysMenuRepository } from '../repositories/sys_menu.repository';
import { CreateSysMenuDto } from '../dto/create-sys_menu.dto';
import { UpdateSysMenuDto } from '../dto/update-sys_menu.dto';

@Injectable()
export class SysMenuService {
  constructor(private readonly repo: SysMenuRepository) {}

  findAll() {
    return this.repo.findAll();
  }

  create(createDto: CreateSysMenuDto) {
    // Logic nghiệp vụ trước khi lưu DB nếu cần
    return this.repo.create(createDto);
  }

  update(rowguid: string, updateDto: UpdateSysMenuDto) {
    return this.repo.update(rowguid, updateDto);
  }

  delete(rowguid: string) {
    return this.repo.delete(rowguid);
  }
}
