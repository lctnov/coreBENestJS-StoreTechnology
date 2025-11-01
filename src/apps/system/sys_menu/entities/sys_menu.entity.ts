import { ApiProperty } from '@nestjs/swagger';

export class SysMenu {
	@ApiProperty({ description: 'UUID duy nhất của bản ghi, hệ thống tự sinh', readOnly: true,})
	rowguid: string;

	@ApiProperty({ description: 'Mã menu' })
	menuid: string;

	@ApiProperty({ description: 'Tên menu' })
	menuname: string;

	@ApiProperty({ description: 'Đường dẫn hoặc route', required: false, nullable: true })
	path?: string | null;

	@ApiProperty({ description: 'Tên icon', required: false, nullable: true })
	icon?: string | null;

	@ApiProperty({ description: 'Mã menu cha', required: false, nullable: true })
	parentid?: string | null;

	@ApiProperty({ description: 'Trạng thái hoạt động', default: true })
	isactive: boolean;

	@ApiProperty({ description: 'Người tạo' })
	createdby: string;

	@ApiProperty({ description: 'Thời điểm tạo' })
	createdtime: Date;

	@ApiProperty({ description: 'Người sửa cuối', required: false, nullable: true })
	modifiedby?: string | null;

	@ApiProperty({ description: 'Thời điểm sửa cuối', required: false, nullable: true })
	modifiedtime?: Date | null;
}
