import express from "express";

//iniciando como servidor
const app =express();

//criar uma rota para cada dominio
app.get('/hello',(req,res)=>{
    return res.json({title:"hello,word",
        message:"ola meu amigo,tudo bem?!"
    });
    
})
//o servidor vai escutar na porta 3000 
app.listen(3000);


