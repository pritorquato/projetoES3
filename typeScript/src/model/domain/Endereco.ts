import {EntidadeDominio} from "./EntidadeDominio";
import {Cidade} from "./Cidade";
import {Fornecedor} from "./Fornecedor";

export class Endereco extends EntidadeDominio {
    constructor(
        private nomeEnd: string,
        private  tipoEnd: string,
        private  tipoLogr: string,
        private  tipoResid: string,
        private  logradouroEnd: string,
        private  numeroEnd: number,
        private  bairroEnd: string,
        private  cepEnd: string,
        private  cidadeEnd: number,
        private observacoesEnd: string,
    ) {
        super();
    }

    public getNomeEnd(): string {
        return this.nomeEnd;
    }

    public setNomeEnd(nomeEnd: string): void {
        this.nomeEnd = nomeEnd;
    }

    public getTipoEnd(): string {
        return this.tipoEnd;
    }

    public setTipoEnd(tipoEnd: string): void {
        this.tipoEnd = tipoEnd;
    }

    public getTipoLogr(): string {
        return this.tipoLogr;
    }

    public setTipoLogr(tipoLogr: string): void {
        this.tipoLogr = tipoLogr;
    }

    public getTipoResid(): string {
        return this.tipoResid;
    }

    public setTipoResid(tipoResid: string): void {
        this.tipoResid = tipoResid;
    }

    public getLogradouroEnd(): string {
        return this.logradouroEnd;
    }

    public setLogradouroEnd(logradouroEnd: string): void {
        this.logradouroEnd = logradouroEnd;
    }

    public getNumeroEnd(): number {
        return this.numeroEnd;
    }

    public setNumeroEnd(numeroEnd: number): void {
        this.numeroEnd = numeroEnd;
    }

    public getBairroEnd(): string {
        return this.bairroEnd;
    }

    public setBairroEnd(bairroEnd: string): void {
        this.bairroEnd = bairroEnd;
    }

    public getCepEnd(): string {
        return this.cepEnd;
    }

    public setCepEnd(cepEnd: string): void {
        this.cepEnd = cepEnd;
    }

    public getCidadeEnd(): number {
        return this.cidadeEnd;
    }

    public setCidadeEnd(cidadeEnd: number): void {
        this.cidadeEnd = cidadeEnd;
    }

    public getObservacoesEnd(): string {
        return this.observacoesEnd;
    }

    public setObservacoesEnd(observacoesEnd: string): void {
        this.observacoesEnd = observacoesEnd;
    }
}

