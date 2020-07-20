import {EntidadeDominio} from "./EntidadeDominio";

export class Produto extends EntidadeDominio {

    constructor(
        private descricao: string,
    ) {
        super();
    }

    public getDescricao(): string {
        return this.descricao
    }

    public setDescricao(descricao: string) {
        this.descricao = descricao;
    }
}