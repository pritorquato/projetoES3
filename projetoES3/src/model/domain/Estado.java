package model.domain;

public class Estado {

	private String siglaEstado;
	private String descricaoEstado;
	private Pais paisEstado;

	public Estado(String sigla, String descricao, Pais pais) {
		this.siglaEstado = sigla;
		this.descricaoEstado = descricao;
		this.paisEstado = pais;
	}
	
	
	public Estado() {	
	}
	
	public Estado(String descricao) {	
		this.descricaoEstado = descricao;
	}
	
	public Estado(String descricao, Pais pais) {	
		this.descricaoEstado = descricao;
		this.paisEstado = pais;
	}

	public String getSigla() {
		return siglaEstado;
	}

	public void setSigla(String sigla) {
		this.siglaEstado = sigla;
	}

	public String getDescricao() {
		return descricaoEstado;
	}

	public void setDescricao(String descricao) {
		this.descricaoEstado = descricao;
	}
	
	public Pais getPais() {
		return paisEstado;
	}

	public void setPais(Pais pais) {
		this.paisEstado = pais;
	}
}
