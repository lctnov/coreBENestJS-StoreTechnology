import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCmBrandDto } from './create-cm_brand.dto';

export class UpdateCmBrandDto extends PartialType(CreateCmBrandDto) {
  @ApiProperty({ description: 'UUID của brand cần cập nhật' })
  rowguid: string;
}
