---
sidebar_position: 1
---

# Visão geral

O 7CG oferece opções de configuração abrangentes para personalizar a aplicação ao seu ambiente de produção. Aceda às preferências em **Definições** ou através do atalho de teclado.

## Painel de preferências

O painel está organizado por separadores, cada um focado num aspeto específico da aplicação:

- **Ligação** — Definições de ligação ao servidor CasparCG
- **Canais** — Descoberta e gestão de canais
- **Interface** — Tema, idioma e visibilidade dos módulos
- **Cores dos blocos** — Personalização visual por tipo de bloco
- **Aplicação** — Atualizações, notificações e registo
- **Companion** — Integração com Bitfocus Companion
- **TV Manager** — Integração com rundown na nuvem
- **Info Canal** — Sobreposições de mosca e ID com opções de início automático
- **Acerca** — Informação de versão e licença

## Atalhos de teclado

- **Abrir Definições:** (varia consoante a plataforma)
  - Windows/Linux: `Ctrl+,`
  - macOS: `Cmd+,`

## Boas práticas

### Ambiente de produção

Definições recomendadas para transmissões em direto:

- **Tema:** Escuro
- **Atualização automática:** Desativada (atualize em janelas de manutenção)
- **Canal de versão:** Normal (apenas versões estáveis)
- **Nível de registo:** Info ou Aviso
- **Notificações:** Ativadas (para detetar erros críticos)
- **Início automático de Info Canal:** Ative apenas se a mosca ou o ID devem aparecer imediatamente no arranque
- **Emparelhamento Companion:** Empareje e identifique cada superfície de controlo por dispositivo, em vez de partilhar credenciais

### Desenvolvimento/Testes

Definições recomendadas para desenvolvimento:

- **Canal de versão:** Beta (testar novas funcionalidades)
- **Atualização automática:** Ativada
- **Nível de registo:** Debug
- **Companion:** Ativado (para testar superfícies de controlo)
- **Layouts:** Guarde predefinições separadas para desenvolvimento, ensaio e produção

### Ambientes multi-utilizador

Quando vários operadores usam o 7CG:

- Documente as atribuições de canais (Principal/Pré-visualização/Retorno)
- Use nomes personalizados descritivos para os canais
- Padronize os esquemas de cores de blocos entre instalações
- Mantenha o idioma consistente em toda a equipa
- Guarde [predefinições de layout](./layouts) nomeadas para cada função de operador
- Atribua a cada dispositivo Companion a sua própria sessão emparelhada e alcunha

## Detalhes técnicos

### Armazenamento das definições

O 7CG guarda as preferências através do sistema de armazenamento integrado do Electron:

- **Localização:** Pasta de dados do utilizador específica da plataforma
  - Windows: `%APPDATA%/7cg/`
  - macOS: `~/Library/Application Support/7cg/`
  - Linux: `~/.config/7cg/`

- **Formato:** Ficheiros de configuração JSON
- **Persistência:** As definições mantêm-se entre arranques

### Comunicação IPC

As preferências usam o IPC (Inter-Process Communication) do Electron:

- O processo de renderização (UI) comunica com o processo principal
- Muitas definições são guardadas imediatamente quando alteradas
- Atualizações de estado em tempo real para a ligação
- O emparelhamento Companion e as alterações às predefinições de layout atualizam-se de imediato no menu da aplicação e na UI

### Definições da base de dados

Algumas definições (canais, dados personalizados) são guardadas na base de dados SQLite, separadas das preferências.

## Leitura recomendada

- [Ligação](./connection)
- [Interface](./interface)
- [Layouts](./layouts)
- [Integração com o Companion](./companion)
- [Info Canal](./channel-graphics)
