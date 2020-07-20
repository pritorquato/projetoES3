import {Request, Response} from "express";
import {Fornecedor} from "../model/domain/Fornecedor";
import {IdGenerator} from "../services/IdGenerator";
import {Facade} from "../Facade/Facade";
import {Endereco} from "../model/domain/Endereco";
import {Cartao} from "../model/domain/Cartao";
import {Telefone} from "../model/domain/Telefone";
import moment from "moment";
import {AbstractDao} from "../Dao/AbstractDao";

export class FornecedorControl {

    public async signup(req: Request, res: Response) {
        try {

            const fornecedor = new Fornecedor(
                req.body.nomeForm,
                req.body.produtoPadrao,
                req.body.genero,
                req.body.senha,
                req.body.dataNasc,
                req.body.cpf,
                req.body.email,
                req.body.rank,
                [],
                [],
                [],
                req.body.listaProdutos)
            fornecedor.setId(await new IdGenerator().createID())
            fornecedor.setDtCadastro(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"))

            let enderecos = req.body.enderecos

            for (let i = 0; i < enderecos.length; i++) {
                let newEndereco = new Endereco(
                    enderecos[i].nome_endereco,
                    enderecos[i].tipo_endereco,
                    enderecos[i].tipo_logradouro,
                    enderecos[i].tipo_residencia,
                    enderecos[i].logradouro_endereco,
                    enderecos[i].numero_endereco,
                    enderecos[i].bairro_endereco,
                    enderecos[i].cep_endereco,
                    enderecos[i].cidade_id,
                    enderecos[i].observacoes_endereco
                )
                newEndereco.setId(new IdGenerator().createID())
                newEndereco.setDtCadastro(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"))

                fornecedor.addEnderecos(newEndereco)
            }

            let cartoes = req.body.cartoes
            for (let i = 0; i < cartoes.length; i++) {
                let newCartao = new Cartao(
                    cartoes[i].numero_cartao,
                    cartoes[i].nome_cartao,
                    cartoes[i].bandeira_cartao,
                    cartoes[i].codigo_seguranca_cartao,
                    fornecedor.getId()
                )
                newCartao.setId(new IdGenerator().createID())
                newCartao.setDtCadastro(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"))
                fornecedor.addCartao(newCartao)
            }
            let telefones = req.body.telefones
            for (let i = 0; i < telefones.length; i++) {
                let newTelefone = new Telefone(
                    telefones[i].tipo_telefone,
                    telefones[i].ddd_telefone,
                    telefones[i].numero_telefone,
                    fornecedor.getId()
                )
                newTelefone.setId(new IdGenerator().createID())
                newTelefone.setDtCadastro(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"))
                fornecedor.addTelefones(newTelefone)
            }

            let result = new Facade().salvar(fornecedor)

            if (result.length > 0) {
                res.status(200).send({Erro: result});
            } else {
                res.status(200).send({menssagem: "fornecedor criado!"});
            }

        } catch (err) {

            res.status(400).send({err: err.message});
        } finally {
            AbstractDao.desconnectDB()
        }
    }

}