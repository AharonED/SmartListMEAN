const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const groupsRoutes = require("./routes/groups");
const checklistsRoutes = require("./routes/checklists");
const checklistItemsRoutes = require("./routes/checklistItems");
const groupsHLLRoutes = require("./routes/groups.HLL");
const groupsChecklistsRoutes = require("./routes/groups.checklists");
const resetdb = require("./models/initDB");
const usersRoutes = require("./routes/users");


const app = express();

mongoose
  .connect(
    //"mongodb+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular?retryWrites=true"
    //"mongodb://smartlistmean:Mazda5Gray@ds026658.mlab.com:26658/smartlistmean"
    "mongodb://smartlistmean:Mazda5Gray@ds026658.mlab.com:26658/smartlistmean", { useNewUrlParser: true }
    )
/*  mongoose.connect('mongodb://localhost:27017/myapp')*/
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

///////////////////////////////////////////////////
//  resetdb.resetDB();
///////////////////////////////////////////////////


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/images", express.static(path.join("backend/images")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/users", usersRoutes);
app.use("/api/groups", groupsRoutes);
app.use("/api/checklists", checklistsRoutes);
app.use("/api/checklistItems", checklistItemsRoutes);
app.use("/api/groupsHLL", groupsHLLRoutes);
app.use("/api/groupsChecklists", groupsChecklistsRoutes);


app.use((req,res,next) => {
	res.sendFile(path.join(__dirname,"angular",index.html));
});

module.exports = app;
