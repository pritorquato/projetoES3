package model.domain;

public class Endereco extends EntidadeDominio{

	private String nomeEnd;
	private String tipoEnd;
	private String tipoLogr;
	private String tipoResid;
	private String logradouroEnd;
	private int numeroEnd;
	private String bairroEnd;
	private String cepEnd;
	private Cidade cidadeEnd;
	private String observacoesEnd;
	//private int fornecedorId;

	public Endereco(String nomeEnd, String tipoEnd, String tipoLogr, 
			String tipoResid, String logradouroEnd, int numeroEnd, String bairroEnd,
			String cepEnd, Cidade cidadeEnd, String observacoesEnd) {
		this.nomeEnd = nomeEnd;
		this.tipoEnd = tipoEnd;
		this.tipoLogr = tipoLogr;
		this.tipoResid = tipoResid;
		this.logradouroEnd = logradouroEnd;
		this.numeroEnd = numeroEnd;
		this.bairroEnd = bairroEnd;
		this.cepEnd = cepEnd;
		this.cidadeEnd  = cidadeEnd;
		this.observacoesEnd = observacoesEnd;
//		this.fornecedorId = fornecedorId;
	}

	
	public boolean validarEndereco() {
		System.out.println("ENDEREÇO OK!");
		return true;
	}
	
	public String getNomeEnd() {
		return nomeEnd;
	}

	public void setNomeEnd(String nomeEnd) {
		this.nomeEnd = nomeEnd;
	}

	public String getTipoEnd() {
		return tipoEnd;
	}

	public void setTipoEnd(String tipoEnd) {
		this.tipoEnd = tipoEnd;
	}

	public String getTipoLogr() {
		return tipoLogr;
	}

	public void setTipoLogr(String tipoLogr) {
		this.tipoLogr = tipoLogr;
	}

	public String getTipoResid() {
		return tipoResid;
	}

	public void setTipoResid(String tipoResid) {
		this.tipoResid = tipoResid;
	}

	public String getLogradouroEnd() {
		return logradouroEnd;
	}

	public void setLogradouroEnd(String logradouroEnd) {
		this.logradouroEnd = logradouroEnd;
	}

	public int getNumeroEnd() {
		return numeroEnd;
	}

	public void setNumeroEnd(int numeroEnd) {
		this.numeroEnd = numeroEnd;
	}

	public String getBairroEnd() {
		return bairroEnd;
	}

	public void setBairroEnd(String bairroEnd) {
		this.bairroEnd = bairroEnd;
	}

	public String getCepEnd() {
		return cepEnd;
	}

	public void setCepEnd(String cepEnd) {
		this.cepEnd = cepEnd;
	}

	public Cidade getCidadeEnd() {
		return cidadeEnd;
	}

	public void setCidadeEnd(Cidade cidadeEnd) {
		this.cidadeEnd = cidadeEnd;
	}
	
	public String getObservacoesEnd() {
		return observacoesEnd;
	}

	public void setObservacoesEnd(String observacoesEnd) {
		this.observacoesEnd = observacoesEnd;
	}

//
//	public int getFornecedorId() {
//		return fornecedorId;
//	}
//
//
//	public void setFornecedorId(int fornecedorId) {
//		this.fornecedorId = fornecedorId;
//	}

	
	
	
}
