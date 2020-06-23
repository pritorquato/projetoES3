package model.domain;

import java.util.List;

public class Fornecedor extends EntidadeDominio {

	private String nomeForn;
	private Produto produtosForn;
	private Produto produtoPadraoForn;
	private String generoForn;
	private String dataNascForn;
	private String cpfForn;
	private String emailForn;
	private double rankingForn;
	private String senhaForn;
	private String confirmacaoSenhaForn;
	private Cartao cartao;
	private List<Telefone> telefones;
	private List<Endereco> enderecos;


	public Fornecedor(String nomeForn, String cpfForn, String generoForn, String dataNascForn, 
			List<Endereco> enderecos, String emailForn, double rankingForn, String senhaForn, 
			String confirmacaoSenhaForn, Cartao cartao, List<Telefone> telefones) {
		this.nomeForn = nomeForn;
		this.cpfForn = cpfForn;
		this.generoForn = generoForn; 
		this.dataNascForn = dataNascForn;
		this.emailForn = emailForn; 
		this.rankingForn = rankingForn; 
		this.senhaForn = senhaForn;
		this.confirmacaoSenhaForn = confirmacaoSenhaForn;
		this.cartao = cartao;
		this.telefones = telefones;
		this.enderecos = enderecos;
	}

	public boolean validarCpf() {
		System.out.println("CPF OK!");
		return true;
	}
	
	public boolean validarDadosObrigatorios() {
		if(enderecos.validarEndereco()) {
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

	public List<Telefone> getTelefones() {
		return telefones;
	}

	public void setTelefones(List<Telefone> telefones) {
		this.telefones = telefones;
	}

	public List<Endereco> getEnderecos() {
		return enderecos;
	}

	public void setEnderecos(List<Endereco> enderecos) {
		this.enderecos = enderecos;
	}	
	
	
	
}
