import {Estado} from "./Estado";

export class Cidade {
    constructor(
        private descricao: string,
        private estado: Estado
    ) {
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getEstado(): Estado {
        return this.estado;
    }

    public setEstado(estado: Estado): void {
        this.estado = estado;
    }
}


