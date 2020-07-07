export class Pais {
    constructor(
        private id: number,
        private siglaPais: string,
        private descricaoPais: string
    ) {
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public Pais(descricao: string) {
        this.descricaoPais = descricao;
    }

    public getSigla(): string {
        return this.siglaPais;
    }

    public setSigla(sigla: string): void {
        this.siglaPais = sigla;
    }

    public getDescricao(): string {
        return this.descricaoPais;
    }

    public setDescricao(descricao: string): void {
        this.descricaoPais = descricao;
    }
}


