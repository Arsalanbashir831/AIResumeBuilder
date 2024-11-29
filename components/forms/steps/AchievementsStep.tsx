import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrashIcon, PlusCircleIcon } from "lucide-react";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import AiButton from "@/components/AiButton";
import { AiImproveContent } from "@/app/api/resume";

interface Achievement {
  title: string;
  description: string;
}

interface AchievementsProps {
  achievements: Achievement[];
  onChange: (achievements: Achievement[]) => void;
}

export default function AchievementsStep({
  achievements,
  onChange,
}: AchievementsProps) {
  const [newAchievement, setNewAchievement] = useState<Achievement>({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAddAchievement = () => {
    if (newAchievement.title && newAchievement.description) {
      onChange([...achievements, newAchievement]);
      setNewAchievement({ title: "", description: "" });
    }
  };

  const handleRemoveAchievement = (index: number) => {
    onChange(achievements.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Achievements
        </h3>
        <AiButton
          isDisabled={!newAchievement.description.trim()} // Disable when description is empty
          loading={loading}
          onClick={async () => {
            setLoading(true); // Show loading spinner
            const authToken = localStorage.getItem("accessToken");

            if (!authToken) {
              alert("Authentication token not found. Please login.");
              setLoading(false); // Ensure loading is stopped
              return;
            }

            try {
              const improvedContent = await AiImproveContent(
                { content: newAchievement.description }, 
                authToken
              );

              if (improvedContent) {
                setNewAchievement((prev) => ({
                  ...prev,
                  description: improvedContent,
                }));
              } else {
                alert("Failed to improve content. Please try again.");
              }
            } catch (error) {
              console.error("Error improving content:", error);
              alert("An unexpected error occurred. Please try again.");
            } finally {
              setLoading(false); // Ensure loading is stopped
            }
          }}
          label="AI Improve"
        />
      </div>

      {/* Add New Achievement Form */}
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="mb-4">
            <InputField
              label="Achievement Title"
              value={newAchievement.title}
              onChange={(value) =>
                setNewAchievement({ ...newAchievement, title: value as string })
              }
              placeholder="e.g., Creative Excellence Award"
            />
          </div>
          <div className="mb-4">
            <TextAreaField
              label="Description"
              value={newAchievement.description}
              onChange={(value) =>
                setNewAchievement({ ...newAchievement, description: value })
              }
              placeholder="Describe the achievement"
            />
          </div>
          <Button
            onClick={handleAddAchievement}
            className="w-full text-white flex items-center justify-center"
          >
            <PlusCircleIcon className="mr-2" size={18} />
            Add Achievement
          </Button>
        </CardContent>
      </Card>

      {/* Display List of Achievements */}
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-6 flex justify-between items-start">
              <div className="flex-grow">
                <Badge variant="outline" className="text-primary mb-2">
                  {achievement.title}
                </Badge>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
              <Button
                variant="ghost"
                className="text-red-500 hover:text-red-700 ml-4"
                onClick={() => handleRemoveAchievement(index)}
              >
                <TrashIcon size={18} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
