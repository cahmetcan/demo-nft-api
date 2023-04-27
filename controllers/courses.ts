import { Request, Response } from "express";
import { getCourses } from "../services/courses";

const listCourses = async (req: Request, res: Response): Promise<void> => {
    const courses: any = await getCourses();
    res.json({ courses });
};

export { listCourses };
