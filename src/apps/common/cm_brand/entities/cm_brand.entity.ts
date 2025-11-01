import { ApiProperty } from '@nestjs/swagger';

export class CmBrand {
  @ApiProperty({ description: 'UUID duy nhất của bản ghi, hệ thống tự sinh', readOnly: true,})
  rowguid: string;

  @ApiProperty({ description: 'Mã thương hiệu' })
  brandid: string;

  @ApiProperty({ description: 'Tên thương hiệu' })
  brandname: string;

  @ApiProperty({
    description: 'Ghi chú',
    required: false,
    nullable: true,
  })
  note?: string | null;

  @ApiProperty({ description: 'Người tạo' })
  createdby: string;

  @ApiProperty({ description: 'Thời điểm tạo' })
  createdtime: Date;

  @ApiProperty({
    description: 'Người sửa cuối',
    required: false,
    nullable: true,
  })
  modifiedby?: string | null;

  @ApiProperty({
    description: 'Thời điểm sửa cuối',
    required: false,
    nullable: true,
  })
  modifiedtime?: Date | null;
}
