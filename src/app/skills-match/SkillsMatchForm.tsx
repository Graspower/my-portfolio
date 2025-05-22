"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { skillsMatch, type SkillsMatchInput, type SkillsMatchOutput } from "@/ai/flows/skills-match";
import { userSkillsForAI } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, AlertTriangle, Info } from "lucide-react";

const formSchema = z.object({
  projectDescription: z.string().min(20, {
    message: "Project description must be at least 20 characters.",
  }).max(2000, {
    message: "Project description must not exceed 2000 characters."
  }),
});

type SkillsMatchFormValues = z.infer<typeof formSchema>;

export default function SkillsMatchForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [matchedSkills, setMatchedSkills] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<SkillsMatchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: "",
    },
  });

  const onSubmit: SubmitHandler<SkillsMatchFormValues> = async (data) => {
    setIsLoading(true);
    setMatchedSkills(null);
    setError(null);

    const input: SkillsMatchInput = {
      projectDescription: data.projectDescription,
      userSkills: userSkillsForAI,
    };

    try {
      const result: SkillsMatchOutput = await skillsMatch(input);
      setMatchedSkills(result.matchedSkills);
      if (result.matchedSkills.length > 0) {
        toast({
          title: "Skills Matched!",
          description: "Relevant skills have been identified for the project.",
          variant: "default",
        });
      } else {
         toast({
          title: "No Exact Matches",
          description: "No direct skills from your list were found for this project description. Consider broader applications.",
          variant: "default",
        });
      }
    } catch (e) {
      console.error("Skills match error:", e);
      const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
      setError(errorMessage);
      toast({
        title: "Error Matching Skills",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Your Skills Profile</CardTitle>
          <CardDescription>
            This AI tool will match your project description against the following skills:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {userSkillsForAI.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Project Description</CardTitle>
              <CardDescription>
                Enter a description of a project, and the AI will suggest which of your skills are most relevant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="projectDescription" className="sr-only">Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        id="projectDescription"
                        placeholder="e.g., 'Develop a machine learning model to predict customer churn using Python and Scikit-learn...'"
                        className="min-h-[150px] text-base resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Match Skills"
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>

      {error && (
        <Card className="border-destructive bg-destructive/10 shadow-md">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {matchedSkills && !error && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Matched Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            {matchedSkills.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {matchedSkills.map((skill) => (
                  <Badge key={skill} className="text-md px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground">{skill}</Badge>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Info className="h-5 w-5" />
                <p>No specific skills from your profile were identified as a direct match for this project description. The AI analyzes based on the provided list.</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
