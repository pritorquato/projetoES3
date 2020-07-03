import { Request, Response } from "express";
import {FornecedorDao} from "../Dao/FornecedorDao";
import {Fornecedor} from "../model/domain/Fornecedor";
import {IdGenerator} from "../services/IdGenerator";

export class FornecedorControl {

   public async signup(req: Request, res: Response) {
        try {
            const fornecedor = new Fornecedor(req.body.nomeForm,req.body.produto,req.body.genero,req.body.data,
                req.body.cpf,req.body.email,req.body.rank)
                fornecedor.setId(new IdGenerator().createID())
            await new FornecedorDao().salvar(fornecedor)
            res.status(200).send({message: "Post criado com sucesso"});
        } catch (err) {
            res.status(400).send({ err: err });
        }
    }

}