const express = require("express");
const app = express();
const port = 5000;

// testing API2wss
// app.use("/", (req, res) => {
//   res.send("<h1>Halo cok</h1>");
// })

// app.get("/", (req, res) => {
//   res.send("halaman home");
// })

app.post("/", (req, res) => {
  res.json({
    nama: "Fahmi",
    email: "agdgdh@gmail.com",
    numPhone: "815 99999888"
  })
})

// app.use("/api/goals", require("./routes/goalRoutes.js"));
// app.get('/about', (req, res) => {
//   res.send('This is the About Page');
// });

// app.get('/menu', (req, res) => {
//   res.send('Menu halaman');
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})