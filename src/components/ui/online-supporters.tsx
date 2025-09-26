import { Users, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const supporters = [
  {
    name: "Dr. Sarah M.",
    role: "Counselor",
    status: "Available for chat",
    initials: "SM",
    color: "bg-blue-500",
  },
  {
    name: "Peer Mentor_4521",
    role: "Active supporter",
    status: "Online",
    initials: "PM",
    color: "bg-green-500",
  },
  {
    name: "Anonymous_Helper_987",
    role: "Crisis listener",
    status: "Available",
    initials: "AH",
    color: "bg-purple-500",
  },
];

export function OnlineSupporters() {
  return (
    <Card className="shadow-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Users className="w-5 h-5 mr-2 text-primary" />
            Online Supporters
          </h3>
          <span className="text-sm text-muted-foreground">(12)</span>
        </div>
        
        <div className="space-y-3">
          {supporters.map((supporter, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className={`${supporter.color} text-white text-xs`}>
                  {supporter.initials}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {supporter.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {supporter.role}
                </p>
              </div>
              
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}