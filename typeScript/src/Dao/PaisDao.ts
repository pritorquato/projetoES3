import {AbstractDao} from "./AbstractDao";
import {Pais} from "../model/domain/Pais";




export class PaisDao extends AbstractDao {
    private static TABLE_NAME = "pais"

    public async salvar(pais: Pais): Promise<void> {
        await super.getConnection().raw(`
        INSERT INTO "${PaisDao.TABLE_NAME}" (
        id_pais,
        sigla_pais, 
        pais_descricao
        VALUES (
        "${pais.getId()}",
        "${pais.getSigla()}",
        "${pais.getDescricao()}");
        `)

    }

    public async alterar(pais: Pais): Promise<void> {
        await super.getConnection().raw(`
        UPDATE "${PaisDao.TABLE_NAME}" 
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