package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.List;

import model.domain.Estado;
import model.domain.EntidadeDominio;
import util.Conexao;

public class EstadoDao implements IDao {
	private Connection connection;
	private boolean ctrlTransaction = true;
	
	public EstadoDao(){}
	
	public EstadoDao(Connection connection){
		this.connection = connection;
	}

	@Override
	public void salvar(EntidadeDominio entidade) {
		Estado estado = (Estado)entidade;
		PreparedStatement pst = null;
		StringBuilder sql = new StringBuilder();
		
		boolean ctrlTransaction = false;
		
		sql.append("INSERT INTO estado(estado_descricao, sigla_estado, pais_id ) VALUES (?, ?, ?)");	
		
		
		try {
			if(connection == null){
				connection = Conexao.getConnectionMySQL();
				 
			}else{
				ctrlTransaction = false;
			}
		
			connection.setAutoCommit(false);			
					
			
			//vai salvar na outra tabela as informacoes de pais
			PaisDao paisDao = new PaisDao(connection);
			paisDao.salvar(estado.getPais());
			
			pst = connection.prepareStatement(sql.toString(), 
					Statement.RETURN_GENERATED_KEYS);
			
			pst.setString(1, estado.getDescricao());
			pst.setString(2, estado.getSigla());
			pst.setInt(3, estado.getPais().getId());
			
			
			pst.executeUpdate();		
					
			//traz id do pais para o estado
			ResultSet rs = pst.getGeneratedKeys();
			int idPais = 0;
			if(rs.next())
				idPais = rs.getInt(1);
			estado.setId(idPais);
			
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
