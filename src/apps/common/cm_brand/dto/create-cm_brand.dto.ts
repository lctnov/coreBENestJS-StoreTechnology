import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateCmBrandDto {
  @ApiProperty({ description: 'Mã thương hiệu', example: 'BRAND001' })
  @IsString()
  brandid: string;

  @ApiProperty({ description: 'Tên thương hiệu', example: 'Nike' })
  @IsString()
  brandname: string;

  @ApiProperty({ description: 'Ghi chú', required: false, nullable: true, example: 'Hãng thời trang thể thao' })
  @IsOptional()
  @IsString()
  note?: string | null;

  @ApiProperty({ description: 'Người tạo', example: 'admin' })
  @IsString()
  createdby: string;
}
