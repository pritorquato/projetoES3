import {IStrategy} from "./IStrategy";
import {TipoBandeira} from "./EnumTipoBandeira";
import {Fornecedor} from "../model/domain/Fornecedor";

export class ValidarDadosCartao implements IStrategy {


    public processar(fornecedor: Fornecedor) {
        let sb: string[] = []

        fornecedor.getCartoes().forEach(cartao => {
            if (cartao.getNumeroCartao() == null || cartao.getNumeroCartao().trim() === "") {
                sb.push("Numero do cartão é um campo obrigatório");
            }

            if (cartao.getNomeCartao() == null || cartao.getNomeCartao().trim() === "") {
                sb.push("Nome do titular do cartão é um campo obrigatório");
            }

            if
            (cartao.getBandeiraCartao() == null || cartao.getBandeiraCartao().trim() === "") {
                sb.push("É obrigatorio cadastrar uma bandeira de cartao");

            } else {
                let achouBandeira: boolean = false;

                for (let bandeira in TipoBandeira) {
                    if (cartao.getBandeiraCartao() == bandeira) {
                        achouBandeira = true;
                    }
                }
                if (achouBandeira == false) {
                    return "A bandeira do cartao não consta no sistema";
                }
            }


            if (cartao.getCodigoSegCartao() == 0) {
                sb.push("É obrigatório cadastrar o código de segurança)");
            }
        })
        if (sb.length > 0) {
            return sb
        } else {
            return null
        }
    }
}