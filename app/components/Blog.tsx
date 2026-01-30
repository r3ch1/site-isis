'use client'

const posts = [
  {
    title: 'Aposentadoria para pessoas com deficiência: Como funciona todo o processo?',
    excerpt:
      'O processo de aposentadoria para pessoas com deficiência no Brasil é regulamentado pela Lei Complementar nº 142, de 2013. Essa legislação foi criada com...',
    slug: '#',
  },
  {
    title: 'Rescisão indireta: entenda quando o trabalhador pode solicitar e quais os direitos',
    excerpt:
      'A rescisão indireta é um direito pouco conhecido, mas muito importante para o trabalhador. Trata-se de uma espécie de "demissão por justa causa" ao...',
    slug: '#',
  },
  {
    title: 'Teletrabalho: direitos e deveres dos empregados e empregadores',
    excerpt:
      'O teletrabalho, também conhecido como trabalho remoto, se tornou uma realidade para muitas empresas e profissionais em decorrência das inovações tecnológicas...',
    slug: '#',
  },
]

export default function Blog() {
  return (
    <section
      id="blog"
      className="snap-section min-h-dvh flex flex-col justify-center py-20 md:py-24 bg-light"
    >
      <div className="container">
        <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">
          Saiba mais sobre seus direitos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Espaço dedicado a materiais para você conhecer seus direitos e deveres como trabalhador.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="h-40 bg-primary/10 flex items-center justify-center">
                <span className="text-4xl text-primary/20 font-serif">Artigos</span>
              </div>
              <div className="p-6">
                <h3 className="text-primary font-semibold text-base mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">{post.excerpt}</p>
                <a
                  href={post.slug}
                  className="inline-block py-3 px-6 rounded-lg text-accent font-semibold text-sm bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  Continue lendo »
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="btn btn-primary px-8">
            Ver mais artigos
          </a>
        </div>
      </div>
    </section>
  )
}
