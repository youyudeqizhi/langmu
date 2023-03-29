const fs = require("fs");
fs.writeFile("123.txt", "xxxxxxxxxxxxxxxxxxxxxxx", (err, data) => {
  if (err) return;
  console.log(data, "yes");
});
