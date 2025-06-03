// @ts-nocheck
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { footerData } from '../data/footerData';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Github': return <Github className="h-4 w-4" />;
      case 'Linkedin': return <Linkedin className="h-4 w-4" />;
      case 'Mail': return <Mail className="h-4 w-4" />;
      case 'Phone': return <Phone className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <footer className="relative z-10 bg-background/95 px-4 pb-11 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <h3 className="mb-4 text-lg font-semibold text-center md:text-left">Let's Connect</h3>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <div className="flex gap-4">            {footerData.socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" className="rounded-full">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {getIcon(link.icon)}
                </a>
              </Button>
            ))}
          </div>          <p>
            <i>{footerData.quote}</i>
          </p>
          <div className="flex gap-4 font-semibold">
            <a href={footerData.githubCodeLink} className="hover:text-primary">
              Check out the code on Github
            </a>
            {footerData.location && (
              <span className="ml-4">📍 {footerData.location}</span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
