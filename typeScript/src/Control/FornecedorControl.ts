import {Request, Response} from "express";
import {FornecedorDao} from "../Dao/FornecedorDao";
import {Fornecedor} from "../model/domain/Fornecedor";
import {IdGenerator} from "../services/IdGenerator";
import {RelacionamentoDao} from "../Dao/RelacionamentoDao";

export class FornecedorControl {

    public async signup(req: Request, res: Response) {
        try {
            const fornecedor = new Fornecedor(
                req.body.nomeForm,
                req.body.produto,
                req.body.genero,
                req.body.senha,
                req.body.dataNasc,
                req.body.cpf,
                req.body.email,
                req.body.rank,
                req.body.cartoes,
                req.body.telefones,
                req.body.enderecos,
                req.body.listaProdutos)
            fornecedor.setId(await new IdGenerator().createID())
            fornecedor.setDtCadastro("data")
            await new FornecedorDao().salvar(fornecedor)
            for(let i = 0; i < fornecedor.getProdutos().length; i++) {
                await new RelacionamentoDao().salvarRelacionamentoFP(fornecedor.getId(),fornecedor.getProdutos()[i])
            }
            res.status(200).send({menssagem: "fornecedor criado!"});

        } catch (err) {
            res.status(400).send({err: err});
        }
    }

}