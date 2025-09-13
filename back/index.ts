import express from "express";
import jwt from "jsonwebtoken"
import cors from "cors";

const app = express();

app.use(cors({
    origin:"*",
    
}))

app.get("/health", (req, res) => {
    res.status(200).send("healthy")

})


app.listen(30000, () => {
    console.log("Start At 30000");

})
