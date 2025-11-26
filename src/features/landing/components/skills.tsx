import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '../utils/constants';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">Mi caja de herramientas para construir soluciones digitales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="border border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary rounded-lg transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl truncate">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill} 
                      variant='outline'
                      className="text-xs py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};