import {Request, Response} from "express";
import {IdGenerator} from "../services/IdGenerator";
import {Telefone} from "../model/domain/Telefone";
import {TelefoneDao} from "../Dao/TelefoneDao";


export class TelefoneControl {

    public async createTelefone(req: Request, res: Response) {
        try {

            const telefone = new Telefone(
                req.body.tipo_telefone,
                req.body.ddd_telefone,
                req.body.numero_telefone,
                req.body.fk_fornecedor_id
            )
            telefone.setId(await new IdGenerator().createID())
            telefone.setDtCadastro("data")

            await new TelefoneDao().salvar(telefone)
            res.status(200).send({menssagem: "telefone criado!"});

        } catch (err) {
            res.status(400).send({err: err});
        }
    }

}