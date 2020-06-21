package model.domain;
public class Pais extends EntidadeDominio {

	private String siglaPais;
	private String descricaoPais;


	public Pais(String sigla, String descricao) {
		this.siglaPais = sigla;
		this.descricaoPais = descricao;
	}
	
	public Pais() {	
	}
	
	public Pais(String descricao) {	
		this.descricaoPais = descricao;
	}

	public String getSigla() {
		return siglaPais;
	}

	public void setSigla(String sigla) {
		this.siglaPais = sigla;
	}

	public String getDescricao() {
		return descricaoPais;
	}

	public void setDescricao(String descricao) {
		this.descricaoPais = descricao;
	}
}