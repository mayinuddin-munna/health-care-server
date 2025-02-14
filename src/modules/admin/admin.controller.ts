import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import { ParsedQs } from "qs";

const pick = (object: ParsedQs, keys: string[]) => {
  const finalObj: never[] = [];
  for (const key of keys) {
    if (object && Object.hasOwnProperty.call(object, key)) {
      finalObj[key] = object[key];
    }
  }
  console.log(finalObj);
  return finalObj;
};

const getAllAdminController = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, [
      "name",
      "email",
      "searchTerm",
      "contactNumber",
    ]);
    const result = await AdminServices.getAllAdminService(filters);

    res.status(200).json({
      success: true,
      message: "Admin retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

export const AdminControllers = {
  getAllAdminController,
};
