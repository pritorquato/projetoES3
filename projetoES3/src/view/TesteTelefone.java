//
//package view;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Scanner;
//
//import control.FachadaFornecedor;
//import control.IFachada;
//import dao.FornecedorDao;
//import dao.IDao;
//import model.Log;
//import model.domain.Cartao;
//import model.domain.Cidade;
//import model.domain.Fornecedor;
//import model.domain.Pais;
//import model.domain.Produto;
//import model.domain.Telefone;
//import model.domain.Endereco;
//import model.domain.Estado;
//
//import javax.swing.*;
//
//public class TesteTelefone {

	private int codForn;
	private String nomeForn;
	private String cpfForn;
	private String generoForn;
	private String dataNascForn;
	private int idEnd;
	private String tipoEnderecoForn; //tipoEndereço: cobrança ou entrega
	private String nomeEnderecoForn; //frase curta
	private String tipoResidenciaForn; //tipoResidencia: casa, apto, galpão
	private String tipoLogradouroForn; //tipoLogradouro: rua, avenida, estrada
	private String logradouroForn;
	private int numeroEnderecoForn;
	private String cepForn;
	private String bairro;
	private String cidadeForn;
	private String estadoForn;
	private String paisForn;
	private String observacoes;
	private int idTel;
	private String tipoTelefoneForn;
	private String dddTelefoneForn;
	private String telefoneForn;
	private String emailForn;

	private int codProdForn;
	private String produtosForn;
	private boolean produtoPadraoForn;
	
	private double rankingForn;
	private String senhaForn;
	private String confirmacaoSenhaForn;
	private int idCartao;
	private String bandeiraCartao;
	private String numeroCartao;
	private String nomeCartao;
	private int codSegCartao;
	private List<Telefone> telefones = new ArrayList<>();
	

	private JButton btAdicionarEndereco;
	private JButton btAdicionarCartao;
	private JButton btAdicionarTelefone;
	private JButton btSalvar;

	
	public static void main(String[] args) {
		FormFornecedor frmForn = new FormFornecedor();
		
		Scanner sc = new Scanner(System.in);		
		
	
//TELEFONE
		
		List<Telefone> telefones = new ArrayList<Telefone>();
		while(!sc.equals('#') ) {
			Telefone telefone = new Telefone(frmForn., frmForn.dddTelefoneForn, frmForn.telefoneForn);
			
			System.out.println("Informações sobre telefones, a qualquer momento digite  #  para sair.");
			System.out.print("Digite o tipo de telefone (residencial, celular, comercial etc): ");		
			frmForn.setTipoTelefoneForn(sc.next());
			
			System.out.print("Digite o ddd: ");		
			frmForn.dddTelefoneForn = sc.next();
		
			System.out.print("Digite o telefone: ");		
			frmForn.telefoneForn = sc.next();
					
			telefones.add(telefone);		
						
		}
			
		


//			System.out.print("Digite os codigos dos produtos do fornecedor: ");		
//			frmForn.codProdForn = sc.nextInt();
//
//			System.out.print("Digite o produto padrão: ");		
//			frmForn.produtoPadraoForn = sc.next();
//			
// PROBLEMA: preencher um array em tempo de execução, com informações de produto, 
//			sem quantidade especificada
		

	

		
		Fornecedor fornecedor = frmForn.definirFornecedor();
		
		IFachada fachada = new FachadaFornecedor();
		fachada.salvar(fornecedor);
		
	}
		
	
		private Fornecedor definirFornecedor() {
		
			Pais pais = new Pais(paisForn);
			Estado estado = new Estado(estadoForn, pais);
			Cidade cidade = new Cidade(cidadeForn, estado);
			
			Endereco endereco = new Endereco(nomeEnderecoForn, tipoEnderecoForn, tipoLogradouroForn, 
					tipoResidenciaForn, logradouroForn, numeroEnderecoForn, bairro, cepForn, cidade, observacoes); 
			
			Cartao cartao = new Cartao( numeroCartao, nomeCartao, bandeiraCartao, codSegCartao);
			
			Telefone telefone = new Telefone( tipoTelefoneForn, dddTelefoneForn, telefoneForn);

//				Produto produto = new Produto(codProdForn, produtoPadraoForn);
						
				Fornecedor fornecedor = new Fornecedor(nomeForn, cpfForn, generoForn, dataNascForn, endereco, telefone, 
						emailForn, rankingForn, senhaForn, confirmacaoSenhaForn, cartao);			
								
				return fornecedor;
			}

}
