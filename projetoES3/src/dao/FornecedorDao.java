package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.util.Iterator;
import java.util.List;
import model.domain.Fornecedor;
import model.domain.Telefone;
import model.domain.Endereco;
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
				
//			EnderecoDao enderecoDao = new EnderecoDao(connection);
//			enderecoDao.salvar(fornecedor.getEndereco());
			
			StringBuilder sql = new StringBuilder();
			sql.append("INSERT INTO fornecedor(nome_fornecedor, cpf_fornecedor, data_nascimento_fornecedor,");
			sql.append("genero_fornecedor,");
//			sql.append("produtos_fornecedor, produto_padrao_fornecedor,	produtos_fornecedor_id");
			sql.append("email_fornecedor, ranking_fornecedor");
//			sql.append(" cartao_fornecedor_id");
			sql.append(") VALUES (?,?,?,?,?,?)");

			pst = connection.prepareStatement(sql.toString(),
					Statement.RETURN_GENERATED_KEYS);

			pst.setString(1, fornecedor.getNomeForn());
			pst.setString(2, fornecedor.getCpfForn());
			pst.setString(3, fornecedor.getDataNascForn());
			pst.setString(4, fornecedor.getGeneroForn());
			pst.setString(5, fornecedor.getEmailForn());
			pst.setDouble(6, fornecedor.getRankingForn());
//			pst.setInt(7, fornecedor.getEnderecoForn().getId());
//			pst.setInt(8, fornecedor.getCartao().getId());
			
			pst.executeUpdate();

			//para trazer o id do fornecedor gerado automaticamente no BD
			ResultSet rs = pst.getGeneratedKeys();
					
			int idFrn = 0;
			if (rs.next())
				idFrn = rs.getInt(1);
			fornecedor.setId(idFrn);
	
			salvarTelefones(fornecedor);
			
			for (Endereco end : fornecedor.getEnderecos()) {
				EnderecoDao enderecoDao = new EnderecoDao(connection);
				enderecoDao.salvar(end);
//				enderecoDao.pegarIDfornecedor(end, idFrn);
			}
			
			
			
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
	
	
	
	private void salvarTelefones(Fornecedor fornecedor) throws SQLException {
		PreparedStatement pst = null;
		
		StringBuilder sql = new StringBuilder();
	
		sql.append("INSERT INTO telefone(fornecedor_id,");
		sql.append("tipo_telefone, ddd_telefone , numero_telefone ");
		sql.append(") VALUES (?, ?, ?, ?)");	
		
		//vai incluir cada um dos telefones no mesmo fornecedor
		for (Telefone t : fornecedor.getTelefones()) {		

			pst = connection.prepareStatement(sql.toString(),
					Statement.RETURN_GENERATED_KEYS);

			pst.setInt(1, fornecedor.getId());
			pst.setString(2, t.getTipoTelefone());
			pst.setString(3, t.getDddTelefone());
			pst.setString(4, t.getNumeroTelefone());

			pst.executeUpdate();

			ResultSet rs = pst.getGeneratedKeys();
			int idTel = 0;
			if (rs.next())
				idTel = rs.getInt(1);
			t.setId(idTel);
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
