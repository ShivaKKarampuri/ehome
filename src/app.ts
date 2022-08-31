import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/product";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
// import passport from "passport";
// import kPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

// app.use(passport.initialize());
// kPassport(passport);

// app.use("/", exampleRoute);
//app.use("/user", userRoute);
app.use("/prod", productRoute);
app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);
//mongodb+srv://manohar_rentals:obiAXw5XaoXT1oDq@cluster0.sr9lrre.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://manohar_rentals:obiAXw5XaoXT1oDq@rentals.q1eka.azure.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;
console.log(db)
db.on('error', console.error.bind(console, 'DB connection error!'));
app.listen(3000, () => {
       console.log(`Listening On PORT 3000`);
       });

// mongoose
//   .connect('mongodb://localhost:27017/')
//   .then(() => {
//     console.log("Connected to db");
//     app.listen(3000, () => {
//       console.log(`Listening On PORT 3000`);
//     });
//   })
//   .catch(() => {
//     throw createHttpError(501, "Unable to connect database");
//   });
