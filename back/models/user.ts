import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrismaClient } from '../db/generated/prisma';
import { authMiddleware } from '../middleware/middleware';


const router = express.Router();
const prisma = new PrismaClient();

// In-memory refresh token store (for demo only; replace with DB or cache in production)
const refreshTokens = new Map<string, { userId: number; expires: number }>();
const ACCESS_TTL = '15m';
const REFRESH_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
const JWT_SECRET = process.env.JWT_SECRET || 'secret';



router.get("/health",(req,res)=>{
    res.status(200).send("healthy")
})
router.post("/signup",async (req,res)=>{
    try {
        const {email,password,name,} = req.body;
        if(!email || !password || !name){
            res.status(400).send("Missing Fields");
            return;
        }
    const user = await prisma.user.create({
            data:{
                email,
                password, // TODO: hash password before storing
                name
            }
        })
        const token = jwt.sign({id:user.id,email:user.email,name:user.name}, "secret", { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (e:any) {
        console.error(e);
        res.status(500).send("Signup failed");
    }
})

router.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).send("Missing Fields");
        return;
    }
const user = await prisma.user.findUnique({
        where:  email 
    });


    if (!user || user.password !== password) {
        res.status(401).send("Invalid Credentials");
        return;
    }

    const accessToken = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: ACCESS_TTL });
    const refreshToken = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });
    refreshTokens.set(refreshToken, { userId: user.id, expires: Date.now() + REFRESH_TTL_MS });
    res.status(200).json({ accessToken, refreshToken });
})

router.post('/refresh', async (req,res)=>{
    try {
        const { refreshToken } = req.body;
        if(!refreshToken) return res.status(400).send('Missing refreshToken');
        const stored = refreshTokens.get(refreshToken);
        if(!stored) return res.status(401).send('Invalid refresh token');
        if(stored.expires < Date.now()) {
            refreshTokens.delete(refreshToken);
            return res.status(401).send('Refresh token expired');
        }
        let payload: any;
        try {
            payload = jwt.verify(refreshToken, JWT_SECRET) as JwtPayload;
        } catch(e:any){
            refreshTokens.delete(refreshToken);
            return res.status(401).send('Invalid refresh token');
        }
        const user = await prisma.user.findUnique({ where: { id: payload.id } });
        if(!user) return res.status(404).send('User not found');
        const newAccess = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: ACCESS_TTL });
        res.status(200).json({ accessToken: newAccess });
    } catch(e){
        console.error(e);
        res.status(500).send('Refresh failed');
    }
});

router.get("/profile", authMiddleware, async (req, res) => {
    try {
        if (!req.user || typeof req.user === 'string') {
            res.status(401).send("Unauthorized");
            return
        }
       const userId = req.user.id;
        try {
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) throw new Error("User not found");
            res.status(200).json({ profile: user });
        } catch {
            return res.status(401).send("Invalid or expired token");
        }
    }
    catch(e){
        console.error(e);
        res.status(500).send("Failed to fetch profile");
    }
});




export default router;
