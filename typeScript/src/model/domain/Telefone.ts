import {TipoTelefone} from "./TipoTelefone";

export class Telefone {
    private _tipoTelefone: TipoTelefone;
    private _dddTelefone: string;
    private _numeroTelefone: string;
    
    get tipoTelefone(): TipoTelefone {
        return this._tipoTelefone;
    }

    set tipoTelefone(value: TipoTelefone) {
        this._tipoTelefone = value;
    }

    get dddTelefone(): string {
        return this._dddTelefone;
    }

    set dddTelefone(value: string) {
        this._dddTelefone = value;
    }

    get numeroTelefone(): string {
        return this._numeroTelefone;
    }

    set numeroTelefone(value: string) {
        this._numeroTelefone = value;
    }



}