package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.util.List;
import model.domain.Fornecedor;
import model.domain.EntidadeDominio;
import util.Conexao;


public class FornecedorDao implements IDao {

	private Connection connection = null;
	

	@Override
	public void salvar(EntidadeDominio entidade) {
		Fornecedor fornecedor = (Fornecedor)entidade;
			
		PreparedStatement pst = null;		
		
		try {
			connection = Conexao.getConnectionMySQL();
			connection.setAutoCommit(false);
			
			EnderecoDao enderecoDao = new EnderecoDao(connection);
			enderecoDao.salvar(fornecedor.getEnderecoForn());

			StringBuilder sql = new StringBuilder();
			sql.append("INSERT INTO fornecedor(nome_fornecedor, cpf_fornecedor, data_nascimento_fornecedor,");
			sql.append("genero_fornecedor");
//			sql.append("produtos_fornecedor, produto_padrao_fornecedor,	produtos_fornecedor_id");
			sql.append("email_fornecedor, ranking_fornecedor,");
			sql.append("endereco_id, telefone_fornecedor_id, cartao_fornecedor_id) VALUES (?,?,?,?,?,?,?,?,?,?)");

			pst = connection.prepareStatement(sql.toString(),
					Statement.RETURN_GENERATED_KEYS);

			pst.setString(1, fornecedor.getNomeForn());
			pst.setString(2, fornecedor.getCpfForn());
			pst.setString(3, fornecedor.getDataNascForn());
			pst.setString(4, fornecedor.getGeneroForn());
			pst.setString(5, fornecedor.getEmailForn());
			pst.setDouble(6, fornecedor.getRankingForn());
			pst.setInt(7, fornecedor.getEnderecoForn().getId());
			pst.setInt(8, fornecedor.getTelefoneForn().getId());
			pst.setInt(9, fornecedor.getCartao().getId());
			
			pst.executeUpdate();

			ResultSet rs = pst.getGeneratedKeys();
			
			//para inserir o codigo do fornecedor?
			int idFrn = 0;
			if (rs.next())
				idFrn = rs.getInt(1);
			fornecedor.setId(idFrn);
	
			connection.commit();
		} catch (Exception e) {
			try {
				connection.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}

			e.printStackTrace();
		} finally {
			try {
				pst.close();
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}
	

	
	

	@Override
	public void alterar(EntidadeDominio entidade) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void inativar(EntidadeDominio entidade) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<EntidadeDominio> consultar(EntidadeDominio entidade) {
		// TODO Auto-generated method stub
		return null;
	}






}
