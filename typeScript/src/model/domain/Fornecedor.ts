import {EntidadeDominio} from "./EntidadeDominio";
import {Endereco} from "./Endereco";
import {Telefone} from "./Telefone";
import {Cartao} from "./Cartao";

export class Fornecedor extends EntidadeDominio {
    constructor(
        private nomeForn: string,
        private produtoPadraoForn: string,
        private generoForn: string,
        private senhaForn: string,
        private dataNascForn: string,
        private cpfForn: string,
        private emailForn: string,
        private rankingForn: string,
        private cartaoForn: Cartao[],
        private telefoneForn: Telefone[],
        private enderecoForn: Endereco[],
        private produtosForn: string[],
    ) {
        super();
    }

    private status_ativo: boolean = true


    /*public Fornecedor(nomeForn: string, cpfForn: string, generoForn: string, dataNascForn: string,
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

    }*/

    getProdutos() {
        return this.produtosForn;
    }

    addProduto(produto: string) {
        this.produtosForn.push(produto);
    }

    getCartoes() {
        return this.cartaoForn;
    }

    addCartao(cartao: Cartao) {
        this.cartaoForn.push(cartao);
    }

    getTelefones() {
        return this.telefoneForn;
    }

    addTelefones(telefones: Telefone) {
        this.telefoneForn.push(telefones);
    }

    getEnderecos() {
        return this.enderecoForn;
    }

    addEnderecos(endereco: Endereco) {
        this.enderecoForn.push(endereco);
    }

    clearEnderecos() {
        this.enderecoForn = []
    }

    getName() {
        return this.nomeForn
    }

    getCpf() {
        return this.cpfForn
    }

    getData() {
        return this.dataNascForn
    }

    getSenha() {
        return this.senhaForn
    }

    getGenero() {
        return this.generoForn
    }

    getProdutoPad() {
        return this.produtoPadraoForn
    }

    getEmail() {
        return this.emailForn
    }

    getRank() {
        return this.rankingForn
    }

    getStatus() {
        return this.status_ativo
    }

    setStatus(status: boolean): void {
        this.status_ativo = status;
    }
}