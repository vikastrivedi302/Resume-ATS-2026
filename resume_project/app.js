import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");

// Routes
app.use("/", web);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
