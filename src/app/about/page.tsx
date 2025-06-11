import Image from "next/image";
import { SkillBadge } from "@/components/SkillBadge";
import { skills } from "@/config/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A brief introduction to my journey, philosophy, and what drives my passion for technological innovation.
        </p>
      </section>

      <section>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Rocket className="h-8 w-8 text-accent" />
              My Journey & Background
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              From a young age, I've been captivated by the power of technology to transform our world. My academic journey in Artificial intelligence and Cloud computing at Google Cloud skills boost provided a strong foundation, which I've built upon through continuous learning and hands-on experience in various innovative projects.
            </p>
            <p>
              I've had the privilege of working on Matthew Bible AI and Face recognition gate attendance system. These experiences have honed my technical abilities and solidified my commitment to creating technology that is not only powerful but also responsible and beneficial to society.
            </p>
            <p>
              My approach is characterized by a blend of analytical rigor, creative problem-solving, and a collaborative spirit. I thrive in dynamic environments where I can push boundaries and explore uncharted territories in tech.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
           <Zap className="h-8 w-8 text-accent" />
           My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      <section>
         <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Target className="h-8 w-8 text-accent" />
              Passion for Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Technology, for me, is more than just code and circuits; it's a medium for innovation and a catalyst for positive change. I am particularly fascinated by the potential of Artificial intelligence and cloud computing to address some of the world's most pressing challenges, from climate change to healthcare.
            </p>
            <p>
              I believe in a future where technology empowers individuals, fosters collaboration and creates a more equitable and sustainable world. My work is driven by this vision and I am constantly thinking new ways to contribute to this technological frontier. I am intiged by emerging trends and love engaging with tech communities through; conferences, hackathons, writing and open-source contributions.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
