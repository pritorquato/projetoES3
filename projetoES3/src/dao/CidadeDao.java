package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.List;

import model.domain.Cidade;
import model.domain.EntidadeDominio;
import util.Conexao;

public class CidadeDao implements IDao {
	private Connection connection;
	private boolean ctrlTransaction = true;
	
	public CidadeDao(){}
	
	public CidadeDao(Connection connection){
		this.connection = connection;
	}

	@Override
	public void salvar(EntidadeDominio entidade) {
		Cidade cidade = (Cidade)entidade;
		PreparedStatement pst = null;
		StringBuilder sql = new StringBuilder();
		
		boolean ctrlTransaction = false;
		
		sql.append("INSERT INTO cidade(cidade_descricao, estado_id) VALUES (?, ?)");	
		
		try {
			if(connection == null){
				connection = Conexao.getConnectionMySQL();
				 
			}else{
				ctrlTransaction = false;
			}
		
			connection.setAutoCommit(false);			
					
			
			//vai salvar na outra tabela as informacoes de estado
			EstadoDao estadoDao = new EstadoDao(connection);
			estadoDao.salvar(cidade.getEstado());
			
			pst = connection.prepareStatement(sql.toString(), 
					Statement.RETURN_GENERATED_KEYS);
			
			pst.setString(1, cidade.getDescricao());
			pst.setInt(2, cidade.getEstado().getId());
			
			pst.executeUpdate();		
					
			ResultSet rs = pst.getGeneratedKeys();
			int idEst = 0;
			if(rs.next())
				idEst = rs.getInt(1);
			cidade.setId(idEst);
			
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
