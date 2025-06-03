// @ts-nocheck
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { projects } from '@/data/portfolioData';

// Import the Project type or define it inline
type Project = {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="mb-8 overflow-hidden">
      <CardHeader>
        <h3 className="text-2xl font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">The Challenge</h4>
          <p>{project.details.challenge}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">The Solution</h4>
          <p>{project.details.solution}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Impact</h4>
          <ul className="space-y-2">
            {project.details.impact.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.externalLink && (
          <div className="pt-4">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a
                href={project.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.externalLink.title}
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const PortfolioFeed = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Projects & Certifications</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A selection of my academic projects and technical certifications that showcase my skills and experience.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeed;
