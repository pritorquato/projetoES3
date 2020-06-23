package view;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

import control.FachadaFornecedor;
import control.IFachada;
import dao.FornecedorDao;
import dao.IDao;
import model.Log;
import model.domain.Cartao;
import model.domain.Cidade;
import model.domain.Fornecedor;
import model.domain.Pais;
import model.domain.Produto;
import model.domain.Telefone;
import model.domain.Endereco;
import model.domain.Estado;

import javax.swing.*;

public class FormFornecedor{

//	private int codForn;
	private String nomeForn;
	private String cpfForn;
	private String generoForn;
	private String dataNascForn;
	
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
	
	private List<Telefone> telefonesFornecedor = new ArrayList<Telefone>();

	private List<Endereco> enderecosFornecedor = new ArrayList<Endereco>();
	
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

	private JButton btAdicionarEndereco;
	private JButton btAdicionarCartao;
	private JButton btAdicionarTelefone;
	private JButton btSalvar;

	
	public static void main(String[] args) {
		FormFornecedor frmForn = new FormFornecedor();
		
		Scanner sc = new Scanner(System.in);	
		String resposta = "";
		
		System.out.print("Digite o nome do fornecedor: ");		
		frmForn.nomeForn = sc.next();		
		
		System.out.print("Digite o cpf: ");		
		frmForn.cpfForn = sc.next();
				
		System.out.print("Digite o data de nascimento (dd/mm/aaaa): ");		
		frmForn.dataNascForn = sc.next();

		System.out.print("Digite o gênero do fornecedor: ");		
		frmForn.generoForn = sc.next();
		
//ENDEREÇO
		
		while(!resposta.equalsIgnoreCase("n"))  {
			Pais paisWhile = new Pais(frmForn.paisForn);
			Estado estadoWhile = new Estado(frmForn.estadoForn, paisWhile);
			Cidade cidadeWhile = new Cidade(frmForn.cidadeForn, estadoWhile);
			Endereco enderecoWhile = new Endereco(frmForn.nomeEnderecoForn, frmForn.tipoEnderecoForn, frmForn.tipoLogradouroForn, 
					frmForn.tipoResidenciaForn, frmForn.logradouroForn, frmForn.numeroEnderecoForn, frmForn.bairro, frmForn.cepForn, 
					cidadeWhile, frmForn.observacoes);
			
//			Endereco endereco = new Endereco(nomeEnderecoForn, tipoEnderecoForn, tipoLogradouroForn, 
//					tipoResidenciaForn, logradouroForn, numeroEnderecoForn, bairro, cepForn, cidade, observacoes); 
			
			System.out.print("Digite o tipo de endereço (cobrança ou entrega): ");		
			enderecoWhile.setTipoEnd(sc.next());
			
			System.out.print("Digite o nome do endereço (uma frase curta para identificar o endereço): ");		
			enderecoWhile.setNomeEnd(sc.next());
			
			System.out.print("Digite o tipo de residência (casa, apartamento etc): ");		
			enderecoWhile.setTipoResid(sc.next());
			
			System.out.print("Digite o tipo de logradouro (rua, avenida, estrada etc): ");		
			enderecoWhile.setTipoLogr(sc.next());
		
			System.out.print("Digite o logradouro: ");		
			enderecoWhile.setLogradouroEnd(sc.next());
			
			System.out.print("Digite o numero da residência: ");		
			enderecoWhile.setNumeroEnd(sc.nextInt());
		
			System.out.print("Digite o CEP: ");		
			enderecoWhile.setCepEnd(sc.next());
		
			System.out.print("Digite o bairro: ");		
			enderecoWhile.setBairroEnd(sc.next());
	
	//CIDADE, ESTADO, PAIS
			System.out.print("Digite a cidade: ");		
			cidadeWhile.setDescricao(sc.next());
		
			System.out.print("Digite o estado: ");		
			estadoWhile.setDescricao(sc.next());
		
			System.out.print("Digite o país: ");		
			paisWhile.setDescricao(sc.next());
			
			System.out.print("Digite observações sobre o endereço: ");		
			enderecoWhile.setObservacoesEnd(sc.next());
			
					
			frmForn.enderecosFornecedor.add(enderecoWhile);
			
			System.out.print("Deseja cadastrar outro ENDEREÇO? ('N' ou 'n' para não)");		
			resposta = sc.next();
		}
		
		
		
//		System.out.print("Digite o tipo de endereço (cobrança ou entrega): ");		
//		frmForn.tipoEnderecoForn = sc.next();
//		
//		System.out.print("Digite o nome do endereço (uma frase curta para identificar o endereço): ");		
//		frmForn.nomeEnderecoForn = sc.next();
//		
//		System.out.print("Digite o tipo de residência (casa, apartamento etc): ");		
//		frmForn.tipoResidenciaForn = sc.next();
//		
//		System.out.print("Digite o tipo de logradouro (rua, avenida, estrada etc): ");		
//		frmForn.tipoLogradouroForn = sc.next();
//	
//		System.out.print("Digite o logradouro: ");		
//		frmForn.logradouroForn= sc.next();
//		
//		System.out.print("Digite o numero da residência: ");		
//		frmForn.numeroEnderecoForn = sc.nextInt();
//	
//		System.out.print("Digite o CEP: ");		
//		frmForn.cepForn = sc.next();
//	
//		System.out.print("Digite o bairro: ");		
//		frmForn.bairro = sc.next();
//
////CIDADE, ESTADO, PAIS
//		System.out.print("Digite a cidade: ");		
//		frmForn.cidadeForn = sc.next();
//	
//		System.out.print("Digite o estado: ");		
//		frmForn.estadoForn = sc.next();
//	
//		System.out.print("Digite o país: ");		
//		frmForn.paisForn = sc.next();
//		
//		System.out.print("Digite observações sobre o endereço: ");		
//		frmForn.observacoes = sc.next();
		
		
	
//TELEFONE
//********************************************************************************//
// PROBLEMA: preencher um array em tempo de execução, com informações de telefone,//
//			produto e endereço sem quantidade especificada						  //
//																				  //
//								RESOLVIDO!!!									  //
//********************************************************************************//	
		
		resposta = "";
		
		while(!resposta.equalsIgnoreCase("n"))  {
			Telefone telefoneWhile = new Telefone(frmForn.tipoTelefoneForn, frmForn.dddTelefoneForn, frmForn.telefoneForn);
			
			System.out.print("Digite o tipo de telefone (residencial, celular, comercial etc): ");		
			telefoneWhile.setTipoTelefone(sc.next());
			
			System.out.print("Digite o ddd: ");		
			telefoneWhile.setDddTelefone(sc.next());
		
			System.out.print("Digite o telefone: ");		
			telefoneWhile.setNumeroTelefone(sc.next());
					
			frmForn.telefonesFornecedor.add(telefoneWhile);
			
			System.out.print("Deseja cadastrar outro TELEFONE? ('N' ou 'n' para não ");		
			resposta = sc.next();
		}
						
		System.out.print("Digite o email: ");		
		frmForn.emailForn = sc.next();

//		System.out.print("Digite os codigos dos produtos do fornecedor: ");		
//		frmForn.codProdForn = sc.nextInt();
//
//		System.out.print("Digite o produto padrão: ");		
//		frmForn.produtoPadraoForn = sc.next();
//				
//		System.out.print("Digite o ranking do fornecedor: ");		
//		frmForn.rankingForn = sc.nextDouble();
//
//		System.out.print("Digite a bandeira do cartão: ");		
//		frmForn.bandeiraCartao = sc.next();
//		
//		System.out.print("Digite o numero do cartão: ");		
//		frmForn.numeroCartao = sc.next();
//		
//		System.out.print("Digite o nome do titular do cartão: ");		
//		frmForn.nomeCartao = sc.next();
//		
//		System.out.print("Digite o código de segurança do cartão: ");		
//		frmForn.codSegCartao = sc.nextInt();
//
//		System.out.print("Digite o senha: ");		
//		frmForn.senhaForn = sc.next();
//		
//		System.out.print("Confirme sua senha: ");		
//		frmForn.confirmacaoSenhaForn = sc.next();
		
		Fornecedor fornecedor = frmForn.definirFornecedor();
		
		IFachada fachada = new FachadaFornecedor();
		fachada.salvar(fornecedor);
		
	}
		
	
		private Fornecedor definirFornecedor() {
		
//			Pais pais = new Pais(paisForn);
//			Estado estado = new Estado(estadoForn, pais);
//			Cidade cidade = new Cidade(cidadeForn, estado);
//			
//			Endereco endereco = new Endereco(nomeEnderecoForn, tipoEnderecoForn, tipoLogradouroForn, 
//					tipoResidenciaForn, logradouroForn, numeroEnderecoForn, bairro, cepForn, cidade, observacoes); 
			
			Cartao cartao = new Cartao(numeroCartao, nomeCartao, bandeiraCartao, codSegCartao);

//			
//			Produto produto = new Produto(codProdForn, produtoPadraoForn);
					
			Fornecedor fornecedor = new Fornecedor(nomeForn, cpfForn, generoForn, dataNascForn, enderecosFornecedor, 
					emailForn, rankingForn, senhaForn, confirmacaoSenhaForn, cartao, telefonesFornecedor );			
							
			return fornecedor;
		}



}



