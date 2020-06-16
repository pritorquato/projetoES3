package view;

import javax.swing.*;

public class FormFornecedor{

	private JTextField txtNome;
	private JTextField txtDataNasc;
	private JTextField txtCpf;
	private JTextField txtGenero;
	private JTextField txtNomeEndereco;
	private JTextField txtLogradouro;
	private JTextField txtNumero;
	private JTextField txtCep;
	private JTextField txtTelefone;
	private JTextField txtDddTelefone;
	private JTextField txtRanking;
	private JTextField txtSenha;
	private JTextField txtConfirmacaoSenha;
	private JTextField txtNumeroCartao;
	private JTextField txtNomeCartao;
	private JTextField txtCodSegCartao;
	private JList cbTipoEndereco;
	private JList cbTipoResidencia;
	private JList cbTipoLogradouro;
	private JList cbBairro;
	private JList cbCidade;
	private JList cbEstado;
	private JList cbPais;
	private JList cbTipoTelefone;
	private JList cbProduto;
	private JList cbBandeiraCartao;
	private JButton btAdicionarEndereco;
	private JButton btAdicionarCartao;
	private JButton btAdicionarTelefone;
	private JButton btSalvar;

	
	public void gerarLog() {

	}

	public void cadastrar(Fornecedor fornecedor) {

	}

	private Fornecedor definirFornecedor() {
		return null;
	}

}


private String nome;
private String cpf;
private double credito;
private char sexo; 
private String logradouro;
private String cep;
private String complemento;
private String numero;
private String nmCidade;
private String nmEstado;
private String parent1;
private String parent2;
private String nmDep1;
private String nmDep2;



public static void main(String[] args) {
	FormCliente frmCli = new FormCliente();
	
	Scanner sc = new Scanner(System.in);		
	
	System.out.print("Digite o nome: ");		
	frmCli.nome = sc.next();		
	
	System.out.print("Digite o cpf: ");		
	frmCli.cpf = sc.next();
	
	System.out.print("Digite o crédito: ");		
	frmCli.credito = sc.nextDouble();
	
	System.out.print("Digite o sexo: ");		
	frmCli.sexo = sc.next().charAt(0);
	
	System.out.print("Digite o logradouro: ");		
	frmCli.logradouro = sc.next();
	
	System.out.print("Digite o cep: ");		
	frmCli.cep = sc.next();
	
	System.out.print("Digite o complemento: ");		
	frmCli.complemento = sc.next();
	
	System.out.print("Digite o numero: ");		
	frmCli.numero = sc.next();
	
	System.out.print("Digite o cidade: ");		
	frmCli.nmCidade = sc.next();
	
	System.out.print("Digite o estado: ");		
	frmCli.nmEstado = sc.next();
	
	System.out.print("Digite o partensco do primeiro dependente: ");		
	frmCli.parent1 = sc.next();
	
	System.out.print("Digite o nome do primeiro dependnete: ");		
	frmCli.nmDep1 = sc.next();
	
	System.out.print("Digite o partensco do segundo dependente: ");		
	frmCli.parent2 = sc.next();
	
	System.out.print("Digite o nome do segundo dependnete: ");		
	frmCli.nmDep2 = sc.next();
