// Personalize aqui os dados do escritório
export const siteConfig = {
  lawyerName: 'Isis',
  fullTitle: 'Dra. Isis - Advogada Trabalhista',
  whatsappNumber: '5511999999999', // com DDI e DDD, sem espaços
  whatsappMessage: 'Olá! Gostaria de agendar uma consulta.',
  email: 'contato@exemplo.com',
  phone: '(11) 99999-9999',
  address: 'Seu endereço aqui',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
}

export const whatsappUrl = (text?: string) =>
  `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=${encodeURIComponent(text || siteConfig.whatsappMessage)}`
