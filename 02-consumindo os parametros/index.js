import express from "express";

//iniciando como servidor
const app =express();

//http://localhost:3000/hello?nome=felipe&idade=21
//query params=?nome=felipe&idade=21

http://localhost:3000/hello/:nome
//route params=/hello/:nome

//criar uma rota para cada dominio
app.get('/hello',(req,res)=>{
    const {nome,idade} = req.query;

    return res.json({title:"hello,word",
        message:`ola meu amigo ${nome},tudo bem?!`,
        idade : idade
    });
    
});


app.get('/hello/:nome',(req,res)=>{
    const nome = req.params.nome;

    return res.json({title:"hello,word",
        message:`ola meu amigo ${nome},tudo bem?!`
    });
})




//o servidor vai escutar na porta 3000 
app.listen(3000,()=>{
    console.log("rodando http://localhost:3000");
});


