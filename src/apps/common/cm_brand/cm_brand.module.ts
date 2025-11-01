import { Module } from '@nestjs/common';
import { CmBrandController } from './controllers/cm_brand.controller';
import { CmBrandService } from './services/cm_brand.service';
import { CmBrandRepository } from './repositories/cm_brand.repository';
import { PrismaService } from '@libs/database/prisma.service';

@Module({
  controllers: [CmBrandController],
  providers: [CmBrandService, CmBrandRepository, PrismaService],
  exports: [CmBrandService]
})
export class CmBrandModule {}
