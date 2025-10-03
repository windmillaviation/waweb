export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Elevating Aerospace
                <span className="block text-primary">Excellence Worldwide</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">With over 25 years of combined experience in aerospace asset management, Windmill Aviation has established itself as a trusted partner for fleet operators, asset owners, and aerospace organizations worldwide.</p>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground">Our team of certified aerospace professionals brings deep industry knowledge and practical expertise to every asset management project. We understand the unique challenges facing aerospace asset owners and provide data-driven solutions that maximize portfolio value.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Assets Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">40+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <InfoCard title="Precision" icon="target" text="Every asset detail matters. We deliver precise asset management strategies tailored to your specific portfolio needs." />
            <InfoCard title="Excellence" icon="award" text="Uncompromising commitment to maximizing asset value and operational excellence in every portfolio we manage." />
            <InfoCard title="Global Reach" icon="globe" text="International asset management expertise with local market knowledge across diverse aerospace sectors." />
            <InfoCard title="Innovation" icon="zap" text="Cutting-edge asset management technologies that prepare your portfolio for the future of aerospace markets." />
          </div>
        </div>
      </div>
    </section>
  )
}

function Icon({ name }) {
  const cls = 'h-8 w-8 text-primary'
  if (name === 'target') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  )
  if (name === 'award') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
  )
  if (name === 'globe') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
  )
  if (name === 'zap') return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
  )
  return null
}

function InfoCard({ title, icon, text }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center shadow-card border-border/50">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
          <Icon name={icon} />
        </div>
        <h3 className="font-semibold tracking-tight text-lg">{title}</h3>
      </div>
      <div className="p-6 pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  )
}




