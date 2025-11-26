import React from 'react'
import { CERTIFICATIONS } from '../utils/constants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Certificaciones</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">Validación profesional de mis conocimientos técnicos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <Card key={cert.name} className="border border-border transition-all duration-300 gap-2 flex flex-col justify-between">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-3 text-primary">
                    <Award size={24} />
                </div>
                <CardTitle className="text-lg leading-tight min-h-14 flex items-center">
                    {cert.name}
                </CardTitle>
                <CardDescription className="text-sm font-medium">
                    {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                    {cert.url && (
                      <Button variant="outline" className='w-full' asChild>
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} className="mr-1" /> Ver
                          </a>
                      </Button>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
