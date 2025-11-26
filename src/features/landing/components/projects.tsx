import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { PROJECTS } from "../utils/constants"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">Una selección de mis proyectos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 pt-0">
              <CardHeader className="relative h-48 overflow-hidden px-0">
                <Image 
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 h-20 overflow-hidden line-clamp-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs py-1 px-3">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex gap-4">
                    {project.repoUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.repoUrl} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <GithubIcon size={16} /> Código
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLinkIcon size={16} /> Demo
                      </a>
                    )}
                  </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects