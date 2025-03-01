
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
    <Card className="p-8 glass-card shadow-lg animate-in print:shadow-none">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center border-b pb-6">
          <h1 className="text-4xl font-display font-semibold mb-3">{data.fullName || "Your Name"}</h1>
          <p className="text-gray-600">{data.email || "your.email@example.com"}</p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold mb-4 pb-2 border-b text-primary">Skills</h2>
          <p className="text-gray-600 leading-relaxed">
            {data.skills || "List your key skills and competencies..."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold mb-4 pb-2 border-b text-primary">Experience</h2>
          <div className="text-gray-600 whitespace-pre-line leading-relaxed">
            {data.experience || "Describe your professional experience..."}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold mb-4 pb-2 border-b text-primary">Education</h2>
          <div className="text-gray-600 whitespace-pre-line leading-relaxed">
            {data.education || "List your educational background..."}
          </div>
        </div>
      </div>
    </Card>
  );
};
