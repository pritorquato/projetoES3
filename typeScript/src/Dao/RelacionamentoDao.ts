import {AbstractDao} from "./AbstractDao";
import {ProdutoDao} from "./ProdutoDao";
import {FornecedorDao} from "./FornecedorDao";


export class RelacionamentoDao extends AbstractDao {
    private static TABLE_NAME_PRODUTO = "produto_endereco"
    private static TABLE_NAME_FORNECEDOR = "fornecedor_endereco"
    private static TABLE_NAME_FORNECEDOR_PRODUTO = "fornecedor_produto"

    public async salvar(): Promise<void> {
    }

    public async alterar(): Promise<void> {
    }

    public async inativar(): Promise<void> {
    }

    public async consultar(): Promise<any> {
    }

    public async salvarRelacionamento(id: string, enderecoId: string): Promise<void> {

        const produto = await new ProdutoDao().consultarProdutos(id)
        const fornecedor = await new FornecedorDao().consultarFornecedor(id)
        try {
            if (produto) {
                await super.setConnection().raw(`
        INSERT INTO ${RelacionamentoDao.TABLE_NAME_PRODUTO} ( 
         fk_endereco_entrega_id, 
         fk_produto_id
         )
        VALUES (
        "${enderecoId}",
        "${id}"
        );
        `)
            } else if (fornecedor) {
                await super.setConnection().raw(`
        INSERT INTO ${RelacionamentoDao.TABLE_NAME_FORNECEDOR} ( 
         fk_fornecedor_id_rel,
         fk_endereco_id_rel
         )
        VALUES (
        "${id}",
        "${enderecoId}"
        );
        `)

            }
        } catch (err) {
            console.log("salvar relacionamentos" + err.message)
        }

    }

    public async salvarRelacionamentoFP(fornecedorId: string, produtoId: string): Promise<void> {

        try {
            await super.setConnection().raw(`
        INSERT INTO ${RelacionamentoDao.TABLE_NAME_FORNECEDOR_PRODUTO} ( 
         fk_fornecedor_id, 
         fk_produto_id_fp
         )
        VALUES (
        "${fornecedorId}",
        "${produtoId}"
        );
        `)
        } catch (err) {
            console.log("salvar relacionamentos" + err.message)
        }


    }

    public async consultarProdutos(id: string | undefined): Promise<any> {

        if (id) {
            const response = await super.setConnection()
                .select("*")
                .into(RelacionamentoDao.TABLE_NAME_FORNECEDOR_PRODUTO)
                .where({fk_fornecedor_id: id})
            if (response.length > 0) {
                let produtoData = []
                for (let i = 0; i < response.length; i++) {
                    const produto = {
                        id: response[i].fk_produto_id_fp,
                    }

                    produtoData.push(produto)
                }
                return produtoData
            }
        } else {
            const response = await super.setConnection()
                .select("*")
                .into(RelacionamentoDao.TABLE_NAME_FORNECEDOR_PRODUTO)
            if (response.length > 0) {
                let produtoData = []
                for (let i = 0; i < response.length; i++) {
                    const produto = {
                        id: response[i].fk_produto_id_fp,
                    }

                    produtoData.push(produto)
                }
                return produtoData
            }


        }
    }

    public async consultarEnderecos(id: string | undefined): Promise<any> {

        if (id) {
            const response = await super.setConnection().raw(`
                select e.*, f.codigo_fornecedor 
                from  endereco e, fornecedor f, fornecedor_endereco fp 
                where fp.fk_fornecedor_id_rel = "${id}"
                and e.id_endereco = fp.fk_endereco_id_rel 
                and fp.fk_fornecedor_id_rel = f.codigo_fornecedor;
            `)


            if (response.length > 0) {
                let enderecoData = []
                for (let i = 0; i < response[0].length; i++) {
                    const endereco = {
                        id: response[0][i].id_endereco,
                        endereco: response[0][i].nome_endereco,
                        tipoEnd: response[0][i].tipo_endereco,
                        logradouro: response[0][i].tipo_logradouro,
                        tipoRes: response[0][i].tipo_residencia,
                        logradouroEnd: response[0][i].logradouro_endereco,
                        numero: response[0][i].numero_endereco,
                        bairro: response[0][i].bairro_endereco,
                        cep: response[0][i].cep_endereco,
                        observacoes: response[0][i].observacoes_endereco,
                        cidadeId: response[0][i].cidade_id,
                        dtCadastro: response[0][i].data_cadastro
                    }

                    enderecoData.push(endereco)
                }
                return enderecoData
            }
        }
    }
}