import { Injectable } from '@nestjs/common';
import { CmBrandRepository } from '../repositories/cm_brand.repository';
import { CreateCmBrandDto } from '../dto/create-cm_brand.dto';
import { UpdateCmBrandDto } from '../dto/update-cm_brand.dto';
import { FilterCmBrandDto } from '../dto/filter-cm_brand.dto';

@Injectable()
export class CmBrandService {
  constructor(private readonly repo: CmBrandRepository) {}

  findAll(filter?: FilterCmBrandDto) {
    return this.repo.findAll(filter);
  }

  findOne(rowguid: string) {
    return this.repo.findOne(rowguid);
  }

  create(dto: CreateCmBrandDto) {
    return this.repo.create(dto);
  }

  update(rowguid: string, dto: UpdateCmBrandDto) {
    return this.repo.update(rowguid, dto);
  }

  delete(rowguid: string) {
    return this.repo.delete(rowguid);
  }

  deleteMany(rowguids: string[]) {
    return this.repo.deleteMany(rowguids);
  }
}
