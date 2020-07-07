import {EntidadeDominio} from "./EntidadeDominio";
import {Fornecedor} from "./Fornecedor";

export class Cartao extends EntidadeDominio{

    constructor(
        private numeroCartao: string,
        private nomeCartao: string,
        private bandeiraCartao: string,
        private codigoSegCartao: number,
        private fornecedorId: string
    ) {super();}


    public getfornecedorId(): string {
        return this.fornecedorId;
    }

    public setfornecedorId(fornecedorId: string): void {
        this.fornecedorId = fornecedorId;
    }
    public getNumeroCartao(): string {
        return this.numeroCartao;
    }

    public setNumeroCartao(numeroCartao: string): void {
        this.numeroCartao = numeroCartao;
    }

    public getNomeCartao(): string {
        return this.nomeCartao;
    }

    public setNomeCartao(nomeCartao: string): void {
        this.nomeCartao = nomeCartao;
    }

    public getBandeiraCartao() {
        return this.bandeiraCartao;
    }

    public setBandeiraCartao(bandeiraCartao: string): void {
        this.bandeiraCartao = bandeiraCartao;
    }

    public getCodigoSegCartao(): number {
        return this.codigoSegCartao;
    }

    public setCodigoSegCartao(codigoSegCartao: number) {
        this.codigoSegCartao = codigoSegCartao;
    }
}