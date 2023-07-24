// Função para formatar o número do WhatsApp (removendo espaços e caracteres especiais)
function formatarNumeroWhatsapp(numero) {
    return numero.replace(/[^\d]/g, '');
  }

  // Função para redirecionar para o WhatsApp com o número desejado
  function comprarViaWhatsapp(event) {
    const cardDescription = event.target.parentNode;
    const productInfo = cardDescription.querySelector('p').textContent;

    // Substitua o número abaixo pelo número de WhatsApp que você deseja utilizar
    const numeroWhatsapp = '5511979521165';

    // Formata o número do WhatsApp para remover caracteres especiais
    const numeroWhatsappFormatado = formatarNumeroWhatsapp(numeroWhatsapp);

    // Cria o link do WhatsApp com o número formatado e informações do produto
    const linkWhatsapp = `https://wa.me/${numeroWhatsappFormatado}?text=${encodeURIComponent('Gostaria de comprar o produto: ' + productInfo)}`;

    // Abre o link do WhatsApp em uma nova janela
    window.open(linkWhatsapp, '_blank');
  }

  // Seleciona todos os botões com a classe "comprarWhatsapp" e adiciona o evento de clique a eles
  const botoesWhatsapp = document.querySelectorAll('.comprarWhatsapp');
  botoesWhatsapp.forEach(botao => {
    botao.addEventListener('click', comprarViaWhatsapp);
  });