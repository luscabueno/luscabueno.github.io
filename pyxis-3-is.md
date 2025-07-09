# Índice

- [Objetivo](#objetivo)
- [Telas](#telas)
  - [Visão geral](#visão-geral)
  - [Detalhe](#detalhe)
- [Recursos](#recursos)

# Objetivo

O objetivo dessa IS é estabelecer o fundamento visual do novo sistema Pyxis, que será construído pelos componentes do Vaadin V24. O escopo dessa IS tratará dos seguintes ítens constantes entre todas telas do sistema:
- [1. Header](#1-header)
- [2. Tabsheet](#2-tabsheet)
- [3. Footer](#3-footer)

# Telas

## Visão geral

> [Inserir imagem `.jpg`]

## Detalhe

### 1. Header

- O header possui uma proposta mais compacta do que o sistema original, unindo o display da logo do sistema ao do menu de navegação.
  > [Inserir imagem `.jpg`]
- O menu de navegação mantem a estrutura horizontal do sistema original, utilizando o componente "Menu Bar" (https://vaadin.com/docs/latest/components/menu-bar).
  > [Inserir imagem `.jpg`]
- O menu de navegação tem, ao seu extremo direito do container, um menu separado com utilidades e preferências específicas do usuário logado ao sistema.
  > [Inserir imagem `.jpg`]
- Uma proposta alternativa de menu de usuário foi feita para mostrar de forma mais ergonômica qual usuário está logado, utilizando seu login e foto.
  > [Inserir imagem `.jpg`]

### 2. Tabsheet

- O tabsheet tem uma implementação diferente a partir da V23.3 do Vaadin, tendo sido unido às "Tabs" (https://vaadin.com/docs/latest/components/tabs > Prefix & Suffix) de navegação convencionais.
  > [Inserir imagem `.jpg`]
- O exemplo de tabsheet apresentado na documentação do Vaadin não mostra uma implementação clara de fechamento de abas, por tal razão uma implementação personalizada está sendo proposta abaixo, próxima de como é apresentada no sistema original.
  > [Inserir imagem `.jpg`]

### 3. Footer

- O footer é um simples elemento com texto de versionamento do sistema e uma logo da Jallcard para fins de um branding mais visual do "ecossistema" do qual o Pyxis faz parte, que são os sistemas Jallcard.
  > [Inserir imagem `.jpg`]

# Recursos

## Ícones (Material Symbols)

A proposta inicial é padronizar a utilização de ícones da biblioteca Material Symbols, uma webfont Google altamente expansiva e com recursos iconográficos muito variados.
- **Documentação:** https://fonts.google.com/icons.

- [Inserir anexo `.svg`]
  - "contrast"
  - Utilizado em botão para alternar entre dark e light mode.
  - **Integração web:** https://fonts.google.com/icons?selected=Material+Symbols+Outlined:contrast:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=contrast&icon.size=24&icon.color=%23e3e3e3&icon.platform=web
- [Inserir anexo `.svg`]
  - "add_2"
  - Utilizado em botão para adicionar uma nova aba no componente tabsheet.
  - **Integração web:** https://fonts.google.com/icons?selected=Material+Symbols+Outlined:add_2:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=add_2&icon.size=24&icon.color=%23e3e3e3&icon.platform=web
- [Inserir anexo `.svg`]
  - "close_small"
  - Utilizado em botão para fechar uma aba no componente tabsheet.
  - **Integração web:** https://fonts.google.com/icons?selected=Material+Symbols+Outlined:close_small:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=close_small&icon.size=24&icon.color=%23e3e3e3&icon.platform=web

## Logos

- |        | **HML** | **PR** | **SP** |
  |--------|---------|--------|--------|
  | **PR** |         |        |        |
  | **SP** |         |        |        |
- [Inserir anexo `.svg` ou tabela de `.svg`]
  - "door"
  - Utilizado para indicar a porta de acesso, fica ao lado da logo Pyxis no header com 8px de distância.
- [Inserir anexo `.svg`]
  - "jallcard-logo"
  - Utilizado no footer para fins de branding.
- [Inserir anexo `.svg`]
  - "pyxis-logo"
  - Utilizado no header para fins de branding.