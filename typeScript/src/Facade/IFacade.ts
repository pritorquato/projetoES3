import {EntidadeDominio} from "../model/domain/EntidadeDominio";

export interface IFacade {

    salvar(entidade: EntidadeDominio): any

    alterar(entidade: EntidadeDominio): any

    excluir(entidade: EntidadeDominio): any

    consultar(entidade: EntidadeDominio): any


}