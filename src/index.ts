import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./configs/env";
import userRouter from "./routes/user.router";
import blogRouter from "./routes/blog.router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
