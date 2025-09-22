const services = [
  {
    title: 'Operational Optimization',
    icon: 'settings',
    description: 'Streamline your aviation operations for maximum efficiency and cost-effectiveness while maintaining the highest safety standards.',
    bullets: ['Process Analysis', 'Cost Reduction', 'Performance Metrics']
  },
  {
    title: 'Safety Management',
    icon: 'file-check',
    description: 'Comprehensive safety management systems that protect your operations, personnel, and reputation in the aviation industry.',
    bullets: ['SMS Implementation', 'Risk Assessment', 'Training Programs']
  },
  {
    title: 'Training & Development',
    icon: 'users',
    description: "Expert aviation training programs tailored to your team's needs, from ground crew to executive leadership.",
    bullets: ['Custom Curricula', 'Certification Prep', 'Leadership Training']
  },
  {
    title: 'Strategic Planning',
    icon: 'trending-up',
    description: 'Long-term strategic consulting to help your aviation business grow sustainably in a competitive market.',
    bullets: ['Market Analysis', 'Growth Planning', 'Investment Strategy']
  },
  {
    title: 'Quality Assurance',
    icon: 'circle-check-big',
    description: 'Implement robust quality management systems that ensure consistent excellence across all aviation operations.',
    bullets: ['QA Systems', 'Process Improvement', 'Standards Compliance']
  },
  {
    title: 'Regulatory Compliance',
    icon: 'shield',
    description: 'Navigate complex aviation regulations with confidence. We ensure your operations meet all international standards.',
    bullets: ['FAA Certification Support', 'Audit Preparation', 'Documentation Review']
  }
]

function CardIcon({ name }) {
  const common = 'h-6 w-6 text-primary'
  if (name === 'shield') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={common}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  )
  if (name === 'settings') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={common}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  )
  if (name === 'file-check') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={common}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>
  )
  if (name === 'users') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  )
  if (name === 'trending-up') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={common}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  )
  if (name === 'circle-check-big') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={common}><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
  )
  return null
}

function Bullet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Comprehensive Aviation
            <span className="block text-primary">Consulting Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">From regulatory compliance to operational excellence, we provide the expertise and guidance your aviation business needs to soar to new heights.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-card transition-shadow duration-300 border-border/50" key={s.title}>
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <CardIcon name={s.icon} />
                  </div>
                  <h3 className="font-semibold tracking-tight text-xl">{s.title}</h3>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <p className="text-muted-foreground">{s.description}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li className="flex items-center space-x-2 text-sm" key={b}>
                      <Bullet />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


