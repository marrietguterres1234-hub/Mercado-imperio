/*
 * Marri Dev — assistente de pré-venda (MVP)
 * Para ativar o encaminhamento ao WhatsApp, informe o número com DDI e DDD,
 * somente números, no formato 55DDDNUMERO.
 */
const WHATSAPP_NUMBER = ""; // Exemplo: "5548999999999"

document.querySelector("#year").textContent = new Date().getFullYear();

const quoteForm = document.querySelector("#quote-form");
const serviceSelect = document.querySelector("#tipo");
const statusMessage = document.querySelector("#form-status");

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    serviceSelect.value = link.dataset.service;
  });
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quoteForm);
  const nome = String(formData.get("nome") || "").trim();
  const negocio = String(formData.get("negocio") || "").trim();
  const tipo = String(formData.get("tipo") || "").trim();
  const detalhes = String(formData.get("detalhes") || "").trim();

  if (!nome || !negocio || !tipo) {
    statusMessage.textContent = "Preencha seu nome, o nome do negócio e a solução desejada.";
    return;
  }

  const mensagem = [
    "Olá! Quero solicitar um orçamento com a Marri Dev.",
    "",
    `Nome: ${nome}`,
    `Negócio: ${negocio}`,
    `Solução desejada: ${tipo}`,
    `Detalhes: ${detalhes || "Ainda quero conversar para definir os detalhes."}`,
    "",
    "Podemos conversar sobre os próximos passos?"
  ].join("\n");

  if (/^\d{12,13}$/.test(WHATSAPP_NUMBER)) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    statusMessage.textContent = "Sua mensagem foi preparada no WhatsApp. Revise e envie para concluir a solicitação.";
  } else {
    statusMessage.textContent = "O formulário está funcionando! Para encaminhar ao WhatsApp, configure WHATSAPP_NUMBER no arquivo script.js com seu número comercial (DDI + DDD + número).";
    const preview = document.createElement("textarea");
    preview.readOnly = true;
    preview.rows = 7;
    preview.setAttribute("aria-label", "Prévia da mensagem de orçamento");
    preview.value = mensagem;
    const previous = document.querySelector("#message-preview");
    if (previous) previous.remove();
    preview.id = "message-preview";
    preview.style.cssText = "width:100%;margin-top:8px;padding:12px;border:1px solid #ded5e6;border-radius:10px;font:inherit;color:#21172b;background:#faf8fc";
    quoteForm.appendChild(preview);
    preview.focus();
    preview.select();
  }
});