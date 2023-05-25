# Trybe Futebol Clube
[Trybe](https://www.betrybe.com/) é uma escola de tecnologia focada na formação de Desenvolvedores Web. Este projeto foi proposto como uma atividade para aprimorar os estudos em Back-End.

## Sobre :
Trybe Futebol Clube é uma aplicação Full Stack que permite ao usuário ter acesso a um informativo sobre partidas e classificações de futebol. Ao realizar login na aplicação, o usuário, além de visualizar as informações, também poderá alterar resultados das partidas e inserir partidas que estão em andamento.

## Tecnologias e Ferramentas:
### Front-end
- HTML
- CSS
- ReactJS
- React router

### Back-end
- Express
- TypeScript
- Docker
- Sequelize
- MySQL
- JWT
- Arquitetura Model-Service-Controller

### Testes em Back-end
- Mocha
- Chai
- Sinon

OBS.: Os arquivos presentes na pasta front-end foram disponibilizados pela Trybe para a realização deste projeto.

## Execução
⚠️ Todos os comandos descritos abaixo devem ser executados no terminal dentro da pasta raíz do projeto, após ser feito o clone do repositório com o comando `git clone git@github.com:lauralana/Project-TFC.git`  

<details>
   <summary><strong>Rodando a aplicação com o Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o [Docker](https://www.docker.com/) instalado na sua máquina.
  
  </br>
    Após clonar o projeto, instale as dependências na pasta back-end e front-end rodando o comando abaixo em cada pasta.
    
      npm install
  
  Na pasta app do projeto, suba os containers <strong>app_backend</strong>, <strong>app_frontend</strong> e <strong>db</strong> utilizando o docker-compose.dev.yalm. Utilize o comando abaixo.

      npm run compose:up:dev
    
  Abra o terminal do container <strong>app_backend</strong> para verificar o servidor através dos logs do container.

      docker-compose logs backend -f
  
  Para executar os testes do back-end, abra um terminal local na pasta back-end e rode o comando abaixo.
  
     npm test

    
</details>

![Captura de tela de 2022-12-04 21-57-51](https://user-images.githubusercontent.com/98956659/205527529-84b01a9f-812f-49fd-a48c-0a12e172b633.png)
