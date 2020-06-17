package model.domain;

import java.util.Date;

public class Fornecedor extends EntidadeDominio {

	private int codForn;	
	private String nomeForn;
	private Endereco[] enderecoForn;
	private Produto[] produtosForn;
	private Produto produtoPadraoForn;
	private String generoForn;

	private Date dataNascForn;
	private String cpfForn;
	private Telefone telefoneForn;
	private String emailForn;
	private double rankingForn;


	public Fornecedor(String nomeForn, String cpfForn, String generoForn, Date dataNascForn, 
			Endereco endereco, Telefone telefone, String emailForn, double rankingForn, String senhaForn, 
			String confirmacaoSenhaForn, Cartao cartao) {
		
		this.nomeForn = nomeForn;
		this.cpfForn = cpfForn;
		this.generoForn = generoForn; 
		this.dataNascForn = dataNascForn;
//		Endereco endereco = 
//		Telefone telefone, 
		this.emailForn = emailForn; 
		this.rankingForn = rankingForn; 
		this.senhaForn = senhaForn;
		this.confirmacaoSenhaForn = confirmacaoSenhaForn;
		//Cartao cartao

	}
	
	
}
