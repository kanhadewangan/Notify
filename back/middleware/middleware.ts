
import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function authMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    const JWT_SECRET = process.env.JWT_SECRET || "";
    const token = req.headers["authorization"];
    if (!token) return res.status(401).send("Missing token");
    try {
        const decoded = jwt.decode(token, JWT_SECRET) as JwtPayload;
        req.user = decoded;
        next();
    } catch (e) {
        console.error(e);
        res.status(401).send("Invalid token");
    }
}
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload | string;
        }
    }
}

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "secret";

