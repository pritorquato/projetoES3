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
		
		isTrue = fornecedor.validarDadosObrigatorios();
		
		if(isTrue) {
			isTrue = fornecedor.validarCpf();
			if(isTrue) {
				isTrue = fornecedor.validarExistencias();
			}			
		}			
		
		if(isTrue) {

			fornecedor.complementarDtCadastro();

			IDao dao = new FornecedorDao();
			
			dao.salvar(fornecedor);

			gerarLog();
			return "Fornecedor salvo com sucesso!";
		}else {
			return "Erro de validação!";
		}	
	}//salvar

	private void gerarLog() {
		Log log = new Log();	
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