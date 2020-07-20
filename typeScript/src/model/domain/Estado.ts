import {Pais} from "./Pais";

export class Estado {
    constructor(
        private id: number,
        private  siglaEstado: string,
        private  descricaoEstado: string,
        private  paisEstado: Pais
    ) {
    }

    /*public Estado(descricao: string): void {
        this.descricaoEstado = descricao;
    }*/

    public estado(descricao: string, pais: Pais): void {
        this.descricaoEstado = descricao;
        this.paisEstado = pais;
    }

    public getId(): number {
        return this.id;
    }

    public setId(sigla: number): void {
        this.id = sigla;
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

    public setDescricao(descricao: string): void {
        this.descricaoEstado = descricao;
    }

    public getPais(): Pais {
        return this.paisEstado;
    }

    public setPais(pais: Pais): void {
        this.paisEstado = pais;
    }
}


