$(document).ready(function() {
  $('#telefone').mask('(00) 00000-0000')

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      mensagem: {
        required: true
      },
    },
    messages: {
      nome: 'Por favor, insira seu nome completo',
      email: 'Digite seu melhor email.',
      mensagem: 'Não esqueça de enviar sua duvida.'
    }
  })
})