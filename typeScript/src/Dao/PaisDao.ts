import {AbstractDao} from "./AbstractDao";

export class PaisDao extends AbstractDao {
    private static TABLE_NAME = "pais"

    public async salvar(): Promise<void> {

    }

    public async alterar(): Promise<void> {

    }

    public async inativar(): Promise<void> {

    }

    public async consultar(): Promise<any> {

    }

    public async consultarTodosPaises(): Promise<any> {
        try {
            const response = await super.setConnection()
                .select("*")
                .into(PaisDao.TABLE_NAME)
            if (response.length > 0) {
                let PaisData = []
                for (let i = 0; i < response.length; i++) {
                    const pais = {
                        id: response[i].id_pais,
                        descricao: response[i].pais_descricao,
                        siglaPais: response[i].sigla_pais
                    }

                    PaisData.push(pais)
                }
                await AbstractDao.desconnectDB()
                return PaisData
            }
        } catch (err) {
            console.log(err)
        }
    }
}