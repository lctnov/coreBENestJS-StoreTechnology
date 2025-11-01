import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterCmBrandDto {
  @ApiPropertyOptional({ description: 'Tên brand để tìm kiếm', example: 'Nike' })
  brandname?: string;
  
  @ApiPropertyOptional({ description: 'Trạng thái hoạt động', example: true })
  isactive?: boolean;
}
