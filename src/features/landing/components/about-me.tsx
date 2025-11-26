import { Badge } from "@/components/ui/badge"
import { CERTIFICATIONS } from "../utils/constants"

export const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre mí</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Más allá del código, soy un entusiasta del aprendizaje continuo.
          Lo más hermoso del mundo del software es que siempre existen nuevas cosas que aprender,
          nuevas tecnologías y nuevas arquitecturas a explorar. Siempre disfruto aprender y seguir mejorando mis habilidades. <br />
          Soy graduado en Ingeniería de Software en la <span className="font-bold">Escuela Politécnica Nacional</span> 🇪🇨.
          Además, fanático de ver fútbol ⚽, escuchar podcasts 🎙️ y disfrutar con amigos🍻
        </p>
      </div>
    </section>

  )
}
