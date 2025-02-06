let customers= [
    {id:1 ,name:"dev samurai", site:"http://devsamurai.com.br"},
    {id:2 ,name:"google", site:"http://google.com.br"},
    {id:3 ,name:"uol", site:"http://uol.com.br"}
]

class CostumersController{
    hello(req,res){
        return res.json({message:"hello povo"});
        
    }

    listarUm(req,res){

        const id =parseInt(req.params.id);
        const customer= customers.find(item => item.id ===id);
        const status = customer ? 200 : 404;

        console.debug("get::costumers/:id",JSON.stringify(customer));

        return res.status(status).json(customer);
    }

    show(req,res){
        return res.json(customers);
    }

    create(req,res){
        const {name,site}=req.body
        const id=customers[customers.length-1].id+1
        const newCustomer={id,name,site};
        customers.push(newCustomer);
    
    return res.status(201).json(newCustomer);
    }

    update(req,res){
        const id= parseInt(req.params.id);
    const{name,site}= req.body
    const index= customers.findIndex(item=>item.id===id);
    const status= index>=0 ? 200 : 400;
    
    if(index>=0){
        customers[index]={id:parseInt(id),name,site};
    }

    return res.status(status).json(customers[index]);
    }

    delete(req,res){
        const id= parseInt(req.params.id);

    const index= customers.findIndex(item=> item.id ===id);
    const status= index ? 200 :404;
    
    if(index>=0){
        customers.splice(index,1);
    }
    return res.status(status).json({message:"deletado com sucesso"});
              
    }

    
}
export default new CostumersController();