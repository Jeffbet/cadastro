##Sistema de Cadastro de Usuários

##Descrição

Este é um sistema de cadastro de usuários com uma interface moderna e responsiva, validação de dados no lado do cliente, e processamento seguro no servidor usando PHP e MySQL. O sistema garante a segurança das informações com criptografia de senhas e fornece feedback visual interativo para os usuários.

##Estrutura do Projeto

/css - Arquivos de estilos para a interface e modais.
/js - Scripts JavaScript para validação de dados, interação com o backend e controle do modo noturno.
/php - Scripts PHP para processamento de dados, conexão com o banco de dados e segurança de senhas.
database.sql - Script para criar a tabela de usuários no banco de dados MySQL.
index.html - Página principal do sistema com o formulário de cadastro.
README.md - Documentação detalhada do projeto.

##Tecnologias Utilizadas

HTML5: Estrutura do layout e elementos de formulário.
CSS3: Estilização da interface, incluindo o modo claro/escuro e design responsivo.
JavaScript (ES6+): Validação de campos, exibição de modais, e envio de dados via AJAX.
PHP (7.4+): Processamento de dados, validações no servidor, e criptografia de senhas usando bcrypt.
PDO (PHP Data Objects): Conexão segura com o MySQL.
MySQL: Banco de dados para armazenamento de usuários.

##Funcionalidades

Cadastro de Usuários: Insira nome, email e senha com validação dinâmica.
Validação de Dados: Validações de email e força da senha em tempo real no frontend.
Feedback Visual: Exibição de mensagens de sucesso e erro em modais estilizados.
Segurança de Senha: As senhas são criptografadas antes de serem armazenadas, garantindo proteção dos dados dos usuários.
Modo Noturno: Alternância entre modo claro e escuro para uma melhor experiência do usuário.

##Configuração

Configurar o Banco de Dados:

1- Crie o banco de dados MySQL usando o script database.sql.

2- Configurar Conexão no config.php:

3- Iniciar o Servidor PHP:
' php -S localhost:8000 '

4- Acessar o Sistema:
Abra o navegador e acesse http://localhost:8000/index.html para usar o sistema de cadastro.

Contato
Se precisar de suporte ou quiser contribuir, entre em contato:

Email: jefferson.engenheirosoft@gmail.com
GitHub: https://github.com/Jeffbet
