import {EntidadeDominio} from "../model/domain/EntidadeDominio";

export interface IDao {

       salvar( entidade: EntidadeDominio):  void

      alterar(entidade: EntidadeDominio): void

      inativar(entidade: EntidadeDominio): void

      consultar(entidade: EntidadeDominio|undefined): any

}