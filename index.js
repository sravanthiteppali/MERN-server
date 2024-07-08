const express=require('express');
const mongoose=require('mongoose');
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers=require('./resolvers');
const userApiFromRouter=require('./routes/userRoutes');
const cors=require('cors')

const app=express();
app.use(cors());
const port= 3001;
const url='mongodb+srv://sravanthiteppali2:V0gau9uabX2pwjmQ@cluster0.fykoef1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB Connected')})
.catch((err)=>{console.log(err)});
//start my apollo server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app}); //run my express code
    app.listen(port,()=>{
        console.log(`server live 3001`);
    })
}
    function Testing(){
        return 0;
    }
StartServer();