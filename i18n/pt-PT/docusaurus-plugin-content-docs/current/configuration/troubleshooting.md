---
sidebar_position: 9
---

# Resolução de problemas

Problemas comuns e soluções para a configuração do 7CG.

## Problemas de ligação

### Não consigo ligar ao CasparCG

1. Verifique se o servidor CasparCG está em execução
2. Confirme o endereço e a porta no separador Ligação
3. Teste a conectividade de rede: `ping [endereço-do-servidor]`
4. Garanta que a firewall permite a porta 5250 (ou a porta personalizada)
5. Consulte os registos do servidor CasparCG

## Problemas de canais

### Não foram descobertos canais

1. Garanta que está ligado ao CasparCG (verifique o separador Ligação)
2. Confirme que a configuração do CasparCG inclui definições de canais
3. Verifique se os canais estão devidamente configurados em `casparcg.config`
4. Tente criar canais manualmente através do botão Editar

## Problemas com o Companion

### Companion não liga

1. Verifique se o servidor Companion está ativado no 7CG
2. Confirme que a porta WebSocket (predefinição 8099) não está bloqueada na firewall
3. Garanta que o Companion está configurado com o nome/IP e porta corretos se não estiver a usar a descoberta
4. Se estiver a emparelhar com PIN, confirme que a janela de emparelhamento não expirou
5. Inicie uma nova janela de emparelhamento se o PIN atual expirou ou atingiu o limite de tentativas falhadas
6. Revogue e empareje novamente um dispositivo se a sessão guardada parecer obsoleta
7. Tente desativar e reativar o servidor Companion
8. Verifique conflitos de porta com outras aplicações

### Descoberta do Companion não funciona

1. Confirme que o servidor Companion está em execução
2. Garanta que ambas as máquinas estão na mesma rede local
3. Verifique se a sua rede bloqueia tráfego mDNS ou multicast
4. Recorra à introdução manual de IP/nome de máquina e porta se a descoberta estiver indisponível

## Problemas de exportação

### A exportação de vídeo falha ou não produz ficheiro

1. Confirme que o item do rundown suporta exportação
2. Garanta que o nome do ficheiro termina em `.mov`
3. Verifique se o CasparCG consegue iniciar e parar o gravador corretamente
4. Mantenha a janela de exportação aberta até a gravação terminar ou intencionalmente parar
5. Reveja os registos se vir falhas de início ou fim de gravação

### A exportação foi iniciada por engano

1. Use o botão **Parar** na janela de exportação
2. Aguarde que o 7CG cancele a exportação e desmonte o gravador corretamente
3. Tente novamente com o nome de ficheiro, duração ou item correto

## Erros da aplicação

### Ecrã de erro recuperável

Se algo correr mal dentro do renderer, o 7CG já não o deixa com uma janela em branco. É mostrado um ecrã de erro amigável com um botão **Tentar de novo** que recarrega a vista afetada sem reiniciar a aplicação inteira. Se o erro continuar a acontecer, capture a mensagem e siga [Obter ajuda](#obter-ajuda) abaixo.

### Notificações na aplicação

As mensagens de sistema (erros, avisos, mudanças de estado) aparecem dentro da aplicação como notificações toast em vez de pop-ups nativos do sistema. As notificações empilham-se num canto da janela e desaparecem automaticamente — as mensagens mais antigas ficam visíveis brevemente para que possa lê-las pela ordem.

## Problemas de definições

### Definições não são guardadas

1. Verifique se a aplicação tem permissões de escrita na pasta de definições
2. Procure mensagens de erro nas notificações
3. Aumente o nível de registo para Debug e analise os registos
4. Confirme que existe espaço em disco disponível

## Obter ajuda

Se os problemas persistirem:

1. Defina o **Nível de registo** para **Debug** (Definições da aplicação)
2. Reproduza o problema
3. Consulte os registos da aplicação em:
   - Windows: `%APPDATA%/7cg/logs/`
   - macOS: `~/Library/Logs/7cg/`
   - Linux: `~/.config/7cg/logs/`
4. Reporte o problema com os ficheiros de registo
