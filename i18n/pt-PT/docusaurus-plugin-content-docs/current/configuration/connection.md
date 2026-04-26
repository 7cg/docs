---
sidebar_position: 2
---

# Ligação

Configure a ligação ao servidor CasparCG e as definições OSC.

![Definições de Ligação com as secções Servidor e OSC](../assets/preferences/connection.png)

## Ligação ao servidor

**Endereço do servidor**
- **Predefinição:** `CG` (nome de máquina)
- **Descrição:** O nome de máquina ou endereço IP do servidor CasparCG
- **Exemplos:**
  - `localhost` — Servidor a correr na mesma máquina
  - `CG` — Servidor com nome "CG" na rede local
  - `192.168.1.100` — Endereço IP direto

**Porta do servidor**
- **Predefinição:** `5250`
- **Descrição:** A porta AMCP em que o CasparCG escuta
- **Intervalo:** 1-65535
- **Nota:** É a porta AMCP (Advanced Media Control Protocol) padrão do CasparCG

## Estado da ligação

O painel mostra o estado em tempo real:
- **Ligado** (Verde) — Ligado ao servidor CasparCG com sucesso
- **Desligado** (Vermelho) — Sem ligação ao servidor
- **A reconectar** (Amarelo) — A tentar restabelecer a ligação
- **Erro** (Vermelho) — Falha na ligação com erro

As etiquetas de estado incluem o endereço do servidor a que está ligado (por exemplo, `Ligado a CG:5250`), pelo que é claro num relance qual o servidor ativo.

### Faixa de ligação global

Enquanto a aplicação se liga ou reconecta, surge uma faixa animada no topo do ecrã como indicador global — visível a partir de qualquer vista, não apenas do painel de Ligação. A faixa desaparece quando a ligação está saudável.

**Ações:**
- **Ligar** — Estabelece a ligação com as definições atuais
- **Desligar** — Fecha a ligação ativa
- **Premir Enter** — Liga rapidamente quando está a editar os campos de ligação

## Definições OSC

**Porta OSC**
- **Predefinição:** `6250`
- **Descrição:** Porta para comunicação OSC (Open Sound Control)
- **Intervalo:** 1-65535
- **Caso de uso:** Para integração com superfícies de controlo externas e sistemas de automação

:::tip
As alterações ao endereço e à porta do servidor são guardadas quando clica em **Ligar**. As alterações à porta OSC são guardadas de imediato.
:::

## Resolução de problemas

### Não consigo ligar ao CasparCG

1. Verifique se o servidor CasparCG está em execução
2. Confirme o endereço e a porta no separador Ligação
3. Teste a conectividade de rede: `ping [endereço-do-servidor]`
4. Garanta que a firewall permite a porta 5250 (ou a porta personalizada)
5. Consulte os registos do servidor CasparCG para ver erros
