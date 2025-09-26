import { Wind, BookOpen, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Breathing Exercise",
    subtitle: "4-7-8 guided technique",
    icon: Wind,
    color: "text-blue-500",
  },
  {
    title: "Study Tips",
    subtitle: "Managing academic stress",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    title: "Meditation",
    subtitle: "5-minute calming session",
    icon: Play,
    color: "text-purple-500",
  },
];

export function QuickResources() {
  return (
    <Card className="shadow-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-primary" />
          Quick Resources
        </h3>
        
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start h-auto p-3 hover:bg-muted/50"
            >
              <resource.icon className={`w-5 h-5 mr-3 ${resource.color}`} />
              <div className="text-left">
                <p className="font-medium text-sm">{resource.title}</p>
                <p className="text-xs text-muted-foreground">{resource.subtitle}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}