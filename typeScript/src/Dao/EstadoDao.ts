import {AbstractDao} from "./AbstractDao";



export class EstadoDao extends AbstractDao {
    private static TABLE_NAME = "estado"

    public async salvar(): Promise<void> {

    }

    public async alterar(): Promise<void> {

    }

    public async inativar(): Promise<void> {

    }

    public async consultar(): Promise<any> {

    }
    public async consultarTodosEstados(): Promise<any> {
        try {
            const response = await super.setConnection()
                .select("*")
                .into(EstadoDao.TABLE_NAME)
            if (response.length > 0) {
                let estadoData = []
                for (let i = 0; i < response.length; i++) {
                    const estado = {
                        id: response[i].id_estado,
                        descricao: response[i].estado_descricao,
                        siglaEstado: response[i].sigla_estado,
                        idPais: response[i].pais_id
                    }

                    estadoData.push(estado)
                }

                return estadoData
            }
        } catch (err) {
            console.log(err)
        }
    }
}