import { AuthModule } from "./auth/auth.module";
import { SysUsersModule } from '@/apps/system/sys_users/sys_users.module';
import { SysMenuModule } from '@/apps/system/sys_menu/sys_menu.module';
import { CmBrandModule } from '@/apps/common/cm_brand/cm_brand.module';
export const appProviders = [
	 AuthModule,
	 SysUsersModule,
	 SysMenuModule,
	 CmBrandModule
];
