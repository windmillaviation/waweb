export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="container py-6 text-muted-foreground text-sm">
        © {year} Windmill Aviation. All rights reserved.
      </div>
    </footer>
  )
}


