import { Router } from "express";
const routes = new Router();
import custumersController from "./Controller/custumersController.js";


routes.get('/',custumersController.hello);
routes.get('/costumers',custumersController.show);
routes.get('/costumers/:id',custumersController.listarUm);
routes.post('/costumers',custumersController.create);
routes.put('/costumers/:id',custumersController.update);
routes.delete('/costumers/:id',custumersController.delete);


export {routes};
