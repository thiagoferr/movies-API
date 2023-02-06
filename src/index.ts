import express from "express";
// import handleError from "./middlewares/handleError";
// import requestLog from "./middlewares/requestLog";
import cors from "cors"
import { prisma } from "./database/index";
import routes from "./routes/";
import { SUCCESS } from "./constants/success";
import { ERROR } from "./constants/error";
import bodyParser = require("body-parser");
async function main() {
  
  const app = express();
  // app.use(requestLog);
  app.use(cors())
  app.options("/authentication", cors())
  const port = process.env.PORT?( process.env.PORT as unknown as number) : 4000;
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json())
  app.use(routes);
  
  // app.use(handleError);
  try {
    await prisma.$connect();
    console.log(`😄 ${SUCCESS.APP.CONNECT}`);
  } catch (error) {
    console.log(`😕 ${ERROR.DB.FAIL}`);
    console.error({error: error});
  }
  app.listen(port, async () => {
    console.log(`🚀 ${SUCCESS.APP.INFO} http://127.0.0.1:${port}`);
  });
}

  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })