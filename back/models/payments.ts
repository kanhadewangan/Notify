import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from '../db/generated/prisma';


const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET

router.get("/health", (req, res) => {
    res.status(200).send("healthy");
}
);

// Placeholder for payment processing logic
router.post("/process", async (req, res) => {
    try {
        const headers = req.headers["authorization"];
        if (!headers) return res.status(401).send("Missing Authorization header");
        const decode = jwt.decode(headers, JWT_SECRET) as JwtPayload;
        if (!decode) return res.status(401).send("Invalid Token");
        const userId = decode.id;

        const { amount, subscriptio_typen , payment_method } = req.body;
        if (!amount || !subscriptio_typen) {
            return res.status(400).send("Missing amount or subscription type");
        }

        // Process payment logic here
        const payment = await prisma.subsription.create({
            data: {
                userId: Number(userId),
                amount,
                subscriptio_type: subscriptio_typen,
                payment_method
                
            },
        });
        res.status(201).json(payment);
    } catch (e) {
        console.error(e);
        res.status(500).send("Failed to process payment");
    }
});
export default router;
