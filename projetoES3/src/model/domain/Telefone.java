package model.domain;

public class Telefone extends EntidadeDominio{

	private String tipoTelefone;
	private String dddTelefone;
	private String numeroTelefone;
	
	public Telefone(String tipoTelefone, String dddTelefone, String numeroTelefone) {
		this.tipoTelefone = tipoTelefone;
		this.dddTelefone = dddTelefone;
		this.numeroTelefone = numeroTelefone;
	}

	public String getTipoTelefone() {
		return tipoTelefone;
	}

	public void setTipoTelefone(String tipoTelefone) {
		this.tipoTelefone = tipoTelefone;
	}

	public String getDddTelefone() {
		return dddTelefone;
	}

	public void setDddTelefone(String dddTelefone) {
		this.dddTelefone = dddTelefone;
	}

	public String getNumeroTelefone() {
		return numeroTelefone;
	}

	public void setNumeroTelefone(String numeroTelefone) {
		this.numeroTelefone = numeroTelefone;
	}

	
	

}
