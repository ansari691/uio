const express = require("express");
const connectDb = require("./db");

const app = express();
const PORT = 5001;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Accept, Content-Type, Authorization, x-auth-token"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});

app.listen(PORT, console.log(`server is runnig at port ${PORT}`));

app.get("/", (req, res, next) => {
  res.json("home route");
  next();
});

app.use("/api/internetServices", require("./routes/api/internetService"));
app.use("/api/softwareServices", require("./routes/api/softwareService"));
app.use("/api/careers", require("./routes/api/careers"));
app.use("/api/about", require("./routes/api/about"));
app.use("/api/contact", require("./routes/api/contact"));
app.use("/api/privacy", require("./routes/api/privacy"));
app.use("/api/terms", require("./routes/api/terms"));
app.use("/api/homeBanner", require("./routes/api/homeBannerSlider"));

connectDb;
