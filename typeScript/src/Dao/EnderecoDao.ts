import {AbstractDao} from "./AbstractDao";
import {Endereco} from "../model/domain/Endereco";


export class EnderecoDao extends AbstractDao {
    private static TABLE_NAME = "endereco"

    public async salvar(endereco: Endereco): Promise<void> {
        try {
            await super.setConnection().raw(`
        INSERT INTO ${EnderecoDao.TABLE_NAME} (
        id_endereco, 
        nome_endereco,
        tipo_endereco, 
        tipo_logradouro, 
        tipo_residencia, 
        logradouro_endereco, 
        numero_endereco, 
        bairro_endereco, 
        cep_endereco, 
        observacoes_endereco, 
        cidade_id, 
        data_cadastro
        )
        VALUES (
        "${endereco.getId()}",
        "${endereco.getNomeEnd()}",
        "${endereco.getTipoEnd()}",
        "${endereco.getTipoLogr()}",
        "${endereco.getTipoResid()}",
        "${endereco.getLogradouroEnd()}",
        "${endereco.getNumeroEnd()}",
        "${endereco.getBairroEnd()}",
        "${endereco.getCepEnd()}",
        "${endereco.getObservacoesEnd()}",
        "${endereco.getCidadeEnd()}",
        "${endereco.getDtCadastro()}"
        );
        `)
        } catch (err) {
            console.log(err)
        } finally {
            await AbstractDao.desconnectDB()
        }

    }

    public async alterar(): Promise<void> {

    }

    public async inativar(): Promise<void> {

    }

    public async consultar(): Promise<any> {
    }

    public async consultarEnderecos(id: string | undefined): Promise<any> {

        if (id) {
            const response = await super.setConnection()
                .select("*")
                .into(EnderecoDao.TABLE_NAME)
                .where({id_endereco: id})
            if (response.length > 0) {
                let enderecoData = []
                for (let i = 0; i < response.length; i++) {
                    const endereco = {
                        id: response[i].id_endereco,
                        endereco: response[i].nome_endereco,
                        tipoEnd: response[i].tipo_endereco,
                        logradouro: response[i].tipo_logradouro,
                        tipoRes: response[i].tipo_residencia,
                        logradouroEnd: response[i].logradouro_endereco,
                        numero: response[i].numero_endereco,
                        bairro: response[i].bairro_endereco,
                        cep: response[i].cep_endereco,
                        observacoes: response[i].observacoes_endereco,
                        cidadeId: response[i].cidade_id,
                        dtCadastro: response[i].data_cadastro
                    }

                    enderecoData.push(endereco)
                }
                return enderecoData
            }
        } else {
            const response = await super.setConnection()
                .select("*")
                .into(EnderecoDao.TABLE_NAME)
            if (response.length > 0) {
                let enderecoData = []
                for (let i = 0; i < response.length; i++) {
                    const endereco = {
                        id: response[i].id_endereco,
                        endereco: response[i].nome_endereco,
                        tipoEnd: response[i].tipo_endereco,
                        logradouro: response[i].tipo_logradouro,
                        tipoRes: response[i].tipo_residencia,
                        logradouroEnd: response[i].logradouro_endereco,
                        numero: response[i].numero_endereco,
                        bairro: response[i].bairro_endereco,
                        cep: response[i].cep_endereco,
                        observacoes: response[i].observacoes_endereco,
                        cidadeId: response[i].cidade_id,
                        dtCadastro: response[i].data_cadastro
                    }

                    enderecoData.push(endereco)
                }
                return enderecoData
            }


        }
    }
}