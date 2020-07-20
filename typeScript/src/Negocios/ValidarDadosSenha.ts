import {IStrategy} from "./IStrategy";
import {Fornecedor} from "../model/domain/Fornecedor";

export class ValidarDadosSenha implements IStrategy {


    processar(fornecedor: Fornecedor) {
        let sb: string[] = [];
        let senha: string = fornecedor.getSenha()
        let regex = /^(?=.*\d)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[0-9a-zA-Z!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/g

        if(!regex.test(senha)){
            sb.push("a senha deve conter no minimo 8 digitos, uma letra maiuscula,uma letra minuscula, um numero e um caracter especial");
        }

        if (sb.length > 0) {
            return sb
        } else {
            return null
        }
    }
}