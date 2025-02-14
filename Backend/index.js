const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    todos: [
      {
        title: "GYM",
        description: "go to gym",
        Done: false,
      },
      {
        title: "Study",
        description: "go to study",
        Done: true,
      },
    ],
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
