import {EntidadeDominio} from "../model/domain/EntidadeDominio";

export interface IStrategy {

    processar(entidade: EntidadeDominio): any

}