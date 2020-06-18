package dao;

import java.util.List;
import model.domain.EntidadeDominio;

public interface IDao {

	public void salvar(EntidadeDominio entidade);

	public void alterar(EntidadeDominio entidade);

	public void inativar(EntidadeDominio entidade);
	
	public List<EntidadeDominio> consultar(EntidadeDominio entidade);
	
}
