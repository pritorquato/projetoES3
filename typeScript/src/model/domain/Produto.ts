import {EntidadeDominio} from "./EntidadeDominio";

export class Produto extends EntidadeDominio {

    private codProd: number = 0;
//	private Endereco enderecoEntrega;
    private produtoPadrao: boolean = false;


    public Produto(codProd: number, produtoPadrao: boolean) {
        this.codProd = codProd;
        this.produtoPadrao = produtoPadrao;
    }

    public getCodProd(): number {
        return this.codProd;
    }

    public setCodProd(codProd: number): void {
        this.codProd = codProd;
    }

//	public Endereco getEnderecoEntrega() {
//		return enderecoEntrega;
//	}
//	public void setEnderecoEntrega(Endereco enderecoEntrega) {
//		this.enderecoEntrega = enderecoEntrega;
//	}
    public isProdutoPadrao(): boolean {
        return this.produtoPadrao;
    }

    public setProdutoPadrao(produtoPadrao: boolean): void {
        this.produtoPadrao = produtoPadrao;
    }

}