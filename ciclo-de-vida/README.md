# Ciclo de Vida no React - Programa Elas + Tech

Este projeto foi desenvolvido como parte dos estudos sobre o ciclo de vida de componentes de classe no React, dentro do programa **Elas + Tech**. O objetivo principal é demonstrar como o React gere a criação, atualização e destruição de componentes no DOM.

## 🚀 Sobre o Projeto

A aplicação consiste num contador interativo que pode ser exibido ou removido do ecrã. Através de mensagens no console do navegador, é possível acompanhar exatamente quando cada fase do ciclo de vida ocorre.

### Funcionalidades

- **Montagem:** Monitorização de quando o contador é inserido na página.
- **Atualização:** Registo de cada alteração de estado (incremento/decremento).
- **Desmontagem:** Observação da limpeza de dados quando o componente é removido.

## 🛠️ Tecnologias Utilizadas

- **React** (Componentes de Classe)
- **Material UI (MUI):** Para uma interface moderna e componentes de botão/layout.
- **JavaScript (ES6+)**

## 📂 Estrutura de Pastas

```text
src/
├── components/
│   └── Counter/
│       └── Counter.jsx   # Lógica detalhada do ciclo de vida
├── App.jsx               # Gestão de estado global e renderização
└── main.jsx              # Ponto de entrada da aplicação
```

## 📝 Métodos de Ciclo de Vida Demonstrados

No arquivo `Counter.jsx`, exploramos os seguintes métodos:

1. `constructor()`: Inicializa o estado do contador.
2. `componentDidMount()`: Executado assim que o contador aparece no ecrã.
3. `shouldComponentUpdate()`: Determina se o componente deve ser re-renderizado.
4. `componentDidUpdate()`: Executado após cada clique nos botões de "Aumentar" ou "Diminuir".
5. `componentWillUnmount()`: Executado imediatamente antes de o contador ser removido da interface.
