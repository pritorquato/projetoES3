import {AbstractDao} from "./AbstractDao";
import {Fornecedor} from "../model/domain/Fornecedor";
import {CartaoDao} from "./CartaoDao";
import {TelefoneDao} from "./TelefoneDao";
import {EnderecoDao} from "./EnderecoDao";
import {IdGenerator} from "../services/IdGenerator";
import {RelacionamentoDao} from "./RelacionamentoDao";


export class FornecedorDao extends AbstractDao {
    private static TABLE_NAME = "fornecedor"

    public async salvar(fornecedor: Fornecedor): Promise<void> {

        await super.setConnection().raw(`
        INSERT INTO ${FornecedorDao.TABLE_NAME} (
        codigo_fornecedor,
        nome_fornecedor,
        cpf_fornecedor,
        data_nascimento_fornecedor,
        genero_fornecedor,
        produto_padrao_fornecedor,
        email_fornecedor,
        ranking_fornecedor,
        status_ativo,
        senha_forn,
        data_cadastro
        )
        VALUES (
        "${fornecedor.getId()}",
        "${fornecedor.getName()}",
        "${fornecedor.getCpf()}",
        "${fornecedor.getData()}",
        "${fornecedor.getGenero()}",
        "${fornecedor.getProdutoPad()}",
        "${fornecedor.getEmail()}",
        "${fornecedor.getRank()}",
        1,
        "${fornecedor.getSenha()}",
        "${fornecedor.getDtCadastro()}");
        `)
        AbstractDao.desconnectDB()
    }


    public async alterar(fornecedor: Fornecedor): Promise<void> {
        await super.setConnection().raw(`
        UPDATE ${FornecedorDao.TABLE_NAME}
        SET
        codigo_fornecedor = "${fornecedor.getId()}",
        nome_fornecedor = "${fornecedor.getName()}",
        cpf_fornecedor = "${fornecedor.getCpf()}",
        senha_forn = "${fornecedor.getSenha()}"
        data_nascimento_fornecedor = "${fornecedor.getData()}",
        genero_fornecedor = "${fornecedor.getGenero()}",
        produto_padrao_fornecedor= "${fornecedor.getProdutoPad()}",
        email_fornecedor = "${fornecedor.getEmail()}",
        ranking_fornecedor = "${fornecedor.getRank()}"
        WHERE codigo_fornecedor = "${fornecedor.getId()}",
        `)
        AbstractDao.desconnectDB()
    }

    public async inativar(fornecedor: Fornecedor): Promise<void> {
        await super.setConnection().raw(`
        UPDATE ${FornecedorDao.TABLE_NAME} 
        SET
        status_ativo = 0
        WHERE codigo_fornecedor = "${fornecedor.getId()}",
        `)
        AbstractDao.desconnectDB()
    }

    public async alterarSenha(id: string,senha: string): Promise<void> {
        await super.setConnection().raw(`
        UPDATE ${FornecedorDao.TABLE_NAME} 
        SET
        senha_forn = "${senha}"
        WHERE codigo_fornecedor = "${id}",
        `)
        AbstractDao.desconnectDB()
    }
    public async consultar(fornecedor: Fornecedor): Promise<void> {}

    public async consultarFornecedor(id: string | undefined): Promise<any> {
        let response
        let fornecedorData = []
        if (id !== undefined ) {
            response = await super.setConnection()
                .select("*")
                .into(FornecedorDao.TABLE_NAME)
                .where({codigo_fornecedor: id})
        } else {
            response = await super.setConnection()
                .select("*")
                .into(FornecedorDao.TABLE_NAME)
        }


        for (let i = 0; i < response.length; i++) {
            //consultar cartao
            //consultar telefone
            // consultar endereço

            const newfornecedor = new Fornecedor(
                response[i].nome_fornecedor,
                response[i].produto_padrao_fornecedor,
                response[i].genero_fornecedor,
                response[i].senha_forn,
                response[i].data_nascimento_fornecedor,
                response[i].cpf_fornecedor,
                response[i].email_fornecedor,
                response[i].ranking_fornecedor,
                [],
                [],
                [],
                []
            )

            newfornecedor.setId(response[i].codigo_fornecedor)
            newfornecedor.setDtCadastro("hoje")
            newfornecedor.setStatus(response[i].status_ativo)

            newfornecedor.addCartao(await new CartaoDao().consultarCartoes(newfornecedor.getId()))
            newfornecedor.addTelefones(await new TelefoneDao().consultarTelefones(newfornecedor.getId()))
            newfornecedor.addEnderecos(await new RelacionamentoDao().consultarEnderecos(newfornecedor.getId()))
            newfornecedor.addProduto(await new RelacionamentoDao().consultarProdutos(newfornecedor.getId()))
            fornecedorData.push(newfornecedor)


        }
        return fornecedorData
        AbstractDao.desconnectDB()
    }
}
