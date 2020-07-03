import {AbstractDao} from "./AbstractDao";
import {IDao} from "./Idao";
import {Fornecedor} from "../model/domain/Fornecedor";


export class FornecedorDao extends AbstractDao implements IDao {
    private static TABLE_NAME = "fornecedor"

    public async salvar(fornecedor: Fornecedor): Promise<void> {
        await super.getConnection().raw(`
        INSERT INTO "${FornecedorDao.TABLE_NAME}" (
        codigo_fornecedor,
        nome_fornecedor,
        cpf_fornecedor,
        data_nascimento_fornecedor,
        genero_fornecedor,
        produto_padrao_fornecedor,
        email_fornecedor,
        ranking_fornecedor,
        status_ativo)
        VALUES (
        "${fornecedor.getId()}",
        "${fornecedor.getName()}",
        "${fornecedor.getCpf()}",
        "${fornecedor.getData()}",
        "${fornecedor.getGenero()}",
        "${fornecedor.getProdutoPad()}",
        "${fornecedor.getEmail()}",
        "${fornecedor.getRank()}",
        "1");
        `)
        // invocar endereçoDao
        // insert telefone
        // insert cartao
    }

    public async alterar(fornecedor: Fornecedor): Promise<void> {
        await super.getConnection().raw(`
        UPDATE "${FornecedorDao.TABLE_NAME}" 
        SET
        codigo_fornecedor = "${fornecedor.getId()}",
        nome_fornecedor = "${fornecedor.getName()}",
        cpf_fornecedor = "${fornecedor.getCpf()}",
        data_nascimento_fornecedor = "${fornecedor.getData()}",
        genero_fornecedor = "${fornecedor.getGenero()}",
        produto_padrao_fornecedor= "${fornecedor.getProdutoPad()}",
        email_fornecedor = "${fornecedor.getEmail()}",
        ranking_fornecedor = "${fornecedor.getRank()}"
        WHERE codigo_fornecedor = "${fornecedor.getId()}",
        `)
    }

    public async inativar(fornecedor: Fornecedor): Promise<void> {
        await super.getConnection().raw(`
        UPDATE "${FornecedorDao.TABLE_NAME}" 
        SET
        status_ativo = 0
        WHERE codigo_fornecedor = "${fornecedor.getId()}",
        `)
    }

    public async consultar(fornecedor: Fornecedor): Promise<any> {
        const response = await super.getConnection()
            .select("*")
            .into(FornecedorDao.TABLE_NAME)
            .where({codigo_fornecedor: fornecedor.getId()})
        if (response[0].length > 0) {
            const fornecedorData = new Fornecedor(
                response[0].nome_fornecedor,
                response[0].produto_padrao_fornecedor,
                response[0].genero_fornecedor,
                response[0].data_nascimento_fornecedor,
                response[0].cpf_fornecedor,
                response[0].email_fornecedor,
                response[0].ranking_fornecedor,
            )
            fornecedorData.setStatus(response[0].status_ativo)
            return fornecedor
        }
    }
}
