import express from "express";
const app = express();
import supabase from "./utils/supabaseClient";
import routes from "./routes/index";
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
