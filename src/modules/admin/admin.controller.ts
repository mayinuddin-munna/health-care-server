import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllAdminController = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, adminFilterableFields);
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
