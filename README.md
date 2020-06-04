# projetoES3
Projeto final de Engenharia de Software 3

# 1. REQUISITOS FUNCIONAIS – FORNECEDORES
### Grupo:   Cadastro de fornecedores - RA PAR (DO PRIMEIRO NOME EM ORDEM ALFABÉTICA) 
| Codigo  |  Nome 	| Descrição 	|
|-	|-	|-	|
|     RF0021    	|     Cadastrar fornecedor    	|     O   sistema deve possibilitar o cadastro de fornecedores.    	|
|     RF0022    	|     Alterar fornecedor    	|     O   sistema deve possibilitar a alteração de dados cadastrais de fornecedores.    	|
|     RF0023    	|     Inativar   cadastro de fornecedor    	|     O   sistema deve possibilitar que fornecedores sejam inativados.    	|
|     RF0024    	|     Consulta   de fornecedores    	|     O   sistema deve possibilitar que um fornecedor seja consultado com base em um   filtro definido pelo usuário. Todos os campos utilizados para identificação   do fornecedor podem ser utilizados como filtro, tanto de forma combinada como   de forma isolada.    	|
|     RF0026    	|     Cadastro de endereços de   entrega    	|     Deve   ser possível associar diversos endereços de entrega ao cadastro de um produto.   Cada cadastro de endereço deve ser identificado com um nome composto de uma   frase curta.     	|
|     RF0027    	|     Cadastro de produtos    	|     Deve   ser possível associar diversos produtos ao cadastro de um fornecedor. Deve   haver um produto configurado como padrão.     	|
|     RF0028    	|     Alteração apenas de senha    	|     O   sistema deve possibilitar que a senha do usuário do fornecedor seja alterada   sem que seja necessária a alteração de todos os dados cadastrais.     	|
# 2. REQUISITOS NÃO FUNCIONAIS - FORNECEDORES
###  Grupo: Geral
| Codigo  |  Nome 	| Descrição 	|
|-	|-	|-	|
|     RNF0011    	|     Tempo de resposta para   consultas    	|     Toda   consulta de usuário deve ter resposta em no máximo 1 segundo.    	|
|     RNF0012    	|     Log de transação     	|     Para   toda operação de escrita (Inserção ou Alteração) deve ser registado data,   hora, usuário responsável além de manter os dados alterados.    	|
|     RNF0031    	|     Senha forte    	|     A   senha cadastrada pelo usuário deve ser composta de pelo menos 8 caracteres,   ter letras maiúsculas e minúsculas além de conter caracteres especiais.    	|
|     RNF0032    	|     Confirmação de senha    	|     O   usuário obrigatoriamente deve digitar duas vezes a mesma senha no momento do   registro da mesma.    	|
|     RNF0033    	|     Senha criptografada    	|     A   senha deve ser criptografada     	|
###   Grupo: Cadastro de fornecedor  
| Codigo  |  Nome 	| Descrição 	|
|-	|-	|-	|
|     RF0034    	|     Alteração apenas de   endereços     	|     O   sistema deve possibilitar que endereços de entrega ou cobrança possam ser   alterados ou adicionados de forma simples sem a necessidade da edição dos   demais dados cadastrais.     	|
|     RNF0035    	|     Código de fornecedor    	|     Todo   fornecedor cadastrado deve receber um código único no sistema.    	|
# 3. REGRAS DE NEGÓCIO – FORNECEDORES
### Grupo:   Cadastro de fornecedor 
| Codigo  |  Nome 	| Descrição 	|
|-	|-	|-	|
|     RN0021    	|     Cadastro de endereço de   cobrança    	|     Para   todo fornecedor cadastrado é obrigatório o registro de ao menos um endereço   de cobrança.     	|
|     RN0022    	|     Cadastro de endereço de   entrega    	|     Para   todo fornecedor cadastrado é obrigatório o registro de ao menos um endereço   de entrega.     	|
|     RN0023    	|     Composição do registro de   endereços    	|     Todo   cadastro de endereços associados a fornecedores deve ser composto dos   seguintes dados: Tipo de residência (Casa, Apartamento etc.), Tipo   Logradouro, Logradouro, Número, Bairro, CEP, Cidade, Estado e País. Todos os   campos anteriores são de preenchimento obrigatório. Opcionalmente pode ser   preenchido um campo observações.    	|
|     RN0024    	|     Composição do registro de   cartões de crédito    	|     Todo   cartão de crédito associado a um fornecedor deverá ser composto pelos   seguintes campos: Nº do Cartão, Nome impresso no Cartão, Bandeira do Cartão e   Código de Segurança.    	|
|     RN0025    	|     Bandeiras permitidas para   registro de cartões de crédito    	|     Todo   cartão de crédito associado a um fornecedor deverá ser de alguma bandeira   registrada no sistema.    	|
|     RN0026    	|     Dados obrigatórios para o   cadastro de um fornecedor    	|     Para   todo fornecedor cadastrado é obrigatório o cadastro dos seguintes dados:   Gênero, Nome, Data de Nascimento, CPF, Telefone (deve ser composto pelo tipo,   DDD e número), e-mail, senha, endereço residencial.    	|
|     RN0027    	|     Ranking de fornecedor    	|     O   fornecedor deve receber um ranking numérico com base no seu perfil de compra    	|
