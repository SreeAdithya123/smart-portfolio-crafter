
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ResumeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card className="p-6 glass-card shadow-lg animate-in">
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-white/50 border-gray-200 focus:border-primary"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/50 border-gray-200 focus:border-primary"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills" className="text-gray-700">Skills</Label>
          <Textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="bg-white/50 border-gray-200 focus:border-primary min-h-[100px] resize-none"
            placeholder="Enter your skills (e.g., JavaScript, React, Node.js)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience" className="text-gray-700">Experience</Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="bg-white/50 border-gray-200 focus:border-primary min-h-[150px] resize-none"
            placeholder="Describe your work experience&#10;&#10;Example:&#10;Senior Developer at Tech Co&#10;- Led team of 5 developers&#10;- Implemented new features"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="education" className="text-gray-700">Education</Label>
          <Textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="bg-white/50 border-gray-200 focus:border-primary min-h-[100px] resize-none"
            placeholder="Enter your educational background&#10;&#10;Example:&#10;BS in Computer Science&#10;University of Technology (2018-2022)"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Generate Resume
          </button>
          <button
            type="button"
            className="flex-1 px-8 py-3 rounded-full bg-secondary text-primary font-medium hover:bg-secondary/80 transition-colors"
          >
            Download PDF
          </button>
        </div>
      </form>
    </Card>
  );
};
