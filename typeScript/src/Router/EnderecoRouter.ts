import express from "express";
import {EnderecoControl} from "../Control/EnderecoControl";


//linha responsável por criar um módulo de rotas no express
export const enderecoRouter = express.Router();

enderecoRouter.post("/add-endereco", new EnderecoControl().createEnd)