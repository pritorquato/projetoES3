package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.List;

import model.domain.Endereco;
import model.domain.EntidadeDominio;
import util.Conexao;

public class EnderecoDao implements IDao {
	private Connection connection;
	private boolean ctrlTransaction = true;
	
	public EnderecoDao(){}
	
	public EnderecoDao(Connection connection){
		this.connection = connection;
	}

	@Override
	public void salvar(EntidadeDominio entidade) {
		Endereco endereco = (Endereco)entidade;
		PreparedStatement pst = null;
		StringBuilder sql = new StringBuilder();
		
		boolean ctrlTransaction = false;
		
		sql.append("INSERT INTO endereco(cidade, estado, ");
		sql.append("nome_endereco, tipo_endereco, tipo_logradouro, tipo_residencia, ");
		sql.append("logradouro_endereco, numero_endereco, bairro_endereco, cep_endereco, ");
		sql.append("observacoes_endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");	
		
		try {
			if(connection == null){
				connection = Conexao.getConnectionPostgres();
				 
			}else{
				ctrlTransaction = false;
			}
		
			connection.setAutoCommit(false);			
					
			pst = connection.prepareStatement(sql.toString(), 
					Statement.RETURN_GENERATED_KEYS);
			
			pst.setString(1, endereco.getCidadeEnd().getDescricao());
			pst.setString(2, endereco.getCidadeEnd().getEstado().getDescricao());
			pst.setString(3, endereco.getNomeEnd());
			pst.setString(4, endereco.getTipoEnd());
			pst.setString(5, endereco.getTipoLogr());
			pst.setString(6, endereco.getTipoResid());
			pst.setString(7, endereco.getLogradouroEnd());
			pst.setInt(8, endereco.getNumeroEnd());
			pst.setString(9, endereco.getBairroEnd());		
			pst.setString(10, endereco.getCepEnd());		
			pst.setString(11, endereco.getObservacoesEnd());		
			
			pst.executeUpdate();		
					
			ResultSet rs = pst.getGeneratedKeys();
			int idEnd = 0;
			if(rs.next())
				idEnd = rs.getInt(1);
			endereco.setId(idEnd);
			
			if(!ctrlTransaction)
				connection.commit();			
			
		} catch (Exception e) {
			try {
				connection.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			e.printStackTrace();	
		}finally{
			if(ctrlTransaction){
				try {
					pst.close();
					if(ctrlTransaction)
						connection.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}	
		}
	}

	@Override
	public void alterar(EntidadeDominio entidade) {

	}

	@Override
	public void inativar (EntidadeDominio entidade) {

	}

	@Override
	public List<EntidadeDominio> consultar(EntidadeDominio entidade) {

		return null;
	}

}
