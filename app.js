const express = require("express");
const app = express();
const { connection } = require("./connection");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productRoutes);

connection
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });