# 📝 Lista de Tarefas

Uma aplicação web interativa para gerenciamento de tarefas diárias, desenvolvida como parte do programa **Elas + Tech**, uma iniciativa exclusiva para mulheres e está dentre os projetos pilotos selecionados no programa Caixa: Desafio Mulheres em STEM, 
uma iniciativa do Fundo Socioambiental **CAIXA** em parceria com a **Artemisia** e **Ada**.

Este projeto foca na manipulação do DOM, persistência de dados e criação de uma interface de usuário agradável e responsiva.

## 🎨 Preview

<img width="1913" height="904" alt="image" src="https://github.com/user-attachments/assets/672cc30a-ea5f-48a0-86ce-5c459f5a8519" />

## ✨ Funcionalidades

- **Adicionar Tarefas:** Permite a inclusão de novas tarefas (com validação mínima de 3 caracteres).
- **Marcar como Concluída:** Animações personalizadas (CSS) ao checar uma tarefa, incluindo efeito de "riscado" e micro-interações visuais.
- **Remover Tarefas:** Exclusão de itens da lista.
- **Persistência de Dados:** As tarefas são salvas no `LocalStorage` do navegador, garantindo que os dados não se percam ao atualizar a página.
- **Responsividade:** Layout adaptável para dispositivos móveis e desktops.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:**
  - Uso de **Variáveis CSS** para paleta de cores consistente.
  - **Keyframes e Animations** para interações fluidas (efeitos de checkbox e botões).
  - Fonte *Fira Code* para um visual "tech".
- **JavaScript (ES6+):**
  - Manipulação do DOM.
  - Arrow Functions.
  - `JSON.parse` e `JSON.stringify` para gerenciamento do LocalStorage.

## 📂 Estrutura do Projeto

```bash
/
├── assets
│   ├── script
│   │   └── main.js       # Lógica da aplicação
│   └── style
│       └── styles.css    # Estilização e animações
└── index.html            # Estrutura principal
