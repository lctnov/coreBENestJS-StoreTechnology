import { Controller, Post, Body, Query } from '@nestjs/common';
import { CmBrandService } from '../services/cm_brand.service';
import { CreateCmBrandDto } from '../dto/create-cm_brand.dto';
import { UpdateCmBrandDto } from '../dto/update-cm_brand.dto';
import { FilterCmBrandDto } from '../dto/filter-cm_brand.dto';

@Controller('common/cm_brand')
export class CmBrandController {
  constructor(private readonly service: CmBrandService) {}

  // Lấy danh sách theo filter
  @Post('list')
  findAll(@Body() filter: FilterCmBrandDto) {
    return this.service.findAll(filter);
  }

  // Lấy 1 bản ghi theo rowguid
  @Post('get')
  findOne(@Body('rowguid') rowguid: string) {
    return this.service.findOne(rowguid);
  }

  // Tạo mới
  @Post('create')
  create(@Body() dto: CreateCmBrandDto) {
    return this.service.create(dto);
  }

  // Cập nhật
  @Post('update')
  update(@Body('rowguid') rowguid: string, @Body() dto: UpdateCmBrandDto) {
    return this.service.update(rowguid, dto);
  }

  // Xóa 1 bản ghi
  @Post('delete')
  delete(@Body('rowguid') rowguid: string) {
    return this.service.delete(rowguid);
  }

  // Xóa nhiều bản ghi
  @Post('delete-many')
  deleteMany(@Body('rowguid') rowguid: string[]) {
    return this.service.deleteMany(rowguid);
  }
}
