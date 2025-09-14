import express from "express";
import cors from "cors";
import router from "./models/user";
import notes from "./models/notes";
import payment from "./models/payments";
import { authMiddleware } from "./middleware/middleware";
const app = express();

app.use(cors({
    origin: "*",

}))
app.use(express.json());
app.use("/api/user", router);
app.use("/api/notes", notes);
app.use("/api/payments", payment);

app.get("/health", authMiddleware, (req, res) => {
    if(req.user && typeof req.user !== 'string') {
        res.send(`healthy userId: ${req.user.id}`);
        return;
    }
    res.status(200).send("healthy");
});


app.listen(3000, () => {
    console.log("Start At 3000");

})
