import {Request, Response} from "express";
import {Produto} from "../model/domain/Produto";
import {IdGenerator} from "../services/IdGenerator";
import {ProdutoDao} from "../Dao/ProdutoDao";


export class ProdutoControl {

    public async addProduto(req: Request, res: Response) {
        try {
                const produto = new Produto(
                    req.body.descricao
                );
            produto.setId(await new IdGenerator().createID())
            produto.setDtCadastro("data")

            await new ProdutoDao().salvar(produto)

            res.status(200).send({menssagem: "produto criado!"});

        } catch (err) {
            res.status(400).send({err: err});
        }
    }

}