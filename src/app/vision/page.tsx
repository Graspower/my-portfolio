import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, Users, Globe } from "lucide-react";

export default function VisionPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">My Vision for the Future</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Outlining my ambitions and how I aim to contribute to the ever-evolving landscape of technology.
        </p>
      </section>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Zap className="h-7 w-7 text-accent" />
              Short-Term Goals (1-3 Years)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground/80 leading-relaxed">
            <p>
              Deepen my expertise in Artificial Inteligence and cloud computing by contributing to cutting-edge research, Innovation and open-source projects.
            </p>
            <p>
              Lead a TIC Community, to learn technical skill, develop and launch innovative products or services in sustainable technology and AI-driven education.
            </p>
            <p>
              Expand my professional network by actively participating in industry conferences, workshops and thought leadership discussions.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <TrendingUp className="h-7 w-7 text-accent" />
              Long-Term Ambitions (5-10 Years)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-foreground/80 leading-relaxed">
            <p>
              Become a remarkable leader and innovator in; Artificial Intelligence and Cloud Computing driving significant advancements and setting new industry standards.
            </p>
            <p>
              Establish or contribute significantly to a venture that tackles a major global challenge using technology, such as Education, Healthcare, Agriculture and Technology innovation.
            </p>
            <p>
              Mentor and inspire the next generation of technologists, fostering a culture of innovation, ethical responsibility, and continuous learning.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Globe className="h-7 w-7 text-accent" />
            Contribution to the Tech Industry
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-foreground/80 leading-relaxed">
          <p>
            I aim to push the boundaries of what's possible, not just through technical breakthroughs, but also by championing ethical considerations and inclusive design principles in technology development.
          </p>
          <p>
            My goal is to contribute to an ecosystem where innovation thrives responsibly, ensuring that technological advancements benefit humanity as a whole and promote a sustainable and equitable future.
          </p>
          <p>
            I plan to actively contribute to open standards, share knowledge through publications & talks, and collaborate with diverse minds to foster a more interconnected and impactful global tech community.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
