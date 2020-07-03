import {AbstractDao} from "./AbstractDao";
import {IDao} from "./Idao";
import {Cartao} from "../model/domain/Cartao";



export class CartaoDao extends AbstractDao {
    private static TABLE_NAME = "cartao"

    public async salvar(cartao: Cartao,fornecedorId:string): Promise<void> {
        await super.getConnection().raw(`
        INSERT INTO "${CartaoDao.TABLE_NAME}" (
        id_cartao, 
        numero_cartao, 
        nome_cartao, 
        bandeira_cartao, 
        codigo_seguranca_cartao, 
        fk_fornecedor_id)
        VALUES (
        "${cartao.getId()}",
        "${cartao.getNumeroCartao()}",
        "${cartao.getNomeCartao()}",
        "${cartao.getBandeiraCartao()}",
        "${cartao.getCodigoSegCartao()}",
        "${fornecedorId}");
        `)

    }

    public async alterar(cartao: Cartao,fornecedorId:string): Promise<void> {
        await super.getConnection().raw(`
        UPDATE "${CartaoDao.TABLE_NAME}" 
        SET
        id_cartao =  "${cartao.getId()}",
        numero_cartao = "${cartao.getNumeroCartao()}",
        nome_cartao = "${cartao.getNomeCartao()}",
        bandeira_cartao = "${cartao.getBandeiraCartao()}",
        codigo_seguranca_cartao = "${cartao.getCodigoSegCartao()}"     
        WHERE pk_fornecedor_id = "${fornecedorId}",
        `)
    }

    public async inativar(fornecedorId:string): Promise<void> {
        await super.getConnection().raw(`
        UPDATE "${CartaoDao.TABLE_NAME}" 
        SET
        status_ativo = 0
        WHERE pk_fornecedor_id = "${fornecedorId}",
        `)
    }

    public async consultar(cartao: Cartao): Promise<any> {
        const response = await super.getConnection()
            .select("*")
            .into(CartaoDao.TABLE_NAME)
            .where({pk_fornecedor_id: cartao.getId()})
        if (response[0].length > 0) {
            const cartaoData = new Cartao(
                response[0].numero_cartao,
                response[0].nome_cartao,
                response[0].bandeira_cartao,
                response[0].codigo_seguranca_cartao,
            )
           // cartaoData.setStatus(response[0].status_ativo)
            return cartaoData
        }
    }
}