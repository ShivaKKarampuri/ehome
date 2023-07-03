import { Router } from "express";
import userRoute from "./userRoutes";
import productRoute from "./product";
import adRoute from "./ad";
import  createAdvertisement  from "./advertisement";

const route = Router();

route.use("/user", userRoute);
route.use("/listings", productRoute);
route.use("/ad", adRoute);

route.use("/advertisement",createAdvertisement);

export default route;