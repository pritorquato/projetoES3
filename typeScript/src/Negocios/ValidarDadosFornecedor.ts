import {IStrategy} from "./IStrategy";
import {Fornecedor} from "../model/domain/Fornecedor";

export class ValidarDadosFornecedor implements IStrategy {

    processar(fornecedor: Fornecedor): any {
        let sb: string[] = []
        if (fornecedor.getName() == null || fornecedor.getName() === "") {
            sb.push("Nome é um campo obrigatório");
        }

        if (fornecedor.getCpf() == null || fornecedor.getCpf() === "") {
            sb.push("CPF é um campo obrigatório");
        }

        if (fornecedor.getData() == null || fornecedor.getData() === "") {
            sb.push("Data de nascimento é um campo obrigatório");
        }

        if (fornecedor.getGenero() == null || fornecedor.getGenero() === "") {
            sb.push("Genero é um campo obrigatório");
        }

        if (fornecedor.getEmail() == null || fornecedor.getEmail() === "") {
            sb.push("E-mail é um campo obrigatório");
        }

        if (fornecedor.getRank() == null || fornecedor.getRank() === "") {
            sb.push("O fornecedor deve receber um ranking numérico");
        }

        if (sb.length === 0)
            return null;
        else {
            return sb;
        }

    }
}