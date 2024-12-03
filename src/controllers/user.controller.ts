import { NextFunction, Request, Response } from "express";
import { getUsersService } from "../services/user/get-users.service";
import { getUserService } from "../services/user/get-user.service";
import { createUserService } from "../services/user/create-user.service";
import { updateUserService } from "../services/user/update-user.service";
import { deleteUserService } from "../services/user/delete-user.service";

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUsersService();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await getUserService(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createUserService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await updateUserService(id, req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await deleteUserService(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
