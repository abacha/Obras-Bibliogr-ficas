# Desafio programação - para vaga Back-end

👋 Olá, Seja Bem-vindo(a) ao Desafio programação - para vaga Back-end Guide.

# Exigências

**:warning: Atenção:** É necessário que os desenvolvedores usem o Docker no seu ambiente de desenvolvimento.

- **🛠 Modo Desenvolvimento Docker**
    - :computer: [Linux Ubuntu LTS](https://ubuntu.com/download/desktop)
    - 🐳 [Docker](https://docs.docker.com/engine/installation/) Deve estar instalado.
    - 🐳 [Docker Compose](https://docs.docker.com/compose/) Deve estar instalado.
    - **💡 Dica:** [Documentação do Docker](https://docs.docker.com/)

# Instalando

## 🐳 Modo Desenvolvimento com Docker


### Observações: 

- Seguir todas as etapas abaixo.

- Quando executar os comandos docker-compose [comando], porventura retorne erro de permissões, execute sudo docker-compose [comando] e adicione sua senha.

Após instalar o docker e docker-compose, estando na pasta raiz do projeto, execute:

```sh
docker-compose build
```

```sh
docker-compose up
```

Para se certificar que os seus containers subiram corretamente, todos os containers deve estar com o status `UP`, execute:

```sh
docker-compose ps -a
```

Para acessar o container da aplicação, execute:

```sh
docker-compose run --rm web bash
```

Para acessar a instância do banco de dados, execute:

```sh
docker exec-it [nome do db] bash
```

Para derrubar e subir a instância do docker novamente, execute:

```sh
docker-compose down && docker-compose up web
```

🚀 :clap: Para visualizar o sistema basta acessar no navegador no endereço: localhost:3000

# Banco de Dados

### Em um novo terminal execute:

```sh
docker-compose run --rm web bash
```

```sh
rake db:create
```

```sh
rake db:migrate
```

# Como executar a Suíte de Teste

### Testes Unitários com Rspec, em um novo terminal execute:

```sh
docker-compose run --rm web bash
```

```sh
RAILS_ENV=test rails db:create
```

```sh
RAILS_ENV=test rails db:migrate
```

```sh
bundle exec rspec
```

## Print

**Exemplo usado via POSTMAN**

![](https://github.com/Gilberto-F-S-Junior/Obras-Bibliogr-ficas/raw/master/public/postman.png)