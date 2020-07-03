import express from "express";
import {FornecedorControl} from "../Control/FornecedorControl";


//linha responsável por criar um módulo de rotas no express
export const fornecedorRouter = express.Router();

fornecedorRouter.post("/signup", new FornecedorControl().signup)