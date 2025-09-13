import express from "express";
import { PrismaClient } from '../db/generated/prisma';
import jwt, { JwtPayload } from "jsonwebtoken";

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "secret";


router.get("/health", (req, res) => {
    res.status(200).send("healthy");
});

router.post("/create", async (req, res) => {
    try {
        const headers = req.headers["authorization"]
        if (!headers) return res.status(401).send("Missing Authorization header");
        const decode = jwt.decode(headers, JWT_SECRET) as JwtPayload;
        if (!decode) return res.status(401).send("Invalid Token");
        console.log(decode.id);
        const userId = decode.id;
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send("Missing title or description");
        }
        const note = await prisma.note.create({
            data: {
                title,
                description,
                userId: Number(userId),
            },
        });
        res.status(201).json(note);
    } catch (e) {
        console.error(e);
        res.status(500).send("Failed to create note");
    }
});

router.get("/list", async (req, res) => {
    try {
        const headers = req.headers["authorization"];
        if (!headers) return res.status(401).send("Missing Authorization header");
        const decode = jwt.decode(headers, JWT_SECRET) as JwtPayload;
        if (!decode) return res.status(401).send("Invalid Token");
        const userId = decode.id;
        const notes = await prisma.note.findMany({
            where: {
                userId: Number(userId),
            },
        });
        res.status(200).json(notes);
    } catch (e) {
        console.error(e);
        res.status(500).send("Failed to retrieve notes");
    }
});


router.put("/update/:id", async (req, res) => {
    try {
        const headers = req.headers["authorization"];
        if (!headers) return res.status(401).send("Missing Authorization header");
        const decode = jwt.decode(headers, JWT_SECRET) as JwtPayload;
        if (!decode) return res.status(401).send("Invalid Token");
        const userId = decode.id;
        const noteId = Number(req.params.id);
        const { title, description } = req.body;
        const note = await prisma.note.findUnique({
            where: { id: noteId },
        });
        if (!note) return res.status(404).send("Note not found");
        if (note.userId !== userId) return res.status(403).send("Forbidden");
        const updatedNote = await prisma.note.update({
            where: { id: noteId },
            data: { title, description },
        });
        res.status(200).json(updatedNote);
    } catch (e) {
        console.error(e);
        res.status(500).send("Failed to update note");
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const headers = req.headers["authorization"];
        if (!headers) return res.status(401).send("Missing Authorization header");
        const decode = jwt.decode(headers, JWT_SECRET) as JwtPayload;
        if (!decode) return res.status(401).send("Invalid Token");
        const userId = decode.id;
        const noteId = Number(req.params.id);
        const note = await prisma.note.findUnique({
            where: { id: noteId },
        });
        if (!note) return res.status(404).send("Note not found");
        if (note.userId !== userId) return res.status(403).send("Forbidden");
        await prisma.note.delete({
            where: { id: noteId },
        });
        res.status(204).send("Note deleted");
    } catch (e) {
        console.error(e);
        res.status(500).send("Failed to delete note");
    }
});

const notes = router;
export default notes;