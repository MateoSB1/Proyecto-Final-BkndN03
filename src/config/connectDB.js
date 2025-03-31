import mongoose from "mongoose";
import { logger } from "../common/utils/logger.js";

import mongoose from "mongoose"

export const connectDB = async (uri, dbName) => {
    try {
        await mongoose.connect(
            uri,
            {
                dbName: dbName
            }
        )
        logger.info("Mongo DB Conectado");
    } catch (error) {
      logger.error("Error al conectar Mongo");
    }
}

export default connectDB