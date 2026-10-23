# Marri Dev — Robô de vendas de programação

MVP de site comercial e assistente de pré-venda para pequenos negócios, lanchonetes, hamburguerias e comércios locais.

## O que já funciona
- Página responsiva com apresentação de serviços.
- Links de serviço que preselecionam o formulário.
- Formulário de pré-orçamento com validação básica.
- Geração de mensagem comercial com os dados informados.
- Encaminhamento para WhatsApp quando o número comercial é configurado.
- Prévia da mensagem na página enquanto o número não estiver configurado.

## Estrutura
- `index.html`: conteúdo e formulário.
- `style.css`: identidade visual responsiva.
- `script.js`: interações e preparação do pedido de orçamento.

## Como testar
1. Baixe ou clone o repositório.
2. Abra `index.html` no navegador, ou use a extensão Live Server no VS Code.
3. Preencha o formulário e clique em **Preparar minha solicitação**.
4. Sem número configurado, o site mostra a prévia da mensagem.

## Ativar o botão de WhatsApp
Abra `script.js` e preencha a constante `WHATSAPP_NUMBER` com o número comercial, usando apenas números no formato internacional, com DDI e DDD. Exemplo fictício: `5548999999999`.

Não coloque sinal de +, espaços, parênteses ou hífens. Depois teste o botão e confira se a mensagem abre corretamente antes de publicar o site.

## Próxima etapa: automação real
Este MVP é um site estático. Ele não lê nem responde automaticamente mensagens recebidas no WhatsApp. Para isso será necessário integrar a API oficial do WhatsApp Business Platform a um backend, configurar credenciais com segurança e hospedar o serviço. Nunca publique tokens, senhas ou chaves de API no GitHub.

## Personalização pendente
- Confirmar o número comercial.
- Confirmar nome/identidade visual final.
- Definir hospedagem e endereço público do site.
