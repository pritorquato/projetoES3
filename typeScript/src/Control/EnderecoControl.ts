import {Request, Response} from "express";
import {IdGenerator} from "../services/IdGenerator";
import {Endereco} from "../model/domain/Endereco";
import {EnderecoDao} from "../Dao/EnderecoDao";
import {RelacionamentoDao} from "../Dao/RelacionamentoDao";

export class EnderecoControl {

    public async createEnd(req: Request, res: Response) {
        try {

            const endereco = new Endereco(
                req.body.nome_endereco,
                req.body.tipo_endereco,
                req.body.tipo_logradouro,
                req.body.tipo_residencia,
                req.body.logradouro_endereco,
                req.body.numero_endereco,
                req.body.bairro_endereco,
                req.body.cep_endereco,
                req.body.cidade_id,
                req.body.observacoes_endereco
            )
            endereco.setId(await new IdGenerator().createID())
            endereco.setDtCadastro("data")

            await new EnderecoDao().salvar(endereco)
            await new RelacionamentoDao().salvarRelacionamento(req.body.id,endereco.getId())

            res.status(200).send({menssagem: "Endereço criado!"});

        } catch (err) {
            res.status(400).send({err: err});
        }
    }

}