import app from "./app.js";
import { connectDB } from "./db/index.js";
import { config } from "dotenv";
import cors from "cors";
config();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:" + process.env.PORT);
  });
});
