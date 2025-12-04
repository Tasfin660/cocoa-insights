import express from "express";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { connectDB, dbConnected } from "../config/db.js";
import vite from "../config/vite.js";
import chocolateRouter from "./routes/chocolateRoute.js";
import premiumRouter from "./routes/premiumRoute.js";

const app = express();

app.disable("x-powered-by");
app.use(express.json());

// if (!dbConnected) await connectDB()
app.use(async (req, res, next) => {
  if (dbConnected || !req.path.toLowerCase().startsWith("/api")) return next();
  if (!dbConnected) await connectDB();
  if (!dbConnected)
    return res.status(500).send({
      error: true,
      success: false,
      message: "Couldn't connect to the database",
    });
  else return next();
});

app.use("/api/v1/chocolates", chocolateRouter);
app.use("/api/v1/premiums", premiumRouter);
app.use(
  "/robots.txt",
  express.static(
    join(dirname(fileURLToPath(import.meta.url)), "../public/robots.txt")
  )
);

// handle frontend
await vite(express, app);

export default app;
