import { Router } from "express";
import { createAdvertisement } from "../controllers/advertisementController";


const router = Router();

router.post("/create",createAdvertisement);
  
//  router.post("/items",getProduct);

export default router;