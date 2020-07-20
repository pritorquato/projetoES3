import {Fornecedor} from "../model/domain/Fornecedor";
import {IStrategy} from "./IStrategy";


export class ValidarDadosEnderecos implements IStrategy {


    processar(fornecedor: Fornecedor) {

        let sb: string[] = [];
        let existeEndResidencia: boolean = false
        let existeEndCobranca: boolean = false

        fornecedor.getEnderecos().forEach(endereco => {
            if (endereco.getNomeEnd() == undefined || endereco.getNomeEnd() === "") {
                sb.push("É obrigatório informar um nome formado de frase curta para o endereço");
            }

            if (endereco.getTipoEnd() == undefined || endereco.getTipoEnd() === "") {
                sb.push("É obrigatório pelo menos tipo de endereço");
            }

            if (endereco.getTipoResid() == undefined || endereco.getTipoResid() === "") {

                sb.push("É obrigatório informar o tipo de residência (casa, apto, conjunto, galpão, sala etc.");
            }

            if (endereco.getTipoResid().toUpperCase() === "C") {
                existeEndCobranca = true
            }
            if (endereco.getTipoResid().toUpperCase() === "R") {
                existeEndResidencia = true
            }

            if (endereco.getLogradouroEnd() == undefined || endereco.getLogradouroEnd() === "") {
                sb.push("Logradouro é um campo obrigatório");
            }
            if (endereco.getTipoLogr() == undefined || endereco.getTipoLogr() === "") {
                sb.push("Tipo de Logradouro é um campo obrigatório");
            }

            if (endereco.getCepEnd() == undefined || endereco.getCepEnd() === "") {
                sb.push("CEP é um campo obrigatório");
            }

            if (endereco.getBairroEnd() == undefined || endereco.getBairroEnd() === "") {
                sb.push("bairro é um campo obrigatório");
            }

            if (endereco.getNumeroEnd() == undefined) {
                sb.push("Número é um campo obrigatório");
            }

            if (endereco.getCidadeEnd() == undefined) {
                sb.push("Cidade é um campo obrigatório");
            }
            if (endereco.getObservacoesEnd() == undefined || endereco.getObservacoesEnd() === "") {
                sb.push("Observacoes é um campo obrigatório");
            }
        })

        if (!existeEndCobranca && existeEndResidencia!) {
            sb.push("É preciso no minimo um endereço de cobrança e um de residencia");
        }

        if (sb.length > 0) {
            return sb
        } else {
            return null
        }
    }
}
