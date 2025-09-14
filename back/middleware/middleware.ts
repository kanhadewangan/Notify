
import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function authMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    const JWT_SECRET = process.env.JWT_SECRET || "";
    const header = req.headers["authorization"]; 
    if (!header) return res.status(401).send("Missing Authorization header");
    const parts = header.split(' ');
    if(parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).send('Malformed Authorization header');
    const token = parts[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.user = decoded;
        next();
    } catch (e:any) {
        if(e.name === 'TokenExpiredError') return res.status(401).send('Token expired');
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

