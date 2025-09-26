import { useState } from "react";
import { 
  Home, 
  Users, 
  BookOpen, 
  MessageCircle,
  ChevronDown,
  Brain,
  Frown,
  GraduationCap,
  Heart,
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, label: "My Feed", active: true },
  { icon: Users, label: "Support Groups" },
  { icon: BookOpen, label: "Resources" },
  { icon: MessageCircle, label: "Anonymous Chat" },
];

const topics = [
  { icon: Brain, label: "Anxiety", color: "text-blue-500" },
  { icon: Frown, label: "Depression", color: "text-purple-500" },
  { icon: GraduationCap, label: "Academic Stress", color: "text-orange-500" },
  { icon: Heart, label: "Relationships", color: "text-pink-500" },
  { icon: Users2, label: "Family Issues", color: "text-green-500" },
];

export function Sidebar() {
  const [topicsOpen, setTopicsOpen] = useState(true);

  return (
    <aside className="w-72 bg-sidebar border-r border-sidebar-border h-full">
      <div className="p-6 space-y-6">
        {/* Navigation Section */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Navigation
          </h3>
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  item.active && "bg-primary text-primary-foreground shadow-sm"
                )}
              >
                <item.icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Topics Section */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto font-medium text-muted-foreground mb-3"
            onClick={() => setTopicsOpen(!topicsOpen)}
          >
            <span className="flex items-center text-sm">
              <Brain className="w-4 h-4 mr-2" />
              Topics
            </span>
            <ChevronDown className={cn(
              "w-4 h-4 transition-transform",
              topicsOpen && "rotate-180"
            )} />
          </Button>
          
          {topicsOpen && (
            <nav className="space-y-1">
              {topics.map((topic) => (
                <Button
                  key={topic.label}
                  variant="ghost"
                  className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  <topic.icon className={cn("w-4 h-4 mr-3", topic.color)} />
                  {topic.label}
                </Button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </aside>
  );
}