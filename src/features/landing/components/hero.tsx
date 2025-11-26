import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS } from '../utils/constants'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import Image from 'next/image'

export const Hero = () => {
  return (
<section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary opacity-30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
            Ingeniero de Software - Backend & Infraestructura
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-6 leading-tight">
            Hola, soy <br />
            <span className="text-primary">
              Frankz Alarcón
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Ingeniero de software especializado en construir sistemas robustos, escalables y eficientes. 
            Me apasiona la arquitectura en la nube, las arquitecturas orientadas a eventos y el desarrollo del lado del servidor.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size='lg' asChild>
              <a
                href="#about-me" 
              >
                Sobre mí
              </a>
            </Button>
            <Button variant="outline" size='lg' asChild>
              <a 
                href="#projects" 
              >
                Ver Proyectos
              </a>
            </Button>
          </div>

          <div className="flex gap-6 mt-12">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <div className="flex items-center gap-2">
              <a href={SOCIAL_LINKS.email} className="text-muted-foreground hover:text-primary transition-colors">
                <MailIcon size={24} />
              </a>
              <p className="text-sm text-muted-foreground">leninalarcon7@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto bg-linear-to-tr from-secondary to-muted rounded-full p-1 relative z-10">
               <Image 
                 src="/imgs/frankz.webp" 
                 fill
                 alt="Frankz Avatar" 
                 className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
               />
            </div>
            {/* Floating code badge decoration */}
            {/* <div className="absolute -bottom-6 right-10 z-20 bg-card p-4 rounded-xl border border-border shadow-xl">
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-sm font-mono text-muted-foreground">System Status: Online</span>
               </div>
            </div> */}
        </div>
      </div>
    </section>
  )
}
