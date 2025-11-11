import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 5000;
app.use(express.json())
app.use(cors({
    origin : ['http://localhost:5173',
            'http://localhost:5174',
            'http://localhost:3000'
            // add production URLs as needed
        ],
        methods : ['GET','POST','PUT','DELETE'],
        credentials : true,
    
}));

app.get('/api/message', (req, res)=>{
    res.json({message : 'this is message from backend'})
})

app.listen(PORT ,"0.0.0.0",()=>{
    console.log(`server running on ${PORT}`)
});