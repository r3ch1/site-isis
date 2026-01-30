'use client'

import { whatsappUrl } from '../config/site'

const services = [
  {
    title: 'Quero me aposentar',
    description: 'Não sabe quais documentos e quanto tempo falta para se aposentar? Fale com uma advogada agora.',
  },
  {
    title: 'Calcular minha aposentadoria',
    description: 'Quer saber quais são as formas e como é calculada a sua aposentadoria? Fale com uma advogada agora.',
  },
  {
    title: 'Revisar minha aposentadoria',
    description: 'Sua aposentadoria ainda não foi corrigida? Saiba quais são os seus direitos falando com uma advogada.',
  },
  {
    title: 'Entrar com uma ação trabalhista',
    description: 'Sofreu algum acidente de trabalho? Seu chefe não está recolhendo seu INSS e outros pagamentos?',
  },
  {
    title: 'Calcular minhas verbas trabalhistas',
    description: 'Não sabe se seu pedido de demissão está com os valores corretos? Fale conosco para realizarmos os cálculos.',
  },
  {
    title: 'Consultoria para minha empresa',
    description: 'Sua empresa ainda não tem uma cobertura jurídica? Saiba como você pode evitar dores de cabeça.',
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      className="snap-section min-h-dvh flex flex-col justify-center py-20 md:py-24 bg-light"
    >
      <div className="container">
        <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">
          Saiba como nosso escritório pode te ajudar de forma rápida
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Separamos abaixo alguns tópicos para agilizar o seu atendimento online.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-primary font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{item.description}</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg text-accent font-semibold text-sm bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale com uma advogada online
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
