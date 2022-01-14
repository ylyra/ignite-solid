import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJson from "swagger.json";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use("/users", usersRoutes);

export { app };
