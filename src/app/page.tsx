import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Briefcase, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
      <div className="relative w-40 h-56 md:w-48 md:h-64 mb-8">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
          <Image
            src="/images/oscar p.jpg"
            alt="Your Name - Headshot"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="professional headshot"
          />
        </div>
        {siteConfig.links.github && (
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="absolute bottom-3 left-[-36px] z-12"
          >
            <Github className="h-6 w-6 text-accent hover:text-primary hover:fill-primary transition-all duration-200 ease-in-out hover:scale-120" />
          </Link>
        )}
        {siteConfig.links.linkedin && (
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="absolute bottom-3 right-[-36px] z-12"
          >
            <Linkedin className="h-6 w-6 text-accent hover:text-primary hover:fill-primary transition-all duration-200 ease-in-out hover:scale-120" />
          </Link>
        )}
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        <span className="text-primary">Oscar M. Muriithi</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-2">Technology Innovator, Researcher & Future Shaper</p>
      <p className="max-w-2xl text-lg text-foreground/80 mb-10 leading-relaxed">
        Passionate about leveraging cutting-edge technology to solve complex problems and drive progress. 
        I specialize in AI, 
        Cloud Computing and Software development, with a vision to create impactful solutions for a better World.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
          <Link href="/about">
            <User className="mr-2 h-5 w-5" />
            About Me
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
          <Link href="/projects">
            <Briefcase className="mr-2 h-5 w-5" />
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
