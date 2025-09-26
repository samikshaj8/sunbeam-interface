import { Heart, MessageCircle, Flag, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  author: string;
  timeAgo: string;
  content: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  avatarColor: string;
  supportCount: number;
  replyCount: number;
  type?: "insight" | "post";
}

export function PostCard({ 
  author, 
  timeAgo, 
  content, 
  badge,
  badgeVariant = "secondary",
  avatarColor,
  supportCount,
  replyCount,
  type = "post"
}: PostCardProps) {
  const isInsight = type === "insight";
  
  return (
    <Card className={`shadow-card ${isInsight ? 'bg-primary text-primary-foreground' : ''}`}>
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarFallback className={`${avatarColor} text-white`}>
              {author.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm">{author}</span>
                <span className={`text-xs ${isInsight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {timeAgo}
                </span>
                {badge && (
                  <Badge variant={badgeVariant} className="text-xs">
                    {badge}
                  </Badge>
                )}
              </div>
              
              {isInsight && (
                <div className="flex items-center space-x-1">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-xs font-medium">AI Insight</span>
                </div>
              )}
            </div>
            
            <p className={`text-sm leading-relaxed mb-4 ${isInsight ? 'text-primary-foreground/90' : 'text-foreground'}`}>
              {content}
            </p>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`h-8 ${isInsight ? 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Heart className="w-4 h-4 mr-1" />
                {supportCount} Support
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className={`h-8 ${isInsight ? 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                {replyCount} Replies
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className={`h-8 ${isInsight ? 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Flag className="w-4 h-4 mr-1" />
                Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}