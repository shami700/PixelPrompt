import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js"; // Optional
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter); // Optional

// --------------------------deployment------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ absolute path to client build
const clientDistPath = path.join(__dirname, "..", "client", "dist");

app.use(express.static(clientDistPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});
// --------------------------deployment------------------------------

// ✅ Bind to 0.0.0.0 for Render
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
