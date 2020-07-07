import express from "express";
import {ProdutoControl} from "../Control/ProdutosControl";



//linha responsável por criar um módulo de rotas no express
export const productsRouter = express.Router();

productsRouter.post("/add-produto", new ProdutoControl().addProduto)