import SkillsMatchForm from "./SkillsMatchForm";

export default function SkillsMatchPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">AI Skills Match</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover which of my skills align best with your project needs. 
          Describe your project, and let the AI provide insights.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <SkillsMatchForm />
      </section>
    </div>
  );
}
