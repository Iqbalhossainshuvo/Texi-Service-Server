const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 5000;


/* add somthing */

// middledwar
app.use(cors());
app.use(express.json());



app.get('/', (req,res)=>{
  
    res.send('car raning')
})




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.c3fbyna.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function dbconnect() {
    try {
        const productCollection = client.db('carservice').collection('product')
        const reviewCollection = client.db('carservice').collection('review')
        // Home page 3 product
        app.get('/product', async(req,res)=>{
            const qurey = {}
            const cursor = productCollection.find(qurey).limit(3)
            const porducts = await cursor.toArray();
            res.send(porducts)
        });
        app.get('/allreview', async(req,res)=>{
            const qurey = {}
            const cursor = reviewCollection.find(qurey)
            const allreview = await cursor.toArray();
            res.send(allreview)
        });
        // all data 
        app.get('/allservice', async(req,res)=>{
          
            const qurey = {}
            const cursor = productCollection.find(qurey)
            const allPorducts = await cursor.toArray();
            res.send(allPorducts)
        });

        // One data full details
      app.get('/services/:id', async (req,res)=>{
       const id = req.params.id 
        const qurey = {_id: ObjectId(id)}
        const services = await productCollection.findOne(qurey)
        res.send(services)
      })

    //   client to server to mongodb data send
    app.post("/review", async (req, res) => {
        try {
          const result = await reviewCollection.insertOne(req.body);
      
          if (result.insertedId) {
            res.send({
              success: true,
              message: `Successfully created the ${req.body.name} with id ${result.insertedId}`,
            });
          } else {
            res.send({
              success: false,
              error: "Couldn't create the product",
            });
          }
        } catch (error) {
          console.log(error.name, error.message);
          res.send({
            success: false,
            error: error.message,
          });
        }
      });

    //   add Product
    app.post("/addroduct", async (req, res) => {
        try {
          const result = await productCollection.insertOne(req.body);
      
          if (result.insertedId) {
            res.send({
              success: true,
              message: `Successfully created the ${req.body.name} with id ${result.insertedId}`,
            });
          } else {
            res.send({
              success: false,
              error: "Couldn't create the product",
            });
          }
        } catch (error) {
          console.log(error.name, error.message);
          res.send({
            success: false,
            error: error.message,
          });
        }
      });


    } catch (error) {
        console.log(error.name,error.message,error.stack);
    }
}
dbconnect().catch(err=>console.error(err.name,err.message,err.stack))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})