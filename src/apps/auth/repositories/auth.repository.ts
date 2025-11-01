import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/database/prisma.service';
import { now } from '@libs/utils/date.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<any> {
    return this.prisma.client.sYS_USERS.findFirst({
      where: { email: email, isactive: true },
    });
  }

  async createUser(data: {email: string; password: string; username: string;}): Promise<any> {
    return this.prisma.client.sYS_USERS.create({
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
        createdby: 'code',        // giá trị fix cứng
        createdtime: now(),       // gọi hàm để lấy Date
      } as Prisma.SYS_USERSCreateInput,
    });
  }

  async createUserBranch(user: any): Promise<any> {
    return this.prisma.client.sYS_USER_BRANCHES.create({
      data: {
        userid: user.id,
        role: 'user',          // giá trị fix cứng
        createdby: 'code',        // giá trị fix cứng
        createdtime: now(),       // gọi hàm để lấy Date
      } as Prisma.SYS_USER_BRANCHESCreateInput,
    });
  }

  async findUserWithOfficeScope(userid:number): Promise<any> {
    return this.prisma.client.$queryRaw<
        Array<{ branchid: string; officescope: string; officename: string; branchname: string }>
      >`
        SELECT
          branch.branchid,
          branch.officescope,
          brand.officename,
          brand.branchname
        FROM "SYS_USER_BRANCHES" AS branch
        LEFT JOIN "CM_BRANCH" AS brand ON branch.branchid = brand.branchid
        WHERE branch.userid = ${userid}
      `;
  }
  
}
