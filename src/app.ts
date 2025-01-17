import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoute } from "./app/modules/user/user.route";
import { AdminRouters } from "./modules/admin/admin.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", AdminRouters);

export default app;
