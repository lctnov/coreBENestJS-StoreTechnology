import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedAdmin = await hash('admin123', 10);
  const hashedUser = await hash('User@123', 10);

  // --- Clear dữ liệu ---
  // await prisma.sYS_USERS.deleteMany();
  // await prisma.cM_BRAND.deleteMany();

  // await prisma.sYS_USER_BRANCHES.deleteMany();
  // await prisma.sYS_MENU.deleteMany();
  // await prisma.cM_BRANCH.deleteMany();
  // await prisma.cM_UNIT.deleteMany();
  // await prisma.cM_PAYMENT.deleteMany();
  // await prisma.cM_SHIPPING.deleteMany();
  // await prisma.cM_CURRENCY.deleteMany();
  // await prisma.cM_DISCOUNT.deleteMany();
  // await prisma.cM_RAM.deleteMany();
  // await prisma.cM_DRIVE.deleteMany();
  // await prisma.cM_COLOR.deleteMany();
  // await prisma.dT_SALE.deleteMany();
  // await prisma.dT_KPI.deleteMany();
  // await prisma.dT_ITEM.deleteMany();
  // await prisma.iTEM_DETAIL.deleteMany();
  // await prisma.iTEM_PRIVILEGES.deleteMany();
  // await prisma.iTEM_GIFTS.deleteMany();
  // await prisma.oRDERS.deleteMany();
  // await prisma.sERVICE_LOG.deleteMany();
  // await prisma.iNV_PLAN.deleteMany();
  // await prisma.iNV_STOCK.deleteMany();
  // await prisma.iNV_STOCK_LOG.deleteMany();

  // --- Seed SYS_USERS ---
  await prisma.sYS_USERS.createMany({
    data: [
      {
        email: 'admin@example.com',
        username: 'admin',
        password: hashedAdmin, // hash mật khẩu trước khi lưu
        isactive: true,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        email: 'user1@example.com',
        username: 'user1',
        password: hashedUser,
        isactive: true,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        email: 'user2@example.com',
        username: 'user2',
        password: hashedUser,
        isactive: true,
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.sYS_USERGROUPS.createMany({
  data: [
    {
      usergroupid: 'ADMIN',
      usergroupname: 'Quản trị hệ thống',
      note: 'Nhóm người dùng có toàn quyền truy cập để quản lý hệ thống.',
      createdby: 'prisma',
      createdtime: new Date(),
    },
    {
      usergroupid: 'USER',
      usergroupname: 'Người dùng',
      note: 'Nhóm người dùng có quyền truy cập cơ bản để sử dụng các tính năng thông thường.',
      createdby: 'prisma',
      createdtime: new Date(),
    },
  ],
  skipDuplicates: true,
});

  await prisma.sYS_USER_BRANCHES.createMany({
    data: [
      { userid: 1, officescope: 'N', branchid: 'HCM01', createdby: 'prisma', createdtime: new Date() },
      { userid: 2, officescope: 'B', branchid: 'HN01', createdby: 'prisma', createdtime: new Date() },
      { userid: 3, officescope: 'T', branchid: 'DN1', createdby: 'prisma', createdtime: new Date() },
    ],
    skipDuplicates: true,
  });

  await prisma.sYS_ACCESSRIGHT.createMany({
    data: [
      // Granting full access to the admin user (userid: 1) for all menus.
      // The usergroupid and officescope can be left null as permissions are assigned per user.
      { userid: 1, usergroupid: 'ADMIN', menuid: 'dashboard', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 2, usergroupid: 'ADMIN', menuid: 'common', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 3, usergroupid: 'ADMIN', menuid: 'cm_branch', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 4, usergroupid: 'ADMIN', menuid: 'cm_brand', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 5, usergroupid: 'ADMIN', menuid: 'cm_unit', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 6, usergroupid: 'ADMIN', menuid: 'cm_payment', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 7, usergroupid: 'ADMIN', menuid: 'cm_currency', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 8, usergroupid: 'ADMIN', menuid: 'cm_discount', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 9, usergroupid: 'ADMIN', menuid: 'cm_ram', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 10, usergroupid: 'ADMIN', menuid: 'cm_drive', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 11, usergroupid: 'ADMIN', menuid: 'cm_color', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 12, usergroupid: 'ADMIN', menuid: 'cm_tax', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 13, usergroupid: 'ADMIN', menuid: 'cm_service', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 14, usergroupid: 'ADMIN', menuid: 'cm_tariff', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 15, usergroupid: 'ADMIN', menuid: 'cm_sale', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 16, usergroupid: 'ADMIN', menuid: 'cm_technical', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 17, usergroupid: 'ADMIN', menuid: 'databulk', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 18, usergroupid: 'ADMIN', menuid: 'dt_staff', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 19, usergroupid: 'ADMIN', menuid: 'dt_service_staff', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 20, usergroupid: 'ADMIN', menuid: 'dt_kpi_staff', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 21, usergroupid: 'ADMIN', menuid: 'item_detail', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 22, usergroupid: 'ADMIN', menuid: 'item_image', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 23, usergroupid: 'ADMIN', menuid: 'item_privilege', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 24, usergroupid: 'ADMIN', menuid: 'item_gift', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 25, usergroupid: 'ADMIN', menuid: 'order', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 26, usergroupid: 'ADMIN', menuid: 'ord_service', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 27, usergroupid: 'ADMIN', menuid: 'service', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 28, usergroupid: 'ADMIN', menuid: 'srv_log', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 29, usergroupid: 'ADMIN', menuid: 'plan', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 30, usergroupid: 'ADMIN', menuid: 'plan_inv', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 31, usergroupid: 'ADMIN', menuid: 'report', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 32, usergroupid: 'ADMIN', menuid: 'rp_item', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 33, usergroupid: 'ADMIN', menuid: 'rp_branch', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
      { userid: 34, usergroupid: 'ADMIN', menuid: 'rp_stock', isview: true, isaddnew: true, ismodify: true, isdelete: true, createdby: 'prisma', createdtime: new Date() },
    ],
    skipDuplicates: true,
  });

  await prisma.sYS_MENU.createMany({
    data: [
      { menuid: 'dashboard', menuname: 'Tổng quan', path: '/dashboard', icon: 'fa-solid fa-store', parentid: null, orderby: 1, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'common', menuname: 'Danh mục', path: '/common', icon: 'fa-solid fa-store', parentid: null, orderby: 20, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_branch', menuname: 'Chi nhánh', path: '/cm_branch', icon: '', parentid: 'common', orderby: 1, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_brand', menuname: 'Thương hiệu', path: '/cm_brand', icon: '', parentid: 'common', orderby: 2, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_unit', menuname: 'Đơn vị tính', path: '/cm_unit', icon: '', parentid: 'common', orderby: 3, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_payment', menuname: 'Phương thức thanh toán', path: '/cm_payment', icon: '', parentid: 'common', orderby: 4, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_currency', menuname: 'Tiền tệ', path: '/cm_currency', icon: '', parentid: 'common', orderby: 5, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_discount', menuname: 'Giảm giá', path: '/cm_discount', icon: '', parentid: 'common', orderby: 6, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_ram', menuname: 'Ram', path: '/cm_ram', icon: '', parentid: 'common', orderby: 7, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_drive', menuname: 'Ổ cứng', path: '/cm_drive', icon: '', parentid: 'common', orderby: 8, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_color', menuname: 'Màu sắc', path: '/cm_color', icon: '', parentid: 'common', orderby: 9, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_tax', menuname: 'Thuế', path: '/cm_tax', icon: '', parentid: 'common', orderby: 10, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_service', menuname: 'Dịch vụ', path: '/cm_service', icon: '', parentid: 'common', orderby: 11, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_tariff', menuname: 'Biểu cước', path: '/cm_tariff', icon: '', parentid: 'common', orderby: 12, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_sale', menuname: 'Nhân viên bán hàng', path: '/cm_sale', icon: '', parentid: 'common', orderby: 13, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'cm_technical', menuname: 'Nhân viên kỹ thuật', path: '/cm_technical', icon: '', parentid: 'common', orderby: 14, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'databulk', menuname: 'Dữ liệu', path: '/databulk', icon: '', parentid: null, orderby: 20, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'dt_staff', menuname: 'Danh sách nhân viên', path: '/dt_staff', icon: '', parentid: 'databulk', orderby: 1, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'dt_service_staff', menuname: 'Danh sách dịch vụ', path: '/dt_service_staff', icon: '', parentid: 'databulk', orderby: 2, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'dt_kpi_staff', menuname: 'Chỉ tiêu KPI', path: '/dt_kpi_staff', icon: '', parentid: 'databulk', orderby: 3, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'item_detail', menuname: 'Chi tiết sản phẩm', path: '/item_detail', icon: '', parentid: 'databulk', orderby: 4, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'item_image', menuname: 'Hình ảnh sản phẩm', path: '/item_image', icon: '', parentid: 'databulk', orderby: 5, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'item_privilege', menuname: 'Quyền lợi đi kèm', path: '/item_privilege', icon: '', parentid: 'databulk', orderby: 6, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'item_gift', menuname: 'Quà tặng đi kèm', path: '/item_gift', icon: '', parentid: 'databulk', orderby: 7, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'order', menuname: 'Đơn hàng', path: '/order', icon: '', parentid: null, orderby: 20, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'ord_service', menuname: 'Đơn hàng vận chuyển', path: '/ord_service', icon: '', parentid: 'order', orderby: 1, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'service', menuname: 'Dịch vụ', path: '/service', icon: '', parentid: null, orderby: 20, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'srv_log', menuname: 'Dịch vụ đính kèm', path: '/srv_log', icon: '', parentid: 'service', orderby: 1, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'plan', menuname: 'Kế hoạch', path: '/plan', icon: '', parentid: null, orderby: 20, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'plan_inv', menuname: 'Kế hoạch tồn', path: '/plan_inv', icon: '', parentid: 'plan', orderby: 1, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'report', menuname: 'Báo cáo', path: '/report', icon: '', parentid: null, orderby: 100, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'rp_item', menuname: 'Doanh số bán hàng', path: '/rp_item', icon: '', parentid: 'report', orderby: 1, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'rp_branch', menuname: 'Doanh số chi nhánh', path: '/rp_branch', icon: '', parentid: 'report', orderby: 2, createdby: 'prisma', createdtime: new Date() },
      { menuid: 'rp_stock', menuname: 'Doanh số tồn kho', path: '/rp_stock', icon: '', parentid: 'report', orderby: 3, createdby: 'prisma', createdtime: new Date() },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_BRANCH.createMany({
    data: [
      {
        officescope: 'N',
        officename: 'NAM',
        branchid: 'HCM01',
        branchname: 'Hồ Chí Minh - Quận 1',
        address: '123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
        totalemployee: 5,
        totalsale: 100,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        officescope: 'N',
        officename: 'NAM',
        branchid: 'HCM07',
        branchname: 'Hồ Chí Minh - Quận 7',
        address: '456 Nguyễn Thị Thập, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh',
        totalemployee: 7,
        totalsale: 2000,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        officescope: 'B',
        officename: 'BẮC',
        branchid: 'HN01',
        branchname: 'Hà Nội - Hoàn Kiếm',
        address: '78 Tràng Tiền, Phường Tràng Tiền, Quận Hoàn Kiếm, Hà Nội',
        totalemployee: 10,
        totalsale: 5000,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        officescope: 'T',
        officename: 'TRUNG',
        branchid: 'DN1',
        branchname: 'Đà Nẵng - Hải Châu',
        address: '12 Bạch Đằng, Phường Hải Châu 1, Quận Hải Châu, TP. Đà Nẵng',
        totalemployee: 8,
        totalsale: 4000,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        officescope: 'A',
        officename: 'TẤT CẢ',
        branchid: 'KHO1',
        branchname: 'Kho Trung Tâm - TP.HCM',
        address: 'Khu CN Tân Thuận, TP. Hồ Chí Minh',
        totalemployee: 3,
        totalsale: 500,
        createdby: 'prisma',
        createdtime: new Date(),
      }
    ],
    skipDuplicates: true,
  });

  await prisma.cM_BRAND.createMany({
    data: [
      { brandid: 'APPLE', brandname: 'Apple', note: 'MacBook', createdby: 'prisma', createdtime: new Date() },
      { brandid: 'DELL', brandname: 'Dell', note: 'XPS, Inspiron', createdby: 'prisma', createdtime: new Date() },
      { brandid: 'ASUS', brandname: 'Asus', note: 'ZenBook, VivoBook', createdby: 'prisma', createdtime: new Date() },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_UNIT.createMany({
    data: [
      { unitid: 'PCS', unitname: 'Cái', createdby: 'prisma', createdtime: new Date() },
      { unitid: 'BOX', unitname: 'Hộp', createdby: 'prisma', createdtime: new Date() },
      { unitid: 'SET', unitname: 'Bộ', createdby: 'prisma', createdtime: new Date() },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_PAYMENT.createMany({
    data: [
      { paymentid: 'TM', paymentname: 'Tiền mặt', paymenttype: 'FIAT', createdby: 'prisma', createdtime: new Date() },
      { paymentid: 'CKB', paymentname: 'Chuyển khoản ngân hàng', paymenttype: 'BANK', createdby: 'prisma', createdtime: new Date() },
      { paymentid: 'CKC', paymentname: 'Chuyển khoản stablecoin', paymenttype: 'CRYPTO', createdby: 'prisma', createdtime: new Date() },
      { paymentid: 'CKO', paymentname: 'Chuyển khoản khác', paymenttype: 'OTHER', createdby: 'prisma', createdtime: new Date() },
    ],
  });

  await prisma.cM_CURRENCY.createMany({
    data: [
      { currencyid: 'VND', currencyname: 'Việt Nam Đồng', symbol: '₫', createdby: 'prisma', createdtime: new Date() },
      { currencyid: 'USD', currencyname: 'Đô la Mỹ', symbol: '$', createdby: 'prisma', createdtime: new Date() },
    ],
  });

  await prisma.cM_DISCOUNT.createMany({
    data: [
      { discountid: 'GIAM10', note: 'Giảm 10%', deal: 10, startdate: null, enddate: null, createdby: 'prisma', createdtime: new Date() },
    ],
  });

  // Thiéu bảng quản lý CPU, VGA, SCREEN
  // CPU sẽ có các mã như: CPUi5, CPUi7, CPUi9, CPUM1, CPUM2
  // VGA sẽ có các mã như: VGAGTX1650, VGARGTX2060, VGARGTX3060, VGARGTX4060
  // SCREEN sẽ có các mã như: SC13INCH, SC14INCH, SC15INCH, SC16INCH, SC17INCH 
  await prisma.cM_RAM.createMany({
    data: [
      {
        ramid: 'RAMTYPE001',
        ramname: '8GB LPDDR4X',
        note: 'RAM tiêu chuẩn cho laptop phổ thông',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        ramid: 'RAMTYPE002',
        ramname: '16GB LPDDR5',
        note: 'Hiệu năng cao cho gaming và đồ họa',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        ramid: 'RAMTYPE003',
        ramname: '32GB DDR5',
        note: 'Cho workstation chuyên nghiệp',
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });
  
  await prisma.cM_DRIVE.createMany({
    data: [
      {
        driveid: 'SSDTYPE001',
        drivename: '512GB SSD NVMe',
        note: 'Tốc độ đọc ghi cao, phù hợp nhu cầu văn phòng',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        driveid: 'SSDTYPE002',
        drivename: '1TB SSD NVMe',
        note: 'Dung lượng lớn, tốc độ nhanh cho thiết kế đồ họa',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        driveid: 'HDDTYPE001',
        drivename: '1TB HDD 7200rpm',
        note: 'Giải pháp lưu trữ giá rẻ, tốc độ thấp hơn SSD',
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });
  
  await prisma.cM_COLOR.createMany({
    data: [
      {
        colorid: 'C0C0C0',
        colorname: 'Silver',
        hexcode: '#C0C0C0',
        note: 'Màu bạc sáng sang trọng',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        colorid: 'SPACEGRAY',
        colorname: 'Space Gray',
        hexcode: '#4B4B4B',
        note: 'Màu xám đậm hiện đại',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        colorid: '000000',
        colorname: 'Black',
        hexcode: '#000000',
        note: 'Màu đen mạnh mẽ, phổ biến',
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_TAX.createMany({
    data: [
      {
        taxid: 'TAX10',
        taxname: 'Thuế VAT 10%',
        taxrate: 10,
        applyto: 'ITEM',
        note: 'Áp dụng cho hàng hóa tiêu chuẩn',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        taxid: 'TAX5',
        taxname: 'Thuế VAT 5%',
        taxrate: 5,
        applyto: 'ITEM',
        note: 'Áp dụng cho sản phẩm đặc biệt',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        taxid: 'TAX0',
        taxname: 'Miễn thuế',
        taxrate: 0,
        applyto: 'ITEM',
        note: 'Hàng miễn thuế',
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_SERVICE.createMany({
    data: [
      {
        serviceid: 'WAR001',
        servicename: 'Bảo hành',
        servicetype: 'CH',
        servicecategory: 'WARRANTY',
        serviceprovider: 'INTERNAL',
        regionid: 'INNER',
        note: 'Dịch vụ bảo hành sản phẩm',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        serviceid: 'RET001',
        servicename: 'Đổi trả',
        servicetype: 'CH',
        servicecategory: 'RETURN',
        serviceprovider: 'INTERNAL',
        regionid: 'INNER',
        note: 'Dịch vụ đổi trả sản phẩm',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        serviceid: 'INS001',
        servicename: 'Cài đặt phần mềm',
        servicetype: 'CH',
        servicecategory: 'INSTALL',
        serviceprovider: 'INTERNAL',
        regionid: 'INNER',
        note: 'Cài đặt hệ điều hành, ứng dụng',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        serviceid: 'DEL001',
        servicename: 'Giao hàng',
        servicetype: 'CH',
        servicecategory: 'DELIVERY',
        note: 'Dịch vụ vận chuyển sản phẩm đến khách hàng',
        serviceprovider: 'INTERNAL',
        regionid: 'INNER',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        serviceid: 'DEL002',
        servicename: 'Giao hàng',
        servicetype: 'GHTK',
        servicecategory: 'DELIVERY',
        note: 'Dịch vụ vận chuyển sản phẩm đến khách hàng',
        serviceprovider: 'THIRD_PARTY',
        regionid: 'OUTER',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        serviceid: 'MAI001',
        servicename: 'Bảo trì',
        servicetype: 'CH',
        servicecategory: 'MAINTAINER',
        note: 'Dịch vụ hợp đồng bảo trì thiết bị',
        serviceprovider: 'INTERNAL',
        regionid: 'INNER',
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_TARIFF.createMany({
    data: [
      {
        tariffid: 'TAW001',
        serviceid: 'WAR-250910001',
        note: 'Bảo hành 12 tháng cho laptop',
        unitprice: 0, // thường đi kèm sản phẩm
        currencyid: 'VND',
        taxid: 'TAX5',
        regionid: 'INNER',
        regionname: 'Nội thành',
        validfrom: new Date('2025-01-01'),
        validto: new Date('2030-12-31'),
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        tariffid: 'TAR001',
        serviceid: 'RET001',
        note: 'Phí đổi trả trong 7 ngày',
        unitprice: 50000,
        currencyid: 'VND',
        taxid: 'TAX10',
        regionid: 'INNER',
        regionname: 'Nội thành',
        validfrom: new Date('2025-01-01'),
        validto: new Date('2030-12-31'),
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        tariffid: 'TAI001',
        serviceid: 'INS001',
        note: 'Cài đặt hệ điều hành Windows',
        unitprice: 200000,
        currencyid: 'VND',
        taxid: 'TAX10',
        regionid: 'INNER',
        regionname: 'Nội thành',
        validfrom: new Date('2025-01-01'),
        validto: new Date('2030-12-31'),
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        tariffid: 'TAD001',
        serviceid: 'DEL001',
        note: 'Giao hàng nội thành TP.HCM',
        unitprice: 30000,
        currencyid: 'VND',
        taxid: 'TAX0',
        regionid: 'INNER',
        regionname: 'Nội thành',
        validfrom: new Date('2025-01-01'),
        validto: new Date('2030-12-31'),
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_SALE.createMany({
    data: [
      {
        salesid: 'SALE-NVA01',
        salesname: 'Nguyễn Văn A',
        positionscope: 'NV', 
        positionname: 'Nhân viên bán hàng',
        phone: '0912345678',
        email: 'nguyenvana@example.com',
        citizenid: '012345678901',
        birthday: new Date('1990-05-15'),
        address: '123 Nguyễn Huệ, Quận 1, TP. HCM',
        note: 'Nhân viên kinh doanh xuất sắc',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        salesid: 'SALE-NTB01',
        salesname: 'Trần Thị B',
        positionscope: 'TP',
        positionname: 'Trưởng phòng bán hàng',
        phone: '0987654321',
        email: 'tranthib@example.com',
        citizenid: '098765432109',
        birthday: new Date('1985-12-20'),
        address: '456 Lê Lợi, Quận 3, TP. HCM',
        note: 'Trưởng phòng kinh doanh xuất sắc',
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        salesid: 'SALE-LVC01',
        salesname: 'Lê Văn C',
        positionscope: 'NV', 
        positionname: 'Nhân viên bán hàng',
        phone: '0901122334',
        email: 'levanc@example.com',
        citizenid: '045612378901',
        birthday: new Date('1995-03-10'),
        address: '789 Trần Phú, Quận Hà Đông, Hà Nội',
        note: 'Nhân viên kinh doanh xuất sắc',
        createdby: 'prisma',
        createdtime: new Date(),
      }
    ],
    skipDuplicates: true,
  });

  await prisma.cM_TECHNICAL.createMany({
    data: [
      {
        technicalsid: "TECH-NVA01",
        technicalname: "Nguyễn Văn An",
        positionscope: "NV",
        positionname: "Nhân viên kỹ thuật",
        phone: "0901234567",
        email: "an.nguyen@example.com",
        citizenid: "079123456789",
        birthday: new Date("1995-05-20"),
        address: "123 Lê Lợi, Quận 1, TP.HCM",
        note: "Chuyên lắp đặt và bảo hành",
        isactive: true,
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        technicalsid: "TECH-TTB01",
        technicalname: "Trần Thị Bình",
        positionscope: "NV",
        positionname: "Nhân viên kỹ thuật",
        phone: "0902345678",
        email: "binh.tran@example.com",
        citizenid: "079987654321",
        birthday: new Date("1993-08-15"),
        address: "45 Nguyễn Trãi, Quận 5, TP.HCM",
        note: "Phụ trách khu vực HCM_OUTER",
        isactive: true,
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        technicalsid: "TECH-PVC01",
        technicalname: "Phạm Văn Cường",
        positionscope: "TP",
        positionname: "Trưởng nhóm kỹ thuật",
        phone: "0913456789",
        email: "cuong.pham@example.com",
        citizenid: "031234567890",
        birthday: new Date("1988-11-30"),
        address: "67 Lý Thường Kiệt, Quận 10, TP.HCM",
        note: "Quản lý nhóm bảo hành",
        isactive: true,
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        technicalsid: "TECH-LMH01",
        technicalname: "Lê Minh Hoàng",
        positionscope: "QL",
        positionname: "Quản lý kỹ thuật",
        phone: "0924567890",
        email: "hoang.le@example.com",
        citizenid: "023456789012",
        birthday: new Date("1985-03-10"),
        address: "89 Trần Hưng Đạo, Quận 1, TP.HCM",
        note: "Phụ trách toàn bộ mảng kỹ thuật",
        isactive: true,
        createdby: "prisma",
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.cM_CUSTOMER.createMany({
    data: [
      {
        customerid: "CUSINVA001",
        customername: "Nguyễn Văn An",
        customertype: "I",
        contactname: null,
        phone: "0905123456",
        email: "an.nguyen@example.com",
        citizenid: "079123456789",
        taxid: null,
        birthday: new Date("1990-05-15"),
        address: "123 Lê Lợi, Quận 1, TP.HCM",
        note: "Khách hàng thân thiết",
        isactive: true,
        createdby: "system",
        createdtime: new Date(),
      },
      {
        customerid: "CUSITTB001",
        customername: "Trần Thị Bình",
        customertype: "I",
        contactname: null,
        phone: "0912123456",
        email: "binh.tran@example.com",
        citizenid: "031234567890",
        taxid: null,
        birthday: new Date("1985-09-20"),
        address: "456 Nguyễn Huệ, Quận 1, TP.HCM",
        note: null,
        isactive: true,
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        customerid: "CUSCNVC001",
        customername: "Công ty TNHH ABC",
        customertype: "C",
        contactname: "Ngô Văn Cường",
        phone: "02812345678",
        email: "contact@abc.com.vn",
        citizenid: null,
        taxid: "0312345678",
        birthday: null,
        address: "789 Điện Biên Phủ, Quận Bình Thạnh, TP.HCM",
        note: "Khách hàng doanh nghiệp ký hợp đồng bảo trì",
        isactive: true,
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        customerid: "CUSCPTD001",
        customername: "Công ty Cổ phần XYZ",
        customertype: "C",
        contactname: "Phạm Thị Dung",
        phone: "02887654321",
        email: "info@xyzcorp.vn",
        citizenid: null,
        taxid: "0319876543",
        birthday: null,
        address: "12 Hai Bà Trưng, Quận 3, TP.HCM",
        note: "Doanh nghiệp đối tác lâu năm",
        isactive: true,
        createdby: "prisma",
        createdtime: new Date(),
      },
    ],
  });
  
  await prisma.cM_CATEGORY.createMany({
    data: [
      {
        categoryid: 'PHONE',
        categoryname: 'Điện thoại',
        note: 'Danh mục điện thoại thông minh',
        sortorder: 1,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        categoryid: 'LAPTOP',
        categoryname: 'Laptop',
        note: 'Danh mục máy tính xách tay',
        sortorder: 2,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        categoryid: 'DESKTOP',
        categoryname: 'Máy tính bàn',
        note: 'Danh mục PC để bàn',
        sortorder: 3,
        createdby: 'prisma',
        createdtime: new Date(),
      },
      {
        categoryid: 'ACCESSORY',
        categoryname: 'Phụ kiện',
        note: 'Danh mục phụ kiện công nghệ',
        sortorder: 4,
        createdby: 'prisma',
        createdtime: new Date(),
      },
    ],
    skipDuplicates: true, // để tránh lỗi khi chạy lại seed
  });

  // 11. DT_STAFF
  await prisma.dT_STAFF.createMany({
    data: [
      { staffid: 'SALE-NVA01', staffname: 'Nhân viên bán hàng', branchid: 'HCM01', basesalary: 7000000, createdby: 'prisma', createdtime: new Date() },
      { staffid: 'S-NVB01', staffname: 'Nhân viên bán hàng', branchid: 'HCM07', basesalary: 7000000, createdby: 'prisma', createdtime: new Date() },
      { staffid: 'S-NVC01', staffname: 'Nhân viên bán hàng', branchid: 'HN01', basesalary: 7000000, createdby: 'prisma', createdtime: new Date() },
      { staffid: 'TECH-NVA01', staffname: 'Nhân viên kỹ thuật', branchid: 'HCM01', basesalary: 7000000, createdby: 'prisma', createdtime: new Date() },
      { staffid: 'TECH-TTB01', staffname: 'Nhân viên kỹ thuật', branchid: 'HN01', basesalary: 7000000, createdby: 'prisma', createdtime: new Date() },
      { staffid: 'TECH-PVC01', staffname: 'Nhân viên kỹ thuật', branchid: 'HCM07', basesalary: 7000000, createdby: 'prisma', createdtime: new Date() },
      { staffid: 'TECH-LMH01', staffname: 'Nhân viên kỹ thuật', branchid: 'HN01', basesalary: 7000000, createdby: 'prisma', createdtime: new Date() },
    ],
  });

  await prisma.dT_SERVICE_STAFF.createMany({
    data: [
      {
        serviceid: "INS-250828001", // Ví dụ: cài đặt
        staffid: "TECH-NVA01", // nhân viên kỹ thuật
        branchid: "HCM01",
        customerid: "CUSINVA001",
        laborcost: 300000,
        partscost: 150000,
        transportcost: 50000,
        commission: 30000,
        contractvalue: null,
        totalamount: 530000,
        status: "D",
        servicedate: new Date("2025-09-01"),
        note: "Lắp đặt máy tính văn phòng",
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        serviceid: "WAR001", // Ví dụ: bảo hành
        staffid: "TECH-TTB01",
        branchid: "HCM01",
        customerid: "CUSCPTD001",
        laborcost: 0,
        partscost: 200000,
        transportcost: 0,
        commission: 0,
        contractvalue: null,
        totalamount: 200000,
        status: "D",
        servicedate: new Date("2025-09-02"),
        note: "Thay linh kiện bảo hành",
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        serviceid: "MAI001", // Ví dụ: hợp đồng bảo trì
        staffid: "TECH-LMH01",
        branchid: "HCM07",
        customerid: "CUSCNVC001",
        laborcost: 1000,
        partscost: 500000,
        transportcost: 200000,
        commission: 100000,
        contractvalue: 50000,
        totalamount: 680000,
        status: "N",
        servicedate: new Date("2025-09-05"),
        note: "Ký hợp đồng bảo trì 1 năm",
        createdby: "prisma",
        createdtime: new Date(),
      },
      {
        serviceid: "DEL-250828001", // Ví dụ: giao hàng
        staffid: "TECH-NVA01",
        branchid: "HCM07",
        customerid: "CUSITTB001",
        laborcost: 100000,
        partscost: 0,
        transportcost: 30000,
        commission: null,
        contractvalue: null,
        totalamount: 130000,
        status: "C",
        servicedate: new Date("2025-09-03"),
        note: "Khách hủy giao hàng do đổi lịch",
        createdby: "prisma",
        createdtime: new Date(),
      },
    ],
  });

  // 12. DT_KPI_STAFF
  await prisma.dT_KPI_STAFF.createMany({
    data: [
      { kpiid: 'KPI-250828', staffid: 'SALE-NVA01', branchid: 'HCM01', period: 'Q1-2025', target: 50, achieved: 1000000, createdby: 'prisma', createdtime: new Date() },
      { kpiid: 'KPI-250829', staffid: 'TECH-NVA01', branchid: 'HCM01', period: 'Q1-2025', target: 50, achieved: 1000000, createdby: 'prisma', createdtime: new Date() },
      { kpiid: 'KPI-250830', staffid: 'T-NVC01', branchid: 'HN01', period: 'Q1-2025', target: 50, achieved: 1000000, createdby: 'prisma', createdtime: new Date() }
    ],
  });

  await prisma.dT_ITEM.create({
    data: { itemid: 'MBPROM1XX1', categoryid: 'LAPTOP', itemname: 'MacBook Pro 14 M1', categoryname: 'Laptop', brandid: 'APPLE', quantity: 10, model: 'MacBook Pro 14 M1 24', color: 'Silver', condition: 'like new', weight: '1.6 kg', unitid: 'PCS', slug: 'macbook-pro-14-m1', image: '/product-1/laptop-temp.jpg', policy: 'Bảo hành 12 tháng chính hãng Apple', createdby: 'prisma', createdtime: new Date() },
  });

  // 14. ITEM_DETAIL COMPUTER
  await prisma.iTEM_COMPUTER_DETAIL.create({
    data: {
      itemid: 'MBPROM1XX1',
      cpu: 'Apple M1 Pro 10-core CPU',
      ram: '16GB Unified Memory',
      drive: '512GB SSD',
      vga: 'Integrated 16-core GPU',
      screen: '14.2-inch Liquid Retina XDR, 3024x1964',
      port: '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, headphone jack',
      pin: '70Wh Li-Polymer, 17 giờ lướt web',
      price: 55000000,
      createdby: 'prisma',
      createdtime: new Date(),
    },
  });


  // 14. ITEM_DETAIL COMPUTER
  await prisma.iTEM_PHONE_DETAIL.create({
    data: {
        itemid: "IP15PM-256-BLK",
        chipset: "Apple A17 Pro",
        gpu: "Apple 6-core GPU",
        ram: "8GB",
        storage: "256GB",

        size: "6.7 inch",
        type: "Super Retina XDR OLED",
        refresh: "120Hz ProMotion",
        resolution: "2796 x 1290 pixels",

        camerarear: "48MP main + 12MP ultra-wide + 12MP telephoto",
        camerafront: "12MP TrueDepth",
        battery: "4422 mAh",
        charging: "27W fast charge, 15W MagSafe",

        sim: "Dual SIM (nano-SIM + eSIM)",
        network: "5G, 4G LTE",
        wifi: "Wi-Fi 6E",
        bluetooth: "Bluetooth 5.3",
        nfc: true,
        usb: "USB-C (USB 3)",
        gps: "GPS, GLONASS, Galileo, QZSS, BeiDou",
        pin: '70Wh Li-Polymer, 10 giờ lướt web',

        osversion: "iOS 17",
        waterresist: "IP68",

        price: 6000000,

        createdby: "prisma",
        createdtime: new Date(),
    },
  });

  await prisma.iTEM_IMAGE.create({
      data: { imageid: 'IMG-250910001', imageurl: '/images/macbook.jpg', createdby: 'system', createdtime: new Date() },
  });

// 16. ITEM_PRIVILEGES
  await prisma.iTEM_PRIVILEGES.create({
    data: { privilegeid: 'PRI001', content: 'Bảo hành 2 năm', createdby: 'prisma', createdtime: new Date() },
  });

// 17. ITEM_GIFTS
  await prisma.iTEM_GIFTS.create({
    data: { giftid: 'GIF001', content: 'Tặng balo chống sốc', createdby: 'prisma', createdtime: new Date() },
  });
  
  // 18. ORDERS
  await prisma.oRDERS_SERVICE.create({
    data: { orderid: 'ORD-250910001', branchid: 'HCM01', staffid: 'SALE-NVA01', customerid: 'CUSINVA001', ordertype: 'S', currencyid: 'VND', paymentid: 'TM', status: 'C', invoicetype: 'N', paydate: new Date(), createdby: 'prisma', createdtime: new Date() },
  });

  await prisma.oRDERS_DETAIL.create({
    data: { 
      orderid: 'ORD-250910001', 
      itemid: 'MBPROM1XX1', 
      privilegeid: 'PRI001', 
      giftid: 'GIF001', 
      discountid: 'GIAM10', 
      tariffid: 'TAF-D250910001', 
      quantity: 1, 
      price: 19000000, 
      discount: 1900000,  // 10%
      taxid: 'TAX-250910001', 
      taxrate: 10, 
      taxamount: 1710000, 
      tariffname: 'Cước phí giao hàng', 
      subtotal: 17100000, 
      totalamount: 18810000, 
      createdby: 'prisma', 
      createdtime: new Date() 
    },
});

  // C – Created: Đơn hàng được tạo, nhưng chưa xử lý vận chuyển.
  // P – Processing: Đơn hàng đang được chuẩn bị để giao (đóng gói, bàn giao cho bên vận chuyển).
  // S – Shipped: Đơn hàng đã rời kho và đang trên đường giao.
  // D – Delivered: Đơn hàng đã được giao thành công cho khách hàng.
  // R – Returned: Đơn hàng bị trả về.
  // X – Cancelled: Đơn hàng bị hủy. (Nếu chỉ lưu 1 ký tự thì có thể dùng X cho Cancelled.)
  // 21. SERVICE_LOG
  await prisma.sERVICE_LOG.create({
    data: { serviceid: 'DEL-250828001', orderid: 'ORD-250910001', status: 'C', shipdate: new Date(), createdby: 'prisma', createdtime: new Date() },
  });

  await prisma.iNVOICE.createMany({
    data: [
            {
              "invoiceid": "INV-HCM250828001",
              "orderid": "ORD-250910001",
              "branchid": "HCM01",
              "invoiceno": "000267",
              "customertaxid": "0312345678",
              "customername": "Công ty TNHH ABC",
              "customeraddr": "123 Nguyễn Văn Cừ, Quận 5, TP.HCM",
              "invoicetype": "C",
              "subtotal": 19000000,
              "discount": 19000000,
              "taxrate": 10,
              "taxamount": 1710000,
              "totalamount": 18810000,
              "paymentid": "TM",
              "status": "C",
              "invoicedate": "2025-08-28T08:30:00.000Z",
              "draft": false,
              "issueddate": "2025-08-28T09:00:00.000Z",
              "createdby": "prisma",
              "createdtime": "2025-08-28T08:25:00.000Z",
            },
          ]
  });

  // 22. INV_PLAN
  await prisma.iNV_PLAN.create({
    data: { planid: 'PLA-250910001', plantype: 'P', branchid: 'HCM01', sourcebranchid: null, itemid: 'MBPROM1XX1', quantity: 10, expectdate: new Date(), status: 'C', orderid: null, note: 'Nhận hàng thành công', createdby: 'prisma', createdtime: new Date() },
  });

  // 23. INV_STOCK
  await prisma.iNV_STOCK.create({
    data: { refrowguid: null, branchid: 'HCM01', itemid: 'MBPROM1XX1', quantity: 9, createdby: 'prisma', createdtime: new Date() },
  });

  await prisma.iNV_STOCK_LOG.createMany({
    data: [
            { refrowguid: null, branchid: 'HCM01', itemid: 'MBPROM1XX1', planid: 'PLA-250910001', quantity: 10, status: 'I', reason: 'Nhập hàng về chi nhánh thành công', createdby: 'prisma', createdtime: new Date() },
            { refrowguid: null, branchid: 'HCM01', itemid: 'MBPROM1XX1', orderid: 'ORD-250910001', quantity: 1, status: 'O', reason: 'Xuất hàng thành công', createdby: 'prisma', createdtime: new Date() },
          ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
