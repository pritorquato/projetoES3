package model.domain;

public class Estado {

	private String siglaEstado;
	private String descricaoEstado;

	public Estado(String sigla, String descricao) {
		this.siglaEstado = sigla;
		this.descricaoEstado = descricao;
	}
	
	public Estado() {	
	}
	
	public Estado(String descricao) {	
		this.descricaoEstado = descricao;
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
}
