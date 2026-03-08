// Personalize aqui os dados do escritório
export const siteConfig:{
  lawyerName: string
  title: string
  subtitle: string
  whatsappNumber: string
  whatsappMessage: string
  email: string
  phone: string
  address: string
  instagram: string
  facebook: string
  fullTitle?: string
} = {
  lawyerName: 'Isis',
  title: 'Ísis Santos',
  subtitle: 'Advogada Trabalhista',
  whatsappNumber: '5511999999999', // com DDI e DDD, sem espaços
  whatsappMessage: 'Olá! Gostaria de agendar uma consulta.',
  email: 'contato@exemplo.com',
  phone: '(11) 99999-9999',
  address: 'Seu endereço aqui',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
}

siteConfig.fullTitle = `${siteConfig.title} ${siteConfig.subtitle}`

export const whatsappUrl = (text?: string) =>
  `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=${encodeURIComponent(text || siteConfig.whatsappMessage)}`
