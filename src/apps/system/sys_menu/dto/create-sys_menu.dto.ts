import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateSysMenuDto {
  @ApiProperty({ description: 'Mã menu', example: 'MENU001' })
  @IsString()
  menuid: string;

  @ApiProperty({ description: 'Tên menu', example: 'Dashboard' })
  @IsString()
  menuname: string;

  @ApiProperty({ description: 'Đường dẫn hoặc route', required: false, nullable: true, example: '/dashboard' })
  @IsOptional()
  @IsString()
  path?: string | null;

  @ApiProperty({ description: 'Tên icon', required: false, nullable: true, example: 'home' })
  @IsOptional()
  @IsString()
  icon?: string | null;

  @ApiProperty({ description: 'Mã menu cha', required: false, nullable: true, example: 'MENU_PARENT' })
  @IsOptional()
  @IsString()
  parentid?: string | null;

  @ApiProperty({ description: 'Trạng thái hoạt động', default: true })
  @IsOptional()
  @IsBoolean()
  isactive?: boolean;

  @ApiProperty({ description: 'Người tạo', example: 'prisma' })
  @IsString()
  createdby: string;
}
