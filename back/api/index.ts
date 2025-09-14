import express from "express";
import cors from "cors";
import router from "../models/user";
import notes from "../models/notes";
import payment from "../models/payments";
import serverless from "serverless"
import { authMiddleware } from "../middleware/middleware";
const app = express();

app.use(cors({
    origin: "*",

}))
app.use(express.json());
app.use("/api/user", router);
app.use("/api/notes", notes);
app.use("/api/payments", payment);

app.get("/health", (req, res) => {
   
    res.status(200).send("healthy");
});
module.exports = app;
module.exports.handler =  new serverless(app);
