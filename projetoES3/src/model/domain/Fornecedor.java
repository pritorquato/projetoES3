package model.domain;

import java.util.List;

public class Fornecedor extends EntidadeDominio {

	private String nomeForn;
	private Endereco enderecoForn;
	private Produto produtosForn;
	private Produto produtoPadraoForn;
	private String generoForn;
	private String dataNascForn;
	private String cpfForn;
	private Telefone telefoneForn;
	private String emailForn;
	private double rankingForn;
	private String senhaForn;
	private String confirmacaoSenhaForn;
	private Cartao cartao;


	public Fornecedor(int codForn, String nomeForn, String cpfForn, String generoForn, String dataNascForn, 
			Endereco enderecoForn, Telefone telefoneForn, String emailForn, double rankingForn, String senhaForn, 
			String confirmacaoSenhaForn, Cartao cartao) {
		super(codForn);
		this.nomeForn = nomeForn;
		this.cpfForn = cpfForn;
		this.generoForn = generoForn; 
		this.dataNascForn = dataNascForn;
		this.enderecoForn = enderecoForn;
		this.telefoneForn = telefoneForn; 
		this.emailForn = emailForn; 
		this.rankingForn = rankingForn; 
		this.senhaForn = senhaForn;
		this.confirmacaoSenhaForn = confirmacaoSenhaForn;
		this.cartao = cartao;
	}

	public boolean validarCpf() {
		System.out.println("CPF OK!");
		return true;
	}
	
	public boolean validarDadosObrigatorios() {
		if(enderecoForn.validarEndereco()) {
			System.out.println("DADOS OK!");
			return true;
		}
		return false;		
	}
	
		public boolean validarExistencias() {
		List<Fornecedor> fornecedores = consultar();
		if(fornecedores == null || fornecedores.isEmpty()) {
			System.out.println("EXISTÊNCIA OK!");
			return true;
		}
		return false;
	}
	
	public boolean complementarDtCadastro() {
		System.out.println("DATA OK!");
		return true;
	}
	
	public List<Fornecedor> consultar() {
		System.out.println("CONSULTA REALIZADA...");
		return null;
	}
	
	
	public String getNomeForn() {
		return nomeForn;
	}


	public void setNomeForn(String nomeForn) {
		this.nomeForn = nomeForn;
	}


	public Endereco getEnderecoForn() {
		return enderecoForn;
	}


	public void setEnderecoForn(Endereco enderecoForn) {
		this.enderecoForn = enderecoForn;
	}


	public Produto getProdutosForn() {
		return produtosForn;
	}


	public void setProdutosForn(Produto produtosForn) {
		this.produtosForn = produtosForn;
	}


	public Produto getProdutoPadraoForn() {
		return produtoPadraoForn;
	}


	public void setProdutoPadraoForn(Produto produtoPadraoForn) {
		this.produtoPadraoForn = produtoPadraoForn;
	}


	public String getGeneroForn() {
		return generoForn;
	}


	public void setGeneroForn(String generoForn) {
		this.generoForn = generoForn;
	}


	public String getDataNascForn() {
		return dataNascForn;
	}


	public void setDataNascForn(String dataNascForn) {
		this.dataNascForn = dataNascForn;
	}


	public String getCpfForn() {
		return cpfForn;
	}


	public void setCpfForn(String cpfForn) {
		this.cpfForn = cpfForn;
	}


	public Telefone getTelefoneForn() {
		return telefoneForn;
	}


	public void setTelefoneForn(Telefone telefoneForn) {
		this.telefoneForn = telefoneForn;
	}


	public String getEmailForn() {
		return emailForn;
	}


	public void setEmailForn(String emailForn) {
		this.emailForn = emailForn;
	}


	public double getRankingForn() {
		return rankingForn;
	}


	public void setRankingForn(double rankingForn) {
		this.rankingForn = rankingForn;
	}


	public String getSenhaForn() {
		return senhaForn;
	}


	public void setSenhaForn(String senhaForn) {
		this.senhaForn = senhaForn;
	}


	public String getConfirmacaoSenhaForn() {
		return confirmacaoSenhaForn;
	}


	public void setConfirmacaoSenhaForn(String confirmacaoSenhaForn) {
		this.confirmacaoSenhaForn = confirmacaoSenhaForn;
	}


	public Cartao getCartao() {
		return cartao;
	}


	public void setCartao(Cartao cartao) {
		this.cartao = cartao;
	}
	
	
	
	
}
