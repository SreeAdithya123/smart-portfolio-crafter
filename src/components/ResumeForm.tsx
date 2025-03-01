
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
    <Card className="p-6 glass-card animate-in">
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-white/50"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/50"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills">Skills</Label>
          <Textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="bg-white/50 min-h-[100px]"
            placeholder="Enter your skills (separated by commas)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Experience</Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="bg-white/50 min-h-[150px]"
            placeholder="Describe your work experience"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="education">Education</Label>
          <Textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="bg-white/50 min-h-[100px]"
            placeholder="Enter your educational background"
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          Generate Resume
        </button>
      </form>
    </Card>
  );
};
