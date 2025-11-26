import { Navbar } from "@/features/landing/components/navbar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="bg-background min-h-screen text-foreground">
        {children}
      </main>
      <div className="py-12 border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Frankz Alarcón. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default layout