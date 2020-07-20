import {Request, Response} from "express";
import {CidadeDao} from "../Dao/CidadeDao";
import {EstadoDao} from "../Dao/EstadoDao";
import {PaisDao} from "../Dao/PaisDao";
import {FornecedorDao} from "../Dao/FornecedorDao";

export class ConsultasControl {

    public async consultarCidades(req: Request, res: Response) {
        try {
            const cidades = await new CidadeDao().consultarTodasCidade()
            const estados = await new EstadoDao().consultarTodosEstados()
            const paises = await new PaisDao().consultarTodosPaises()
            res.status(200).send({
                cidades: cidades,
                estados: estados,
                Paises: paises
            });

        } catch (err) {
            res.status(400).send({err: err});
        }
    }

    public async consultarFornecedores(req: Request, res: Response) {
        try {
            let id = undefined
            if (req.body.id) {
                id = req.body.id
            }
            const result = await new FornecedorDao().consultarFornecedor(id)
            res.status(200).send({
                Fornecedores: result
            });

        } catch (err) {
            res.status(400).send({err: err.message});
        }
    }

}