import {IStrategy} from "./IStrategy";
import {Fornecedor} from "../model/domain/Fornecedor";

export class ValidarDadosTelefone implements IStrategy {


    public processar(fornecedor: Fornecedor) {
        let sb: string[] = []

        fornecedor.getTelefones().forEach(telefone => {
            if (telefone.getNumeroTelefone() == null || telefone.getNumeroTelefone() === "") {
                sb.push("Numero do telefone é um campo obrigatório");
            }

            if (telefone.getDddTelefone() == null || telefone.getDddTelefone() === "") {
                sb.push("DDD é um campo obrigatório");
            }

            if
            (telefone.getTipoTelefone() == null || telefone.getTipoTelefone() === "") {
                sb.push("É obrigatorio cadastrar uma tipo de Telefone");

            }

        })
        if (sb.length > 0) {
            return sb
        } else {
            return null
        }
    }
}