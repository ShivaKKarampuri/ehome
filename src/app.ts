import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import createHttpError from "http-errors";

import { mongoConfig } from "./config/db.config";
import cookieParser from "cookie-parser";
import cors from "cors";
import versionRouter from "./versions/version_routes";

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: false }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(express.json());
app.use(cookieParser());


app.use("/api", versionRouter);


app.get('/', (req, res) => {
  res.send('Server connected')
})

app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening On PORT 8080`);
});

mongoConfig();