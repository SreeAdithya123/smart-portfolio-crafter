
import { Hero } from "@/components/Hero";
import { ResumeForm } from "@/components/ResumeForm";
import { ResumePreview } from "@/components/ResumePreview";
import { useState } from "react";

const Index = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <Hero />
      
      <div className="container px-4 mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="h2">Create Your Resume</h2>
            <ResumeForm />
          </div>
          
          <div className="space-y-6">
            <h2 className="h2">Preview</h2>
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
