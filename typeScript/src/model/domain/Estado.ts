import {Pais} from "./Pais";

export class Estado {
    constructor(
        private  siglaEstado: string,
        private  descricaoEstado: string,
        private  paisEstado: Pais
    ) {
    }

    /*public Estado(descricao: string): void {
        this.descricaoEstado = descricao;
    }*/

    public Estado(descricao: string, pais: Pais): void {
        this.descricaoEstado = descricao;
        this.paisEstado = pais;
    }

    public getSigla(): string {
        return this.siglaEstado;
    }

    public setSigla(sigla: string): void {
        this.siglaEstado = sigla;
    }

    public getDescricao(): string {
        return this.descricaoEstado;
    }

    public setDescricao(descricao): void {
        this.descricaoEstado = descricao;
    }

    public getPais(): Pais {
        return this.paisEstado;
    }

    public setPais(pais: Pais): void {
        this.paisEstado = pais;
    }
}


