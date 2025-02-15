import { Prisma, PrismaClient } from "@prisma/client";
import { searchFields } from "./admin.constant";

const prisma = new PrismaClient();

const getAllAdminService = async (params: any, options: any) => {
  const { searchTerm, ...filterData } = params;
  const {limit, page} = options;
  const andCondition: Prisma.AdminWhereInput[] = [];

  // console.log(limit, page);

  if (params.searchTerm) {
    andCondition.push({
      OR: searchFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.AdminWhereInput = { AND: andCondition };

  const result = await prisma.admin.findMany({
    where: whereCondition,
    skip: (Number(page) - 1) * limit,
    take: Number(limit),
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

export const AdminServices = {
  getAllAdminService,
};
