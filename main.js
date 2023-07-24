// Função para formatar o número do WhatsApp (removendo espaços e caracteres especiais)
function formatarNumeroWhatsapp(numero) {
    return numero.replace(/[^\d]/g, '');
  }

  // Função para redirecionar para o WhatsApp com o número desejado
  function comprarViaWhatsapp() {
    // Substitua o número abaixo pelo número de WhatsApp que você deseja utilizar
    const numeroWhatsapp = '11979521165';

    // Formata o número do WhatsApp para remover caracteres especiais
    const numeroWhatsappFormatado = formatarNumeroWhatsapp(numeroWhatsapp);

    // Cria o link do WhatsApp com o número formatado
    const linkWhatsapp = `https://wa.me/${numeroWhatsappFormatado}`;

    // Abre o link do WhatsApp em uma nova janela
    window.open(linkWhatsapp, '_blank');
  }

  // Adiciona o evento de clique ao botão
  document.getElementById('comprarWhatsapp').addEventListener('click', comprarViaWhatsapp);
