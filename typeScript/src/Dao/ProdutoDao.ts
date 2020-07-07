import {AbstractDao} from "./AbstractDao";
import {Produto} from "../model/domain/Produto";


export class ProdutoDao extends AbstractDao {
    private static TABLE_NAME = "produto"

    public async salvar(produto: Produto): Promise<void> {
        await super.setConnection().raw(`
        INSERT INTO ${ProdutoDao.TABLE_NAME} (
         id_produto,  
         data_cadastro, 
         descricao
         )
        VALUES (
        "${produto.getId()}",
        "${produto.getDtCadastro()}",
        "${produto.getDescricao()}"
        );
        `)
        await AbstractDao.desconnectDB()
    }

    public async alterar(): Promise<void> {

    }

    public async inativar(): Promise<void> {

    }

    public async consultar(): Promise<any> {
    }

    public async consultarProdutos(id: string | undefined): Promise<any> {

        if (id) {
            const response = await super.setConnection()
                .select("*")
                .into(ProdutoDao.TABLE_NAME)
                .where({id_produto: id})
            if (response.length > 0) {
                let produtoData = []
                for (let i = 0; i < response.length; i++) {
                    const produto = {
                        id: response[i].id_produto,
                        dataCad: response[i].data_cadastro,
                        descricao: response[i].descricao,
                    }

                    produtoData.push(produto)
                }

                return produtoData
            }
        } else {
            const response = await super.setConnection()
                .select("*")
                .into(ProdutoDao.TABLE_NAME)
            if (response.length > 0) {
                let produtoData = []
                for (let i = 0; i < response.length; i++) {
                    const produto = {
                        id: response[i].id_produto,
                        dataCad: response[i].data_cadastro,
                        descricao: response[i].descricao,
                    }

                    produtoData.push(produto)
                }

                return produtoData
            }
        }
    }
}