import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 md:py-20">
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
        <Image
          src="https://placehold.co/300x300.png"
          alt="Your Name - Headshot"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="professional headshot"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        <span className="text-primary">Your Name</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-2">Technology Innovator & Future Shaper</p>
      <p className="max-w-2xl text-lg text-foreground/80 mb-10 leading-relaxed">
        Passionate about leveraging cutting-edge technology to solve complex problems and drive progress. 
        I specialize in AI, Quantum Computing, and Blockchain, with a vision to create impactful solutions for a better tomorrow.
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
