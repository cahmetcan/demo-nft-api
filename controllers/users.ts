import { getUsers } from "../services/users";
import { Request, Response } from "express";

const listUsers = async (req: Request, res: Response): Promise<any> => {
    const users: string = await getUsers();
    res.json({ users });
}

export { listUsers };