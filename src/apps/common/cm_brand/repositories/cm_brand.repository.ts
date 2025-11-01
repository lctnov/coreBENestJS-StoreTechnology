import { Injectable } from '@nestjs/common';
import { CreateCmBrandDto } from '../dto/create-cm_brand.dto';
import { UpdateCmBrandDto } from '../dto/update-cm_brand.dto';
import { FilterCmBrandDto } from '../dto/filter-cm_brand.dto';
import { PrismaService } from '@libs/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CmBrandRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filter?: FilterCmBrandDto) {
    let result: any = await this.prisma.client.cM_BRAND.findMany({
      where: filter?.brandname
        ? {
            OR: [
              { brandid: { contains: filter.brandname, mode: 'insensitive' } },
              { brandname: { contains: filter.brandname, mode: 'insensitive' } }
            ]
          }
        : undefined,
      orderBy: { createdtime: 'asc' }
    });
    
    if(result && result.length){
      result = result.map((item: any, index: number) => {
            return {
              rowguid: item.rowguid,
              brandid: item.brandid,
              brandname: item.brandname,
              note: item.note,
            }
          });
    }

    return {
      message: result && result.length ? 'Load dữ liệu thành công' : 'Không có dữ liệu ', 
      payload: result && result.length ? result : null, 
      status: result && result.length ? true : false
    };
  }

  async findOne(rowguid: string) {
    return this.prisma.client.cM_BRAND.findUnique({ where: { rowguid: rowguid } });
  }

  async create(dto: CreateCmBrandDto) {
    return this.prisma.client.cM_BRAND.create({
        data: {
          brandid: dto.brandid,
          brandname: dto.brandname,
          note: dto.note ?? null,
          createdby: dto.createdby ?? 'system',
        } as Prisma.CM_BRANDCreateInput
	 });
  }

  async update(rowguid: string, dto: UpdateCmBrandDto) {
    return this.prisma.client.cM_BRAND.update({ where: { rowguid: rowguid }, data: dto });
  }

  async delete(rowguid: string) {
    return this.prisma.client.cM_BRAND.delete({ where: { rowguid: rowguid } });
  }

  async deleteMany(rowguid: string[]) {
    return this.prisma.client.cM_BRAND.deleteMany({
      where: { rowguid: { in: rowguid } }
    });
  }
}
