# My Todo List - Task Management

Uma aplicação de gestão de tarefas desenvolvida para exercitar o controle de estado global e a persistência de dados no navegador. O projeto utiliza uma arquitetura modular, facilitando a manutenção e escala.

## 🚀 Tecnologias Utilizadas

- **React & TypeScript:** Desenvolvimento de componentes com tipagem forte.
- **Context API:** Gerenciamento de estado global das tarefas, centralizando a lógica de negócio.
- **SASS (SCSS Modules):** Estilização modular para evitar conflitos de escopo.
- **LocalStorage:** Persistência automática das tarefas para que os dados não se percam ao atualizar a página.
- **Fira Code:** Fonte monoespaçada integrada para uma estética moderna.

## 📦 Funcionalidades Implementadas

- **Contexto Global:** Uso de um `TasksProvider` para disponibilizar tarefas e funções em toda a aplicação.
- **Dashboard de Estatísticas:** Visualização dinâmica do total de tarefas e tarefas concluídas através do componente `StatsCard`.
- **Persistência em Tempo Real:** Sincronização automática entre o estado do React e o LocalStorage do navegador.
- **Interface Modular:** Separação clara entre componentes de lógica (`Tasks`) e componentes de exibição (`Header`, `StatsCard`).

## 📂 Como executar

1. Instale as dependências: `npm install`
2. Inicie o projeto: `npm start`
