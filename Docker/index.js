const express = require("express")

const PORT = process.env.PORT

const app = express()

app.get("/", (req, res, next) => {
  if (req.query.bad) {
    console.log(req.query.bad, "崩溃了", new Date())
    process.exit()
  }
  res.json({
    data: "okkkkk"
  })
})

app.listen(PORT)

console.log("docker is running on port:", PORT, new Date())