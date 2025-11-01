-- CreateTable
CREATE TABLE "public"."SYS_USERS" (
    "rowguid" UUID NOT NULL,
    "id" BIGSERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "expiredate" TIMESTAMP(6),
    "birthday" TIMESTAMP(6),
    "address" VARCHAR(500),
    "telphone" VARCHAR(50),
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "SYS_USERS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SYS_USERGROUPS" (
    "rowguid" UUID NOT NULL,
    "usergroupid" VARCHAR(50) NOT NULL,
    "usergroupname" VARCHAR(100) NOT NULL,
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "SYS_USERGROUPS_pkey" PRIMARY KEY ("usergroupid")
);

-- CreateTable
CREATE TABLE "public"."SYS_USER_BRANCHES" (
    "rowguid" UUID NOT NULL,
    "userid" INTEGER,
    "officescope" CHAR(1),
    "role" VARCHAR(20),
    "branchid" VARCHAR(50),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."SYS_ACCESSRIGHT" (
    "rowguid" UUID NOT NULL,
    "userid" INTEGER NOT NULL,
    "usergroupid" VARCHAR(50) NOT NULL,
    "officescope" CHAR(1),
    "menuid" VARCHAR(50),
    "isview" BOOLEAN NOT NULL DEFAULT false,
    "isaddnew" BOOLEAN NOT NULL DEFAULT false,
    "ismodify" BOOLEAN NOT NULL DEFAULT false,
    "isdelete" BOOLEAN NOT NULL DEFAULT false,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "SYS_ACCESSRIGHT_pkey" PRIMARY KEY ("usergroupid")
);

-- CreateTable
CREATE TABLE "public"."SYS_MENU" (
    "rowguid" UUID NOT NULL,
    "menuid" VARCHAR(50) NOT NULL,
    "menuname" VARCHAR(100) NOT NULL,
    "path" VARCHAR(255),
    "icon" VARCHAR(50),
    "parentid" VARCHAR(50),
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "orderby" INTEGER,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "SYS_MENU_pkey" PRIMARY KEY ("menuid")
);

-- CreateTable
CREATE TABLE "public"."CM_BRANCH" (
    "rowguid" UUID NOT NULL,
    "officescope" CHAR(1),
    "officename" VARCHAR(10),
    "branchid" VARCHAR(50) NOT NULL,
    "branchname" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255),
    "coordinates" VARCHAR(255),
    "totalemployee" INTEGER,
    "totalsale" INTEGER,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_BRANCH_pkey" PRIMARY KEY ("branchid")
);

-- CreateTable
CREATE TABLE "public"."CM_BRAND" (
    "rowguid" UUID NOT NULL,
    "brandid" VARCHAR(50) NOT NULL,
    "brandname" VARCHAR(100) NOT NULL,
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_BRAND_pkey" PRIMARY KEY ("brandid")
);

-- CreateTable
CREATE TABLE "public"."CM_UNIT" (
    "rowguid" UUID NOT NULL,
    "unitid" VARCHAR(50) NOT NULL,
    "unitname" VARCHAR(100) NOT NULL,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_UNIT_pkey" PRIMARY KEY ("unitid")
);

-- CreateTable
CREATE TABLE "public"."CM_PAYMENT" (
    "rowguid" UUID NOT NULL,
    "paymentid" VARCHAR(50) NOT NULL,
    "paymentname" VARCHAR(100) NOT NULL,
    "paymenttype" VARCHAR(20) NOT NULL,
    "currencyid" VARCHAR(50),
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_PAYMENT_pkey" PRIMARY KEY ("paymentid")
);

-- CreateTable
CREATE TABLE "public"."CM_CURRENCY" (
    "rowguid" UUID NOT NULL,
    "currencyid" VARCHAR(50) NOT NULL,
    "currencyname" VARCHAR(100) NOT NULL,
    "symbol" VARCHAR(10),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_CURRENCY_pkey" PRIMARY KEY ("currencyid")
);

-- CreateTable
CREATE TABLE "public"."CM_DISCOUNT" (
    "rowguid" UUID NOT NULL,
    "discountid" VARCHAR(50) NOT NULL,
    "note" VARCHAR(255),
    "deal" INTEGER,
    "startdate" TIMESTAMP(6),
    "enddate" TIMESTAMP(6),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_DISCOUNT_pkey" PRIMARY KEY ("discountid")
);

-- CreateTable
CREATE TABLE "public"."CM_RAM" (
    "rowguid" UUID NOT NULL,
    "ramid" VARCHAR(50) NOT NULL,
    "ramname" VARCHAR(100) NOT NULL,
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_RAM_pkey" PRIMARY KEY ("ramid")
);

-- CreateTable
CREATE TABLE "public"."CM_DRIVE" (
    "rowguid" UUID NOT NULL,
    "driveid" VARCHAR(50) NOT NULL,
    "drivename" VARCHAR(100) NOT NULL,
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_DRIVE_pkey" PRIMARY KEY ("driveid")
);

-- CreateTable
CREATE TABLE "public"."CM_COLOR" (
    "rowguid" UUID NOT NULL,
    "colorid" VARCHAR(50) NOT NULL,
    "colorname" VARCHAR(50) NOT NULL,
    "hexcode" VARCHAR(10),
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_COLOR_pkey" PRIMARY KEY ("colorid")
);

-- CreateTable
CREATE TABLE "public"."CM_TAX" (
    "rowguid" UUID NOT NULL,
    "taxid" VARCHAR(50) NOT NULL,
    "taxname" VARCHAR(100) NOT NULL,
    "taxrate" DOUBLE PRECISION NOT NULL,
    "applyto" TEXT,
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_TAX_pkey" PRIMARY KEY ("taxid")
);

-- CreateTable
CREATE TABLE "public"."CM_SERVICE" (
    "rowguid" UUID NOT NULL,
    "serviceid" VARCHAR(50) NOT NULL,
    "servicename" VARCHAR(100) NOT NULL,
    "servicetype" VARCHAR(50) NOT NULL,
    "servicecategory" VARCHAR(50) NOT NULL,
    "serviceprovider" VARCHAR(50),
    "regionid" VARCHAR(20),
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_SERVICE_pkey" PRIMARY KEY ("serviceid")
);

-- CreateTable
CREATE TABLE "public"."CM_TARIFF" (
    "rowguid" UUID NOT NULL,
    "tariffid" VARCHAR(50) NOT NULL,
    "serviceid" VARCHAR(50) NOT NULL,
    "unitprice" DECIMAL(15,3) NOT NULL,
    "currencyid" VARCHAR(50),
    "taxid" VARCHAR(50),
    "regionid" VARCHAR(20),
    "regionname" VARCHAR(50),
    "serviceprovider" VARCHAR(50),
    "partnercontractid" VARCHAR(50),
    "minquantity" INTEGER,
    "maxquantity" INTEGER,
    "validfrom" TIMESTAMP(6),
    "validto" TIMESTAMP(6),
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_TARIFF_pkey" PRIMARY KEY ("tariffid")
);

-- CreateTable
CREATE TABLE "public"."CM_SALE" (
    "rowguid" UUID NOT NULL,
    "salesid" VARCHAR(50) NOT NULL,
    "salesname" VARCHAR(150) NOT NULL,
    "positionscope" CHAR(2),
    "positionname" VARCHAR(100),
    "phone" VARCHAR(20),
    "email" VARCHAR(100),
    "citizenid" VARCHAR(20) NOT NULL,
    "birthday" TIMESTAMP(6),
    "address" VARCHAR(500),
    "note" VARCHAR(255),
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_SALE_pkey" PRIMARY KEY ("salesid")
);

-- CreateTable
CREATE TABLE "public"."CM_TECHNICAL" (
    "rowguid" UUID NOT NULL,
    "technicalsid" VARCHAR(50) NOT NULL,
    "technicalname" VARCHAR(150) NOT NULL,
    "positionscope" CHAR(2),
    "positionname" VARCHAR(100),
    "phone" VARCHAR(20),
    "email" VARCHAR(100),
    "citizenid" VARCHAR(20) NOT NULL,
    "birthday" TIMESTAMP(6),
    "address" VARCHAR(500),
    "note" VARCHAR(255),
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_TECHNICAL_pkey" PRIMARY KEY ("technicalsid")
);

-- CreateTable
CREATE TABLE "public"."CM_CUSTOMER" (
    "rowguid" UUID NOT NULL,
    "customerid" VARCHAR(50) NOT NULL,
    "customername" VARCHAR(150) NOT NULL,
    "customertype" CHAR(1) NOT NULL,
    "contactname" VARCHAR(100),
    "phone" VARCHAR(20),
    "email" VARCHAR(100),
    "citizenid" VARCHAR(20),
    "taxid" VARCHAR(50),
    "birthday" TIMESTAMP(6),
    "address" VARCHAR(500),
    "note" VARCHAR(255),
    "isactive" BOOLEAN NOT NULL DEFAULT true,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_CUSTOMER_pkey" PRIMARY KEY ("customerid")
);

-- CreateTable
CREATE TABLE "public"."CM_CATEGORY" (
    "rowguid" UUID NOT NULL,
    "categoryid" VARCHAR(50) NOT NULL,
    "categoryname" VARCHAR(100) NOT NULL,
    "note" VARCHAR(255),
    "sortorder" INTEGER,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "CM_CATEGORY_pkey" PRIMARY KEY ("categoryid")
);

-- CreateTable
CREATE TABLE "public"."DT_STAFF" (
    "rowguid" UUID NOT NULL,
    "staffid" VARCHAR(50) NOT NULL,
    "staffname" VARCHAR(50) NOT NULL,
    "branchid" VARCHAR(50) NOT NULL,
    "basesalary" DECIMAL(15,3) NOT NULL,
    "commissionrate" DOUBLE PRECISION,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "DT_STAFF_pkey" PRIMARY KEY ("staffid")
);

-- CreateTable
CREATE TABLE "public"."DT_SERVICE_STAFF" (
    "rowguid" UUID NOT NULL,
    "serviceid" VARCHAR(50) NOT NULL,
    "staffid" VARCHAR(50),
    "branchid" VARCHAR(50) NOT NULL,
    "customerid" VARCHAR(50),
    "laborcost" DECIMAL(15,3) NOT NULL,
    "partscost" DECIMAL(15,3) NOT NULL,
    "transportcost" DECIMAL(15,3),
    "commission" DECIMAL(15,3),
    "contractvalue" DECIMAL(15,3),
    "totalamount" DECIMAL(15,3) NOT NULL,
    "status" VARCHAR(1) NOT NULL,
    "servicedate" TIMESTAMP(6) NOT NULL,
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."DT_KPI_STAFF" (
    "rowguid" UUID NOT NULL,
    "kpiid" VARCHAR(50) NOT NULL,
    "staffid" VARCHAR(50) NOT NULL,
    "branchid" VARCHAR(50) NOT NULL,
    "period" VARCHAR(20) NOT NULL,
    "periodtype" CHAR(1) NOT NULL DEFAULT 'Q',
    "target" INTEGER NOT NULL,
    "achieved" DECIMAL(15,3) NOT NULL DEFAULT 0,
    "bonus" DECIMAL(15,3),
    "penalty" DECIMAL(15,3),
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "DT_KPI_STAFF_pkey" PRIMARY KEY ("kpiid")
);

-- CreateTable
CREATE TABLE "public"."DT_ITEM" (
    "rowguid" UUID NOT NULL,
    "itemid" VARCHAR(50) NOT NULL,
    "categoryid" VARCHAR(50) NOT NULL,
    "itemname" VARCHAR(255) NOT NULL,
    "categoryname" VARCHAR(100),
    "brandid" VARCHAR(50) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "model" VARCHAR(100),
    "color" VARCHAR(50),
    "condition" VARCHAR(50),
    "weight" VARCHAR(100),
    "unitid" VARCHAR(50) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "note" TEXT,
    "policy" VARCHAR(100),
    "status" VARCHAR(20),
    "ishot" BOOLEAN NOT NULL DEFAULT false,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "DT_ITEM_pkey" PRIMARY KEY ("itemid")
);

-- CreateTable
CREATE TABLE "public"."ITEM_COMPUTER_DETAIL" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "itemid" VARCHAR(50) NOT NULL,
    "cpu" VARCHAR(100),
    "mainboard" VARCHAR(100),
    "ram" VARCHAR(100),
    "drive" VARCHAR(100),
    "vga" VARCHAR(100),
    "screen" VARCHAR(100),
    "port" VARCHAR(200),
    "psu" VARCHAR(100),
    "case" VARCHAR(100),
    "fan" VARCHAR(100),
    "pin" VARCHAR(100),
    "os" VARCHAR(100),
    "weight" VARCHAR(50),
    "price" DECIMAL(15,3) NOT NULL,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."ITEM_PHONE_DETAIL" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "itemid" VARCHAR(50) NOT NULL,
    "chipset" VARCHAR(100),
    "gpu" VARCHAR(100),
    "ram" VARCHAR(50),
    "storage" VARCHAR(50),
    "expandable" BOOLEAN DEFAULT false,
    "size" VARCHAR(50),
    "type" VARCHAR(50),
    "refresh" VARCHAR(50),
    "resolution" VARCHAR(50),
    "camerarear" VARCHAR(200),
    "camerafront" VARCHAR(200),
    "battery" VARCHAR(50),
    "charging" VARCHAR(100),
    "sim" VARCHAR(50),
    "network" VARCHAR(50),
    "wifi" VARCHAR(50),
    "bluetooth" VARCHAR(50),
    "nfc" BOOLEAN DEFAULT false,
    "usb" VARCHAR(50),
    "audiojack" BOOLEAN DEFAULT false,
    "gps" VARCHAR(50),
    "pin" VARCHAR(100),
    "osversion" VARCHAR(100),
    "waterresist" VARCHAR(50),
    "price" DECIMAL(15,3) NOT NULL,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "ITEM_PHONE_DETAIL_pkey" PRIMARY KEY ("rowguid")
);

-- CreateTable
CREATE TABLE "public"."ITEM_IMAGE" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "imageid" VARCHAR(50) NOT NULL,
    "imageurl" VARCHAR(500) NOT NULL,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."ITEM_PRIVILEGES" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "privilegeid" VARCHAR(50) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."ITEM_GIFTS" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "giftid" VARCHAR(50) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."ORDERS_SERVICE" (
    "rowguid" UUID NOT NULL,
    "orderid" VARCHAR(50) NOT NULL,
    "branchid" VARCHAR(50) NOT NULL,
    "staffid" VARCHAR(50) NOT NULL,
    "customerid" VARCHAR(50) NOT NULL,
    "ordertype" CHAR(1) NOT NULL,
    "currencyid" VARCHAR(50) NOT NULL,
    "paymentid" VARCHAR(50) NOT NULL,
    "thirdpartyid" VARCHAR(50),
    "status" CHAR(1) NOT NULL,
    "invoicetype" CHAR(1),
    "servicefee" DECIMAL(15,3),
    "paydate" TIMESTAMP(6),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "ORDERS_SERVICE_pkey" PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "public"."ORDERS_DETAIL" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "orderid" VARCHAR(50) NOT NULL,
    "itemid" VARCHAR(50),
    "privilegeid" VARCHAR(50),
    "giftid" VARCHAR(50),
    "discountid" VARCHAR(50),
    "tariffid" VARCHAR(50),
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(15,3) NOT NULL,
    "discount" DECIMAL(15,3),
    "taxid" TEXT,
    "taxrate" DECIMAL(15,3),
    "taxamount" DECIMAL(15,3),
    "tariffname" VARCHAR(100),
    "subtotal" DECIMAL(15,3) NOT NULL,
    "totalamount" DECIMAL(15,3) NOT NULL,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."SERVICE_LOG" (
    "rowguid" UUID NOT NULL,
    "serviceid" VARCHAR(50) NOT NULL,
    "orderid" VARCHAR(50) NOT NULL,
    "provider" VARCHAR(50),
    "trackingid" VARCHAR(100),
    "servicefee" DECIMAL(15,3),
    "status" CHAR(1) NOT NULL,
    "shipdate" TIMESTAMP(6),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."INVOICE" (
    "rowguid" UUID NOT NULL,
    "invoiceid" VARCHAR(50) NOT NULL,
    "orderid" VARCHAR(50),
    "branchid" VARCHAR(50) NOT NULL,
    "invoiceno" VARCHAR(50) NOT NULL,
    "customertaxid" VARCHAR(50),
    "customername" VARCHAR(150),
    "customeraddr" VARCHAR(250),
    "invoicetype" CHAR(1) NOT NULL,
    "subtotal" DECIMAL(15,3),
    "discount" DECIMAL(15,3),
    "taxrate" DECIMAL(15,3),
    "taxamount" DECIMAL(15,3),
    "totalamount" DECIMAL(15,3),
    "paymentid" VARCHAR(50),
    "status" CHAR(1) NOT NULL,
    "invoicedate" TIMESTAMP(6) NOT NULL,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "issueddate" TIMESTAMP(6),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "INVOICE_pkey" PRIMARY KEY ("invoiceid")
);

-- CreateTable
CREATE TABLE "public"."INV_PLAN" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "planid" VARCHAR(50) NOT NULL,
    "plantype" CHAR(1) NOT NULL,
    "branchid" VARCHAR(50) NOT NULL,
    "sourcebranchid" VARCHAR(50),
    "itemid" VARCHAR(50) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "expectdate" TIMESTAMP(6) NOT NULL,
    "status" CHAR(1) NOT NULL,
    "orderid" VARCHAR(50),
    "note" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6),

    CONSTRAINT "INV_PLAN_pkey" PRIMARY KEY ("planid")
);

-- CreateTable
CREATE TABLE "public"."INV_STOCK" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "branchid" VARCHAR(50) NOT NULL,
    "itemid" VARCHAR(50) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."INV_STOCK_LOG" (
    "rowguid" UUID NOT NULL,
    "refrowguid" UUID,
    "branchid" VARCHAR(50) NOT NULL,
    "itemid" VARCHAR(50) NOT NULL,
    "planid" VARCHAR(50),
    "orderid" VARCHAR(50),
    "quantity" INTEGER NOT NULL,
    "status" CHAR(1) NOT NULL,
    "reason" VARCHAR(255),
    "createdby" VARCHAR(20) NOT NULL,
    "createdtime" TIMESTAMP(6) NOT NULL,
    "modifiedby" VARCHAR(20),
    "modifiedtime" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "public"."TRANSACTION_LOG" (
    "rowguid" UUID NOT NULL,
    "userid" VARCHAR(50) NOT NULL,
    "username" VARCHAR(100),
    "action" VARCHAR(100) NOT NULL,
    "note" VARCHAR(1000),
    "tableName" VARCHAR(100),
    "recordId" VARCHAR(100),
    "status" VARCHAR(20),
    "ipAddress" VARCHAR(50),
    "userAgent" VARCHAR(200),
    "createdtime" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TRANSACTION_LOG_pkey" PRIMARY KEY ("rowguid")
);

-- CreateIndex
CREATE UNIQUE INDEX "SYS_USERS_rowguid_key" ON "public"."SYS_USERS"("rowguid");

-- CreateIndex
CREATE UNIQUE INDEX "SYS_USERS_email_key" ON "public"."SYS_USERS"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SYS_USERGROUPS_rowguid_key" ON "public"."SYS_USERGROUPS"("rowguid");

-- CreateIndex
CREATE INDEX "SYS_USERGROUPS_usergroupid_idx" ON "public"."SYS_USERGROUPS"("usergroupid");

-- CreateIndex
CREATE UNIQUE INDEX "SYS_USER_BRANCHES_rowguid_key" ON "public"."SYS_USER_BRANCHES"("rowguid");

-- CreateIndex
CREATE UNIQUE INDEX "SYS_ACCESSRIGHT_rowguid_key" ON "public"."SYS_ACCESSRIGHT"("rowguid");

-- CreateIndex
CREATE INDEX "SYS_ACCESSRIGHT_userid_usergroupid_menuid_idx" ON "public"."SYS_ACCESSRIGHT"("userid", "usergroupid", "menuid");

-- CreateIndex
CREATE UNIQUE INDEX "SYS_MENU_rowguid_key" ON "public"."SYS_MENU"("rowguid");

-- CreateIndex
CREATE INDEX "SYS_MENU_parentid_isactive_idx" ON "public"."SYS_MENU"("parentid", "isactive");

-- CreateIndex
CREATE UNIQUE INDEX "CM_BRANCH_rowguid_key" ON "public"."CM_BRANCH"("rowguid");

-- CreateIndex
CREATE INDEX "CM_BRANCH_branchid_idx" ON "public"."CM_BRANCH"("branchid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_BRAND_rowguid_key" ON "public"."CM_BRAND"("rowguid");

-- CreateIndex
CREATE INDEX "CM_BRAND_brandid_idx" ON "public"."CM_BRAND"("brandid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_UNIT_rowguid_key" ON "public"."CM_UNIT"("rowguid");

-- CreateIndex
CREATE INDEX "CM_UNIT_unitid_idx" ON "public"."CM_UNIT"("unitid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_PAYMENT_rowguid_key" ON "public"."CM_PAYMENT"("rowguid");

-- CreateIndex
CREATE INDEX "CM_PAYMENT_paymentid_idx" ON "public"."CM_PAYMENT"("paymentid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_CURRENCY_rowguid_key" ON "public"."CM_CURRENCY"("rowguid");

-- CreateIndex
CREATE INDEX "CM_CURRENCY_currencyid_idx" ON "public"."CM_CURRENCY"("currencyid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_DISCOUNT_rowguid_key" ON "public"."CM_DISCOUNT"("rowguid");

-- CreateIndex
CREATE INDEX "CM_DISCOUNT_discountid_idx" ON "public"."CM_DISCOUNT"("discountid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_RAM_rowguid_key" ON "public"."CM_RAM"("rowguid");

-- CreateIndex
CREATE INDEX "CM_RAM_ramid_idx" ON "public"."CM_RAM"("ramid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_DRIVE_rowguid_key" ON "public"."CM_DRIVE"("rowguid");

-- CreateIndex
CREATE INDEX "CM_DRIVE_driveid_idx" ON "public"."CM_DRIVE"("driveid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_COLOR_rowguid_key" ON "public"."CM_COLOR"("rowguid");

-- CreateIndex
CREATE INDEX "CM_COLOR_colorid_idx" ON "public"."CM_COLOR"("colorid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_TAX_rowguid_key" ON "public"."CM_TAX"("rowguid");

-- CreateIndex
CREATE INDEX "CM_TAX_taxid_idx" ON "public"."CM_TAX"("taxid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_SERVICE_rowguid_key" ON "public"."CM_SERVICE"("rowguid");

-- CreateIndex
CREATE INDEX "CM_SERVICE_serviceid_idx" ON "public"."CM_SERVICE"("serviceid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_TARIFF_rowguid_key" ON "public"."CM_TARIFF"("rowguid");

-- CreateIndex
CREATE INDEX "CM_TARIFF_serviceid_currencyid_taxid_idx" ON "public"."CM_TARIFF"("serviceid", "currencyid", "taxid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_SALE_rowguid_key" ON "public"."CM_SALE"("rowguid");

-- CreateIndex
CREATE INDEX "CM_SALE_salesid_idx" ON "public"."CM_SALE"("salesid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_TECHNICAL_rowguid_key" ON "public"."CM_TECHNICAL"("rowguid");

-- CreateIndex
CREATE INDEX "CM_TECHNICAL_technicalsid_idx" ON "public"."CM_TECHNICAL"("technicalsid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_CUSTOMER_rowguid_key" ON "public"."CM_CUSTOMER"("rowguid");

-- CreateIndex
CREATE INDEX "CM_CUSTOMER_customerid_idx" ON "public"."CM_CUSTOMER"("customerid");

-- CreateIndex
CREATE UNIQUE INDEX "CM_CATEGORY_rowguid_key" ON "public"."CM_CATEGORY"("rowguid");

-- CreateIndex
CREATE INDEX "CM_CATEGORY_categoryid_idx" ON "public"."CM_CATEGORY"("categoryid");

-- CreateIndex
CREATE UNIQUE INDEX "DT_STAFF_rowguid_key" ON "public"."DT_STAFF"("rowguid");

-- CreateIndex
CREATE INDEX "DT_STAFF_staffid_idx" ON "public"."DT_STAFF"("staffid");

-- CreateIndex
CREATE UNIQUE INDEX "DT_SERVICE_STAFF_rowguid_key" ON "public"."DT_SERVICE_STAFF"("rowguid");

-- CreateIndex
CREATE INDEX "DT_SERVICE_STAFF_branchid_staffid_idx" ON "public"."DT_SERVICE_STAFF"("branchid", "staffid");

-- CreateIndex
CREATE UNIQUE INDEX "DT_KPI_STAFF_rowguid_key" ON "public"."DT_KPI_STAFF"("rowguid");

-- CreateIndex
CREATE INDEX "DT_KPI_STAFF_staffid_branchid_period_idx" ON "public"."DT_KPI_STAFF"("staffid", "branchid", "period");

-- CreateIndex
CREATE UNIQUE INDEX "DT_ITEM_rowguid_key" ON "public"."DT_ITEM"("rowguid");

-- CreateIndex
CREATE UNIQUE INDEX "DT_ITEM_slug_key" ON "public"."DT_ITEM"("slug");

-- CreateIndex
CREATE INDEX "DT_ITEM_itemid_categoryid_idx" ON "public"."DT_ITEM"("itemid", "categoryid");

-- CreateIndex
CREATE UNIQUE INDEX "ITEM_COMPUTER_DETAIL_rowguid_key" ON "public"."ITEM_COMPUTER_DETAIL"("rowguid");

-- CreateIndex
CREATE INDEX "ITEM_COMPUTER_DETAIL_itemid_idx" ON "public"."ITEM_COMPUTER_DETAIL"("itemid");

-- CreateIndex
CREATE INDEX "ITEM_PHONE_DETAIL_itemid_idx" ON "public"."ITEM_PHONE_DETAIL"("itemid");

-- CreateIndex
CREATE UNIQUE INDEX "ITEM_IMAGE_rowguid_key" ON "public"."ITEM_IMAGE"("rowguid");

-- CreateIndex
CREATE INDEX "ITEM_IMAGE_imageid_idx" ON "public"."ITEM_IMAGE"("imageid");

-- CreateIndex
CREATE UNIQUE INDEX "ITEM_PRIVILEGES_rowguid_key" ON "public"."ITEM_PRIVILEGES"("rowguid");

-- CreateIndex
CREATE INDEX "ITEM_PRIVILEGES_privilegeid_idx" ON "public"."ITEM_PRIVILEGES"("privilegeid");

-- CreateIndex
CREATE UNIQUE INDEX "ITEM_GIFTS_rowguid_key" ON "public"."ITEM_GIFTS"("rowguid");

-- CreateIndex
CREATE INDEX "ITEM_GIFTS_giftid_idx" ON "public"."ITEM_GIFTS"("giftid");

-- CreateIndex
CREATE UNIQUE INDEX "ORDERS_SERVICE_rowguid_key" ON "public"."ORDERS_SERVICE"("rowguid");

-- CreateIndex
CREATE INDEX "ORDERS_SERVICE_branchid_staffid_status_idx" ON "public"."ORDERS_SERVICE"("branchid", "staffid", "status");

-- CreateIndex
CREATE UNIQUE INDEX "ORDERS_DETAIL_rowguid_key" ON "public"."ORDERS_DETAIL"("rowguid");

-- CreateIndex
CREATE INDEX "ORDERS_DETAIL_orderid_itemid_idx" ON "public"."ORDERS_DETAIL"("orderid", "itemid");

-- CreateIndex
CREATE UNIQUE INDEX "SERVICE_LOG_rowguid_key" ON "public"."SERVICE_LOG"("rowguid");

-- CreateIndex
CREATE INDEX "SERVICE_LOG_orderid_serviceid_idx" ON "public"."SERVICE_LOG"("orderid", "serviceid");

-- CreateIndex
CREATE UNIQUE INDEX "INVOICE_rowguid_key" ON "public"."INVOICE"("rowguid");

-- CreateIndex
CREATE INDEX "INVOICE_invoiceid_orderid_branchid_idx" ON "public"."INVOICE"("invoiceid", "orderid", "branchid");

-- CreateIndex
CREATE UNIQUE INDEX "INV_PLAN_rowguid_key" ON "public"."INV_PLAN"("rowguid");

-- CreateIndex
CREATE INDEX "INV_PLAN_planid_branchid_itemid_idx" ON "public"."INV_PLAN"("planid", "branchid", "itemid");

-- CreateIndex
CREATE UNIQUE INDEX "INV_STOCK_rowguid_key" ON "public"."INV_STOCK"("rowguid");

-- CreateIndex
CREATE INDEX "INV_STOCK_branchid_itemid_idx" ON "public"."INV_STOCK"("branchid", "itemid");

-- CreateIndex
CREATE UNIQUE INDEX "INV_STOCK_LOG_rowguid_key" ON "public"."INV_STOCK_LOG"("rowguid");

-- CreateIndex
CREATE INDEX "INV_STOCK_LOG_branchid_itemid_orderid_idx" ON "public"."INV_STOCK_LOG"("branchid", "itemid", "orderid");

-- CreateIndex
CREATE INDEX "TRANSACTION_LOG_userid_action_tableName_idx" ON "public"."TRANSACTION_LOG"("userid", "action", "tableName");
