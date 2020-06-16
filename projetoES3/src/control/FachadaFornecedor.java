package control;

import java.util.HashMap;
import java.util.List;
import dao.FornecedorDao;
import dao.IDao;
import model.Log;
import model.domain.Fornecedor;
import model.domain.EntidadeDominio;

public class FachadaFornecedor implements IFachada{


	@Override
	public String salvar(EntidadeDominio entidade) {
		Fornecedor fornecedor = (Fornecedor)entidade;
		
		boolean isTrue = false;
		
		
		if(isTrue) {
			//MSG 2.2.6
			cliente.complementarDtCadastro();
			//MSG 2.2.7
			IDao dao = new ClienteDAO();
			
			dao.salvar(cliente);
			//MSG 2.2.8
			gerarLog();
			return "Cliente salvo com sucesso!";
		}else {
			return "Erro de validação!";
		}	
	}
	
	private void gerarLog() {
		//MSG 2.2.8.1
		Log log = new Log();	
		//MSG 2.2.8.2
		log.gerar(new HashMap<String, String>());
	}

	@Override
	public  String alterar(EntidadeDominio entidade) {
		return null;
	}

	@Override
	public String excluir(EntidadeDominio entidade) {
		return null;
	}

	@Override
	public List<EntidadeDominio> consultar(EntidadeDominio entidade) {
		// TODO Auto-generated method stub
		return null;
	}

}