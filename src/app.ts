import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/product";
import adRoute from "./routes/ad";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
// import passport from "passport";
// import kPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createAdvertisement } from "./controllers/advertisementController";
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

// app.use(passport.initialize());
// kPassport(passport);

// app.use("/", exampleRoute);
//app.use("/user", userRoute);
app.use("/listings", productRoute);
app.use("/ad", adRoute);

app.use("/advertisement",createAdvertisement);
app.use(() => {
  throw createHttpError(404, "Route not found");
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3000, () => {
  console.log(`Listening On PORT 3000`);
});

app.use(errorHandler);

// mongoose
//   .connect('mongodb+srv://manohar_rentals:AyUeKSdwY3IbrNZE@cluster0.sr9lrre.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => {
//     console.log("Connected to db");
    
//   })
//   .catch(() => {
//     throw createHttpError(501, "Unable to connect database");
//   });
