import {IFacade} from "./IFacade";
import {EntidadeDominio} from "../model/domain/EntidadeDominio";
import {ValidarDadosFornecedor} from "../Negocios/ValidarDadosFornecedor";
import {Fornecedor} from "../model/domain/Fornecedor";
import {FornecedorDao} from "../Dao/FornecedorDao";
import {ValidarDadosCartao} from "../Negocios/ValidarDadosCartao";
import {ValidarDadosEnderecos} from "../Negocios/ValidarDadosEndereco";
import {ValidarDadosTelefone} from "../Negocios/ValidarDadosTelefone";
import {ValidarDadosSenha} from "../Negocios/ValidarDadosSenha";


export class Facade implements IFacade {
    constructor(
        private mapaAntesPersistencia = new Map(),
        private mapaDepoisPersistencia = new Map(),
        private mapaDao = new Map()
    ) {
        let validarDadosFornecedor = new ValidarDadosFornecedor()
        let validarDadosCartao = new ValidarDadosCartao()
        let validarDadosEndereco = new ValidarDadosEnderecos()
        let validarDadosTelefone = new ValidarDadosTelefone()
        let validarDadosSenha = new ValidarDadosSenha()
        let rnsAntesFornecedor = []


        this.mapaAntesPersistencia = new Map()


        rnsAntesFornecedor.push(validarDadosFornecedor)
        rnsAntesFornecedor.push(validarDadosCartao)
        rnsAntesFornecedor.push(validarDadosEndereco)
        rnsAntesFornecedor.push(validarDadosTelefone)
        rnsAntesFornecedor.push(validarDadosSenha)


        this.mapaAntesPersistencia.set("Fornecedor", rnsAntesFornecedor)

        this.mapaDao.set("Fornecedor", new FornecedorDao())
    }

    salvar(entidade: EntidadeDominio): any {

        let nmClass: string = entidade.constructor.name;
        let mapAnt = this.mapaAntesPersistencia.get(nmClass)

        let sb = this.executarStrategies(mapAnt, entidade)

        if (sb.length === 0) {
            const dao = this.mapaDao.get(nmClass)
            dao.salvar(entidade)
            return sb
        } else {
            return sb
        }

    }

    alterar(entidade: EntidadeDominio): any {
    }

    excluir(entidade: EntidadeDominio): any {
    }

    consultar(entidade: EntidadeDominio): any {
    }

    executarStrategies(strategies: any[], entidade: EntidadeDominio): any {
        let sb: string[] = []
        strategies.forEach(rn => {
            let msg: string = rn.processar(entidade)
            if (msg !== null) {
                sb.push(msg)
            }

        })

        return sb

    }
}