import { Request, Response } from "express";
import { AdminServices } from "./admin.service";

const getAllAdminController = async (req: Request, res: Response) => {
  try {
    const result = await AdminServices.getAllAdminService(req.query);

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
