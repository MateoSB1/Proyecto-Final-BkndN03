import express from "express";
import envsConfig from "./config/envsConfig.js";
import { connectDB } from "./config/connectDB.js";
import router from "./common/router.js";
import { customError } from "./common/errors/customError.js";
import { logger } from "./common/utils/logger.js";
import swaggerUiExpress from "swagger-ui-express";
import {  swaggerOptions } from "./config/swaggerConfig.js";

const app = express();
connectDB(envsConfig.MONGO_URI, "MateoSB1BkndN03")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerOptions));

app.use(customError);

app.listen(envsConfig.PORT, () => {
  logger.info(`Servidor en el puerto ${envsConfig.PORT}`);
});
