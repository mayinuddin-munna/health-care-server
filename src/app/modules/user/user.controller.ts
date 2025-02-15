import { Request, Response } from "express";
import { userServices } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createAdmin(req.body);
    res.status(200).json({
      success: true,
      message: "Admin Create Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || "Something went wrong!",
      error: err,
    });
  }
};

export const userController = {
  createAdmin,
};
