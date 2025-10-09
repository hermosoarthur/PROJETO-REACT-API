# 🚀 PROJETO-REACT-API

Este projeto é uma aplicação web construída com React e Expo que funciona como um explorador de API interativo. Ele permite que os usuários busquem e exibam dados de duas APIs públicas: The Cat API e PokeAPI. A aplicação demonstra como fazer requisições assíncronas, gerenciar estado e exibir dados dinâmicos em uma interface amigável.

## 🌟 Funcionalidades Principais

- **🔗 Integração com API:** Consome dados da `The Cat API` e `PokeAPI` usando `axios`
- **🐱 Explorador de Gatos Aleatórios:** Busca e exibe uma raça de gato aleatória, incluindo seu nome, origem, descrição e uma imagem. Inclui um mecanismo de fallback para falhas na API
- **⚡ Explorador de Pokémon Aleatório:** Busca e exibe dados de um Pokémon aleatório, incluindo seu nome, arte oficial, ID, habilidades, tipos, altura e peso
- **👨‍💻 Informações dos Desenvolvedores:** Uma página dedicada que apresenta a equipe de desenvolvimento com links para seus perfis no GitHub e LinkedIn
- **🧩 Arquitetura Baseada em Componentes:** Construída com componentes React reutilizáveis para uma base de código modular e de fácil manutenção

## 📄 Páginas

### 🏠 Início
A página inicial fornece uma visão geral do projeto e cartões de navegação para acessar as diferentes seções do explorador de API e a página dos desenvolvedores

### 🐈 The Cat API
Esta página permite que os usuários busquem informações sobre uma raça de gato aleatória. Um botão aciona uma chamada de API que retorna um cartão com a imagem do gato, nome, origem e uma breve descrição

### 🎮 PokeAPI
Nesta página, os usuários podem descobrir um Pokémon aleatório. Clicar no botão busca dados da PokeAPI e exibe a arte oficial do Pokémon, nome, ID da Pokédex e estatísticas principais como habilidades, tipos, altura e peso

### 👥 Desenvolvedores
Esta seção apresenta a equipe por trás do projeto. Cada desenvolvedor é apresentado em um cartão contendo sua foto, nome e links diretos para seus perfis no GitHub e LinkedIn

## 💻 Stack Tecnológico

- **⚛️ React:** Uma biblioteca JavaScript para construir interfaces de usuário
- **🌐 React Native for Web:** Permite o uso de componentes e APIs do React Native na web
- **📱 Expo:** Um framework e plataforma para aplicações React universais
- **📡 Axios:** Um cliente HTTP baseado em promessas para fazer requisições de API

## 🚀 Começando

Siga estas instruções para obter uma cópia do projeto e executá-lo em sua máquina local para fins de desenvolvimento e teste

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior é recomendada) 🟢
- npm ou yarn 📦

### ⚙️ Instalação & Configuração

1.  **📥 Clone o repositório:**
    ```sh
    git clone https://github.com/hermosoarthur/PROJETO-REACT-API.git
    ```

2.  **📁 Navegue até o diretório do projeto:**
    ```sh
    cd PROJETO-REACT-API
    ```

3.  **📦 Instale as dependências:**
    ```sh
    npm install
    ```

    
    
    ```sh
    npx expo install
    ```

### 🎯 Executando a Aplicação

1.  **🖥️ Inicie o servidor de desenvolvimento:**
    ```sh
    npx expo start
    ```
    Este comando inicia o servidor de desenvolvimento do Expo 🚀

2.  **🌐 Abra a aplicação:**
    - No terminal será exibido um QR Code que você pode escanear com o app Expo Go no seu celular 📱
    - Para web: pressione `w` no terminal para abrir no navegador 🌐
    - Para Android: pressione `a` no terminal para abrir no emulador 🤖
    - Para iOS: pressione `i` no terminal para abrir no simulador 🍎
  
3.  **✨ Aproveite a aplicação!**
    A aplicação estará rodando e você poderá explorar todas as funcionalidades 🎉

## 📞 Suporte

Se encontrar algum problema durante a instalação ou execução, verifique se todas as dependências do Expo estão corretamente instaladas e se você está usando uma versão compatível do Node.js 🔍
