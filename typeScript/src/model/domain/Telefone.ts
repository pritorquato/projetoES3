import {EntidadeDominio} from "./EntidadeDominio";
import {Fornecedor} from "./Fornecedor";

export class Telefone extends EntidadeDominio {
    constructor(
        private tipoTelefone: string,
        private dddTelefone: string,
        private numeroTelefone: string,
        private fornecedorId: string
    ) {
        super();
    }

    public setFornecedorId(id: string) {
        this.fornecedorId = id
    }

    public getFornecedorId() {
        return this.fornecedorId
    }

    getTipoTelefone(): string {
        return this.tipoTelefone;
    }

    setTipoTelefone(value: string) {
        this.tipoTelefone = value;
    }

    getDddTelefone(): string {
        return this.dddTelefone;
    }

    setDddTelefone(value: string) {
        this.dddTelefone = value;
    }

    getNumeroTelefone(): string {
        return this.numeroTelefone;
    }

    setNumeroTelefone(value: string) {
        this.numeroTelefone = value;
    }


}