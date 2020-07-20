import {Request, Response} from "express";
import {IdGenerator} from "../services/IdGenerator";
import {Cartao} from "../model/domain/Cartao";
import {Facade} from "../Facade/Facade";

export class CartaoControl {

    public async createCartao(req: Request, res: Response) {
        try {

            const cartao = new Cartao(
                req.body.numero_cartao,
                req.body.nome_cartao,
                req.body.bandeira_cartao,
                req.body.codigo_seguranca_cartao,
                req.body.fornecedor_id
            )
            cartao.setId(await new IdGenerator().createID())
            cartao.setDtCadastro("data")

            let result = await new Facade().salvar(cartao)
            if (result.length > 0) {
                res.status(200).send({Erro: result});
            } else {
                res.status(200).send({menssagem: "Cartao criado!"});
            }

        } catch (err) {
            res.status(400).send({err: err.message});
        }
    }

}