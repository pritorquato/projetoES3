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

	private int codForn;
	private String nomeForn;
	private String cpfForn;
	private String generoForn;
	private String dataNascForn;
	private int idEnd;
	private String tipoEnderecoForn; //tipoEndere�o: cobran�a ou entrega
	private String nomeEnderecoForn; //frase curta
	private String tipoResidenciaForn; //tipoResidencia: casa, apto, galp�o
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
		
		System.out.print("Digite o nome do fornecedor: ");		
		frmForn.nomeForn = sc.next();		
		
		System.out.print("Digite o cpf: ");		
		frmForn.cpfForn = sc.next();
				
		System.out.print("Digite o data de nascimento (dd/mm/aaaa): ");		
		frmForn.dataNascForn = sc.next();

		System.out.print("Digite o g�nero do fornecedor: ");		
		frmForn.generoForn = sc.next();
		
//ENDERE�O
		System.out.print("Digite o tipo de endere�o (cobran�a ou entrega): ");		
		frmForn.tipoEnderecoForn = sc.next();
		
		System.out.print("Digite o nome do endere�o: ");		
		frmForn.nomeEnderecoForn = sc.next();
		
		System.out.print("Digite o tipo de resid�ncia (casa, apartamento etc): ");		
		frmForn.tipoResidenciaForn = sc.next();
		
		System.out.print("Digite o tipo de logradouro (rua, avenida, estrada etc): ");		
		frmForn.tipoLogradouroForn = sc.next();
	
		System.out.print("Digite o logradouro: ");		
		frmForn.logradouroForn= sc.next();
		
		System.out.print("Digite o numero da resid�ncia: ");		
		frmForn.numeroEnderecoForn = sc.nextInt();
	
		System.out.print("Digite o CEP: ");		
		frmForn.cepForn = sc.next();
	
		System.out.print("Digite o bairro: ");		
		frmForn.bairro = sc.next();

//CIDADE, ESTADO, PAIS
		System.out.print("Digite a cidade: ");		
		frmForn.cidadeForn = sc.next();
	
		System.out.print("Digite o estado: ");		
		frmForn.estadoForn = sc.next();
	
		System.out.print("Digite o pa�s: ");		
		frmForn.paisForn = sc.next();
		
		System.out.print("Digite observa��es sobre o endere�o (opcional): ");		
		frmForn.observacoes = sc.next();
	
//TELEFONE
//********************************************************************************//
// PROBLEMA: preencher um array em tempo de execu��o, com informa��es de telefone,//
//			produto e endere�o sem quantidade especificada						  //
//********************************************************************************//	
//		
//		List<Telefone> telefones = new ArrayList<Telefone>();
//		while(  )  {
//			Telefone telefone = new Telefone( frmForn.tipoTelefoneForn, frmForn.dddTelefoneForn, frmForn.telefoneForn);
//			
//			System.out.println("Informa��es sobre telefones, a qualquer momento digite  #  para sair.");
//			System.out.print("Digite o tipo de telefone (residencial, celular, comercial etc): ");		
//			frmForn.tipoTelefoneForn = sc.next();
//			
//			System.out.print("Digite o ddd: ");		
//			frmForn.dddTelefoneForn = sc.next();
//		
//			System.out.print("Digite o telefone: ");		
//			frmForn.telefoneForn = sc.next();
//					
//			telefones.add(telefone);		
//						
//		}
//			

		
		 

		System.out.print("Digite o email: ");		
		frmForn.emailForn = sc.next();

		System.out.print("Digite os codigos dos produtos do fornecedor: ");		
		frmForn.codProdForn = sc.nextInt();

//		System.out.print("Digite o produto padr�o: ");		
//		frmForn.produtoPadraoForn = sc.next();
				
		System.out.print("Digite o ranking do fornecedor: ");		
		frmForn.rankingForn = sc.nextDouble();

		System.out.print("Digite a bandeira do cart�o: ");		
		frmForn.bandeiraCartao = sc.next();
		
		System.out.print("Digite o numero do cart�o: ");		
		frmForn.numeroCartao = sc.next();
		
		System.out.print("Digite o nome do titular do cart�o: ");		
		frmForn.nomeCartao = sc.next();
		
		System.out.print("Digite o c�digo de seguran�a do cart�o: ");		
		frmForn.codSegCartao = sc.nextInt();

		System.out.print("Digite o senha: ");		
		frmForn.senhaForn = sc.next();
		
		System.out.print("Confirme sua senha: ");		
		frmForn.confirmacaoSenhaForn = sc.next();
		
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
			
			Telefone telefone = new Telefone(tipoTelefoneForn, dddTelefoneForn, telefoneForn);

//			Produto produto = new Produto(codProdForn, produtoPadraoForn);
					
			Fornecedor fornecedor = new Fornecedor(nomeForn, cpfForn, generoForn, dataNascForn, endereco, telefone, 
					emailForn, rankingForn, senhaForn, confirmacaoSenhaForn, cartao);			
							
			return fornecedor;
		}



}



