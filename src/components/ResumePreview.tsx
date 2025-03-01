
import { Card } from "@/components/ui/card";

interface ResumePreviewProps {
  data: {
    fullName: string;
    email: string;
    skills: string;
    experience: string;
    education: string;
  };
}

export const ResumePreview = ({ data }: ResumePreviewProps) => {
  return (
    <Card className="p-8 glass-card animate-in print:shadow-none">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center border-b border-white/10 pb-6">
          <h1 className="text-4xl font-display font-semibold mb-3 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {data.fullName || "Your Name"}
          </h1>
          <p className="text-foreground/70">{data.email || "your.email@example.com"}</p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold mb-4 pb-2 border-b border-white/10 text-foreground/90">Skills</h2>
          <p className="text-foreground/70 leading-relaxed">
            {data.skills || "List your key skills and competencies..."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold mb-4 pb-2 border-b border-white/10 text-foreground/90">Experience</h2>
          <div className="text-foreground/70 whitespace-pre-line leading-relaxed">
            {data.experience || "Describe your professional experience..."}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold mb-4 pb-2 border-b border-white/10 text-foreground/90">Education</h2>
          <div className="text-foreground/70 whitespace-pre-line leading-relaxed">
            {data.education || "List your educational background..."}
          </div>
        </div>
      </div>
    </Card>
  );
};
