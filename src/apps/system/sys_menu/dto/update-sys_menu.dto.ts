import { PartialType } from '@nestjs/swagger';
import { CreateSysMenuDto } from './create-sys_menu.dto';

export class UpdateSysMenuDto extends PartialType(CreateSysMenuDto) {}
