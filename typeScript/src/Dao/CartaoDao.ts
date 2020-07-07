import {AbstractDao} from "./AbstractDao";
import {Cartao} from "../model/domain/Cartao";
import {Fornecedor} from "../model/domain/Fornecedor";


export class CartaoDao extends AbstractDao {
    private static TABLE_NAME = "cartao"

    public async salvar(cartao: Cartao): Promise<void> {
        await super.setConnection().raw(`
        INSERT INTO ${CartaoDao.TABLE_NAME} (
        id_cartao, 
        numero_cartao, 
        nome_cartao, 
        bandeira_cartao, 
        codigo_seguranca_cartao, 
        fk_fornecedor_id,
        data_cadastro)
        VALUES (
        "${cartao.getId()}",
        "${cartao.getNumeroCartao()}",
        "${cartao.getNomeCartao()}",
        "${cartao.getBandeiraCartao()}",
        "${cartao.getCodigoSegCartao()}",
        "${cartao.getfornecedorId()}",
        "${cartao.getDtCadastro()}");
        `)
        await AbstractDao.desconnectDB()
    }

    public async alterar(): Promise<void> {

    }

    public async inativar(): Promise<void> {

    }
    public async consultar(): Promise<any> {}

    public async consultarCartoes(id: string| undefined): Promise<any> {

        if(id){
            const response = await super.setConnection()
                .select("*")
                .into(CartaoDao.TABLE_NAME)
                .where({fk_fornecedor_id: id})
            if (response.length > 0) {
                let cartaoData = []
                for (let i = 0; i < response.length; i++) {
                    const cartao = {
                        id: response[i].id_cartao,
                        dataCad: response[i].data_cadastro,
                        numero: response[i].numero_cartao,
                        nome: response[i].nome_cartao,
                        bandeira: response[i].bandeira_cartao,
                        codSeg: response[i].codigo_seguranca_cartao
                    }

                    cartaoData.push(cartao)
                }

                return cartaoData
            }
        }else{
            const response = await super.setConnection()
                .select("*")
                .into(CartaoDao.TABLE_NAME)
            if (response.length > 0) {
                let cartaoData = []
                for (let i = 0; i < response.length; i++) {
                    const cartao = {
                        id: response[i].id_cartao,
                        dataCad: response[i].data_cadastro,
                        numero: response[i].numero_cartao,
                        nome: response[i].nome_cartao,
                        bandeira: response[i].bandeira_cartao,
                        codSeg: response[i].codigo_seguranca_cartao
                    }

                    cartaoData.push(cartao)
                }

                return cartaoData
            }
        }
    }
}