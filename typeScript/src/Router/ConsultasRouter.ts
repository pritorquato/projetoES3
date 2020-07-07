import express from "express";
import {ConsultasControl} from "../Control/ConsultasControl";




//linha responsável por criar um módulo de rotas no express
export const consultasRouter = express.Router();

consultasRouter.get("/consulta-cidades", new ConsultasControl().consultarCidades)
consultasRouter.get("/consulta-fornecedores", new ConsultasControl().consultarFornecedores)
consultasRouter.get("/consulta-cartoes",)