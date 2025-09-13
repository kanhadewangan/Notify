import express from "express";
import cors from "cors";
import router from "./models/user";
import notes from "./models/notes";
const app = express();

app.use(cors({
    origin: "*",

}))
app.use(express.json());
app.use("/api/user", router);
app.use("/api/notes", notes);

app.get("/health", (req, res) => {
    res.status(200).send("healthy");
});


app.listen(3000, () => {
    console.log("Start At 3000");

})
