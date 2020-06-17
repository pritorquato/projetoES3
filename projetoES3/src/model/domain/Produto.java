package model.domain;
public class Produto extends EntidadeDominio{

	private int codProd;
//	private Endereco enderecoEntrega;
	private boolean produtoPadrao = false;
	
	

	public Produto(int codProd, boolean produtoPadrao) {
		this.codProd = codProd;
		this.produtoPadrao = produtoPadrao;
	}

	
	
	public int getCodProd() {
		return codProd;
	}
	public void setCodProd(int codProd) {
		this.codProd = codProd;
	}
//	public Endereco getEnderecoEntrega() {
//		return enderecoEntrega;
//	}
//	public void setEnderecoEntrega(Endereco enderecoEntrega) {
//		this.enderecoEntrega = enderecoEntrega;
//	}
	public boolean isProdutoPadrao() {
		return produtoPadrao;
	}
	public void setProdutoPadrao(boolean produtoPadrao) {
		this.produtoPadrao = produtoPadrao;
	}
	
	

}
