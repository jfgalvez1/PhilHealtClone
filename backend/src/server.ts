import {sampleData} from './data/datasources';
import * as dotenv from 'dotenv'
import * as core from "express-serve-static-core";
import articles from './data/articles';
import links from './data/links';
import { getConnection } from './db';
dotenv.config()
/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number
  ===============================================================
*/
const startServer = (app: core.Express) => {
  const PORT = process.env.PORT || 3000
 
  //Listing to the app and running it on PORT 5000
  app.listen(PORT, async () => {
     console.log(`listning on port ${PORT}`)
  })

  app.get("/health", (req, res) => {
    return res.status(200).send({
      message: "Alive"
    })
  })

  app.get("/sim-error", (req, res) => {
    return res.status(500).send({
      message: "This is a simulated error"
    })
  })



  app.get("/articles/get", async (req,res) => {
    await getConnection().then(async (db) => {
      const articleC = await db.collection("articles").find({});
      console.log("res", articleC);
      const articles = await articleC.toArray();
      console.log("res", articles);
      res.status(200).send(articles);
     })
  })
 

  app.get("/links/get", async (req,res) => {
    await getConnection().then(async (db) => {
      const linkC = await db.collection("links").find({});
      console.log("res", linkC);
      const link = await linkC.toArray();
      console.log("res", link);
      res.status(200).send(link);
     })
  })
}
 
export default startServer;