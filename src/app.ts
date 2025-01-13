import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoute } from "./app/modules/user/user.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.use("/api/v1/user", userRoute);

export default app;
