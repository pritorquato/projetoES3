import {EntidadeDominio} from "./EntidadeDominio";
import {Produto} from "./Produto";
import * as moment from "moment";
import {Endereco} from "./Endereco";
import {Telefone} from "./Telefone";
import {Cartao} from "./Cartao";

export class Fornecedor extends EntidadeDominio {

    private codForn: number;
    private nomeForn: string;
    private enderecoForn: Endereco[];
    private produtosForn: Produto[];
    private produtoPadraoForn: Produto;
    private generoForn: string;
    private senhaForn: string;
    private confirmacaoSenhaForn: string;
    private dataNascForn: moment.Moment;
    private cpfForn: string;
    private telefoneForn: Telefone;
    private emailForn: string;
    private rankingForn: number;


    public Fornecedor(nomeForn: string, cpfForn: string, generoForn: string, dataNascForn: moment.Moment,
                      endereco: Endereco, telefone: Telefone, emailForn: string, rankingForn: number, senhaForn: string,
                      confirmacaoSenhaForn: string, cartao: Cartao) {

        this.nomeForn = nomeForn;
        this.cpfForn = cpfForn;
        this.generoForn = generoForn;
        this.dataNascForn = dataNascForn;
//		Endereco endereco =
//		Telefone telefone,
        this.emailForn = emailForn;
        this.rankingForn = rankingForn;
        this.senhaForn = senhaForn;
        this.confirmacaoSenhaForn = confirmacaoSenhaForn;
        //Cartao cartao

    }


}