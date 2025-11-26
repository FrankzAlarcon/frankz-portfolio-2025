import { Briefcase } from "lucide-react"
import { EXPERIENCE } from "../utils/constants"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const Experience = () => {
  return (
<section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Experiencia Profesional</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary transition-colors">
                <Briefcase size={18} className="text-muted-foreground group-hover:text-primary" />
              </div>
              
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border border-border shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="font-bold text-xl text-card-foreground flex justify-between items-center">
                    {job.role}
                    <Badge variant="secondary" className="font-mono text-xs">{job.period}</Badge>
                  </CardTitle>
                    
                  <CardDescription className="text-sm font-semibold text-muted-foreground mb-2">{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                      {job.technologies.map(tech => (
                          <Badge key={tech} variant="outline" className="text-xs py-1 px-3">{tech}</Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
