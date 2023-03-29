//导入express
const express = require("express");
const fs = require("fs");
const type = ".txt";
//创建web服务器
const app = express();
//将文件部署到服务器
app.use(express.static("img"));
//配置解析表单数据(application/x-www-form-urlencoded)格式的中间件
app.use(express.urlencoded({ extended: false }));
// 通过ap.listen进行服务器的配置，并启动服务器，接收两个配置参数，一个是对应的端口号，一个是启动成功的回调函数
//get接口的开发
app.get("/api/list", (err, res) => {
  res.send({
    code: 200,
    data: [{ name: 1 }, { name: 2 }, { name: 3 }],
  });
});
//post接口的开发
app.post("/api/setList", async (req, res) => {
  const { id, value } = req.query;
  if (!id || !value) return res.send({ status: "1" });
  fs.writeFile(id + type, value, (err, dat) => {
    if (!err) {
      res.send({ status: "0" });
    }
  });
});
app.listen(3111, () => {
  console.log("服务器启动成功");
});
