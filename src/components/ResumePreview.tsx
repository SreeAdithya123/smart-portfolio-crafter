
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
        <div className="text-center">
          <h1 className="text-3xl font-display font-semibold mb-2">{data.fullName || "Your Name"}</h1>
          <p className="text-gray-600">{data.email || "your.email@example.com"}</p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold mb-4 pb-2 border-b">Skills</h2>
          <p className="text-gray-600">
            {data.skills || "List your skills here..."}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold mb-4 pb-2 border-b">Experience</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {data.experience || "Describe your work experience..."}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold mb-4 pb-2 border-b">Education</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {data.education || "List your educational background..."}
          </p>
        </div>
      </div>
    </Card>
  );
};
