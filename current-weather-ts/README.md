# 🌦️ Clima App - Elas + Tech

Uma aplicação web para verificação de condições meteorológicas em tempo real, desenvolvida durante o programa **Elas + Tech** (parceria **Ada Tech** + **Caixa**).

O projeto consome a **API OpenWeatherMap** para buscar dados climáticos de qualquer cidade do mundo e apresenta as informações em uma interface moderna com design **Glassmorphism**.

## 🎨 Preview

<img width="1916" height="901" alt="image" src="https://github.com/user-attachments/assets/a6e63e6f-cc1f-41ab-8d79-52d7d3d185ac" />


## ✨ Funcionalidades

- **Busca por Localização:** O usuário pode digitar o nome de qualquer cidade para obter os dados.
- **Dados em Tempo Real:**
  - Temperatura atual.
  - Descrição do clima (ex: "céu limpo", "chuva leve").
  - Umidade do ar.
  - Velocidade do vento.
- **Interface Dinâmica:** O ícone do clima muda de acordo com a resposta da API.
- **Tratamento de Erros:** Feedback no console caso a busca falhe ou a API não responda.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3 (Glassmorphism):**
  - Efeito de vidro fosco (`backdrop-filter`) para os cards.
  - Layout responsivo com Flexbox.
  - Fontes customizadas (Google Fonts - Manrope).
- **TypeScript:**
  - Tipagem estática para maior segurança no código.
  - Manipulação assíncrona com `async/await` e `fetch` API.
- **API Externa:** Integração com [OpenWeatherMap](https://openweathermap.org/).

## 🔧 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
2. Compile o TypeScript (caso esteja rodando localmente em ambiente de desenvolvimento):
   ```bash
   tsc assets/index.ts
3. Abra o projeto:
   - Devido ao uso de Módulos ES6 (`type="module"` no HTML), é recomendável abrir o `index.html` utilizando um servidor local (como a extensão **Live Server** do VS Code) para evitar erros de política de CORS.
  
## 🎨 Créditos de Design

- **Efeito Glassmorphism:** Gerado e adaptado de [CSS Glass](https://css.glass/).
- **Ícones:** Fornecidos pela API OpenWeatherMap.
