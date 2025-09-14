import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from '../db/generated/prisma';
import { authMiddleware } from "../middleware/middleware";


const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET

router.get("/health", (req, res) => {
    res.status(200).send("healthy");
}
);

// Placeholder for payment processing logic
router.post("/subscription", authMiddleware, async (req, res) => {
    try {
        if (!req.user || typeof req.user === 'string') {
            res.status(401).send("Unauthorized");
            return
        }
        const userId = req.user.id;
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

router.get("/user/:id/payments", async (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        if (isNaN(userId)) {
            return res.status(400).send("Invalid user ID");
        }
        const payments = await prisma.subsription.findMany({
            where: {
                userId: userId,
            },
        });
        if(payments.length === 0){
             res.status(404).send("No payments found for this user");
                return;
        }
        res.status(200).json(payments);
    } catch (e) {
        console.error(e);
        res.status(500).send("Failed to retrieve payments");
    }
});


const payment = router;
export default payment;
