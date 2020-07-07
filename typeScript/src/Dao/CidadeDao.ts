import {AbstractDao} from "./AbstractDao";



export class CidadeDao extends AbstractDao {
    private static TABLE_NAME = "cidade"

    public async salvar(): Promise<void> {

    }

    public async alterar(): Promise<void> {

    }

    public async inativar(): Promise<void> {

    }

    public async consultar(): Promise<any> {

    }
    public async consultarTodasCidade(): Promise<any> {
        try {
            const response = await super.setConnection()
                .select("*")
                .into(CidadeDao.TABLE_NAME)
            if (response.length > 0) {
                let cidadeData = []
                for (let i = 0; i < response.length; i++) {
                    const cidade = {
                        id: response[i].id_cidade,
                        descricao: response[i].cidade_descricao,
                        idEstado: response[i].estado_id
                    }

                    cidadeData.push(cidade)
                }

                return cidadeData
            }
        } catch (err) {
            console.log(err)
        }
    }
}