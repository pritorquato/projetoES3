import {AbstractDao} from "./AbstractDao";
import {Telefone} from "../model/domain/Telefone";


export class TelefoneDao extends AbstractDao {
    private static TABLE_NAME = "telefone"

    public async salvar(telefone: Telefone): Promise<void> {

        await super.setConnection().raw(`
        INSERT INTO ${TelefoneDao.TABLE_NAME} (
        id_telefone, 
        tipo_telefone, 
        ddd_telefone, 
        numero_telefone, 
        data_cadastro,
        fk_fornecedor_id)
        VALUES (
        "${telefone.getId()}",
        "${telefone.getTipoTelefone()}",
        "${telefone.getDddTelefone()}",
        "${telefone.getNumeroTelefone()}",
        "${telefone.getDtCadastro()}",
        "${telefone.getFornecedorId()}")
        `)
    }

    public async alterar(): Promise<void> {

    }

    public async inativar(): Promise<void> {

    }

    public async consultar(): Promise<any> {
    }

    public async consultarTelefones(id: string): Promise<any> {

        if (id) {
            try {
                const response = await super.setConnection()
                    .select("*")
                    .into(TelefoneDao.TABLE_NAME)
                    .where({fk_fornecedor_id: id})
                if (response.length > 0) {
                    let telefoneData = []
                    for (let i = 0; i < response.length; i++) {
                        const Telefone = {
                            id: response[i].id_telefone,
                            tipo: response[i].tipo_telefone,
                            ddd: response[i].ddd_telefone,
                            numero: response[i].numero_telefone,
                            dtCadastro: response[i].data_cadastro,
                        }

                        telefoneData.push(Telefone)
                    }

                    return telefoneData
                }
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                const response = await super.setConnection()
                    .select("*")
                    .into(TelefoneDao.TABLE_NAME)
                if (response.length > 0) {
                    let telefoneData = []
                    for (let i = 0; i < response.length; i++) {
                        const Telefone = {
                            id: response[i].id_telefone,
                            tipo: response[i].tipo_telefone,
                            ddd: response[i].ddd_telefone,
                            numero: response[i].numero_telefone,
                            dtCadastro: response[i].data_cadastro,
                        }

                        telefoneData.push(Telefone)
                    }

                    return telefoneData
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}