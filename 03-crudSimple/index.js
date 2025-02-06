import express from "express";

//iniciando como servidor
const app =express();
app.use(express.json());

let customers= [
    {id:1 ,name:"dev samurai", site:"http://devsamurai.com.br"},
    {id:2 ,name:"google", site:"http://google.com.br"},
    {id:3 ,name:"uol", site:"http://uol.com.br"}
]


app.get('/customers',(req,res)=>{
    return res.json(customers);
});

app.get('/customers/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const customer= customers.find(item => item.id ===id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
});

app.post('/customers',(req,res)=>{
    const {name,site}=req.body
    const id=customers[customers.length-1].id+1
    const newCustomer={id,name,site};
    customers.push(newCustomer);
    
    return res.status(201).json(newCustomer);

});
app.put('/customers/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const{name,site}= req.body
    const index= customers.findIndex(item=>item.id===id);
    const status= index>=0 ? 200 : 400;
    
    if(index>=0){
        customers[index]={id:parseInt(id),name,site};
    }

    return res.status(status).json(customers[index]);
});

app.delete('/customers/:id',(req,res)=>{
    const id= parseInt(req.params.id);

    const index= customers.findIndex(item=> item.id ===id);
    const status= index ? 200 :404;
    
    if(index>=0){
        customers.splice(index,1);
    }
    return res.status(status).json({message:"deletado com sucesso"});
    
});


//o servidor vai escutar na porta 3000 
app.listen(3000,()=>{
    console.log("rodando http://localhost:3000");
});


