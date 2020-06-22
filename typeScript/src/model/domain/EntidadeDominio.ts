import * as moment from "moment";

export class EntidadeDominio {

    private id: number
    private dtCadastro: moment.Moment

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDtCadastro(): moment.Moment {
        return this.dtCadastro;
    }

    public setDtCadastro(dtCadastro: moment.Moment): void {
        this.dtCadastro = dtCadastro;
    }

}