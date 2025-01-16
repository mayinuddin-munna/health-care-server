import express, { Request, Response } from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const result = userController.createAdmin(req, res);

  return result;
});

export const userRoute = router;
