import express from "express";
import {FornecedorControl} from "../Control/FornecedorControl";
import {CartaoControl} from "../Control/CartaoControl";
import {TelefoneControl} from "../Control/TelefoneControl";


//linha responsável por criar um módulo de rotas no express
export const fornecedorRouter = express.Router();

fornecedorRouter.post("/signup", new FornecedorControl().signup)
fornecedorRouter.post("/add-cartao",new CartaoControl().createCartao)
fornecedorRouter.post("/add-telefone",new TelefoneControl().createTelefone)