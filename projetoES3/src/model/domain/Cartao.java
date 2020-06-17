package model.domain;
public class Cartao {

	private String numeroCartao;
	private String nomeCartao;
	private String bandeiraCartao;
	private int codigoSegCartao;

	public Cartao(String numeroCartao, String nomeCartao, String bandeiraCartao, int codigoSegCartao) {
		this.numeroCartao = numeroCartao;
		this.nomeCartao = nomeCartao;
		this.bandeiraCartao = bandeiraCartao;
		this.codigoSegCartao = codigoSegCartao;
	}

	public String getNumeroCartao() {
		return numeroCartao;
	}

	public void setNumeroCartao(String numeroCartao) {
		this.numeroCartao = numeroCartao;
	}

	public String getNomeCartao() {
		return nomeCartao;
	}

	public void setNomeCartao(String nomeCartao) {
		this.nomeCartao = nomeCartao;
	}

	public String getBandeiraCartao() {
		return bandeiraCartao;
	}

	public void setBandeiraCartao(String bandeiraCartao) {
		this.bandeiraCartao = bandeiraCartao;
	}

	public int getCodigoSegCartao() {
		return codigoSegCartao;
	}

	public void setCodigoSegCartao(int codigoSegCartao) {
		this.codigoSegCartao = codigoSegCartao;
	}

	
}
