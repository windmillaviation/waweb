export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to Take Off?
            <span className="block text-primary">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Get in touch with our aviation experts today. We're here to help you navigate challenges and achieve your goals in the aviation industry.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* <InfoRow title="Phone" lines={["+1 (555) 123-4567","+1 (555) 123-4568"]} hint="Call us today" icon="phone" /> */}
            <InfoRow title="Email" lines={["aa@windmillaviation.com"]} hint="Send us an email" icon="mail" />
            {/* <InfoRow title="Office" lines={["123 Aviation Boulevard","Suite 456, Airport City, AC 12345"]} hint="Visit our office" icon="pin" /> */}
            <InfoRow title="Hours" lines={["24/7"]} hint="Business hours" icon="clock" />

            <div className="rounded-lg shadow-sm bg-gradient-hero text-primary-foreground border-0">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center space-x-3">
                  <Icon name="message" className="h-6 w-6" />
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Emergency Aviation Support</h3>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="mb-4">Need immediate aviation consulting support? Our emergency response team is available 24/7 for critical situations.</p>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm border-2 font-semibold h-11 rounded-md px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">Emergency Contact</button>
              </div>
            </div>
          </div>

          {/* <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-card border-border/50">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-2xl">Send us a Message</h3>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="p-6 pt-0 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First Name" placeholder="Your first name" />
                <Field label="Last Name" placeholder="Your last name" />
              </div>
              <Field type="email" label="Email" placeholder="your.email@company.com" />
              <Field label="Company" placeholder="Your company name" />
              <Field label="Service Interest" placeholder="Which service are you interested in?" />
              <Field as="textarea" label="Message" placeholder="Tell us about your aviation consulting needs..." textarea />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-soft font-semibold h-11 rounded-md px-8 w-full">
                Send Message
              </button>
            </form>
          </div>*/}
        </div> 
      </div>
    </section>
  )
}

function Icon({ name, className }) {
  const cls = className || 'h-6 w-6 text-primary'
  if (name === 'phone') return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>)
  if (name === 'mail') return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>)
  if (name === 'pin') return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>)
  if (name === 'clock') return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>)
  if (name === 'message') return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>)
  return null
}

function InfoRow({ title, lines, hint, icon }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-border/50">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
            <Icon name={icon} />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            {lines.map((l) => (<p key={l} className="text-muted-foreground">{l}</p>))}
            <p className="text-sm text-primary font-medium">{hint}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, placeholder, type = 'text', as, textarea }) {
  const base = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      {textarea || as === 'textarea' ? (
        <textarea className={base + ' min-h-[120px]'} placeholder={placeholder} />
      ) : (
        <input type={type} className={base} placeholder={placeholder} />
      )}
    </div>
  )
}


