import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// ✅ Fix for __dirname in ES Modules (important for Vercel)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middlewares
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Routes
app.use("/", web);

// ✅ Start Server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

export default app;
