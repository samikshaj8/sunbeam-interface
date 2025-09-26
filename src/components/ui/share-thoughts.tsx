import { MessageCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ShareThoughts() {
  return (
    <Card className="shadow-card border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
      <div className="p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
            <MessageCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Share Your Thoughts Anonymously</h3>
          <p className="text-muted-foreground">
            Your identity is completely protected. Share what's on your mind.
          </p>
        </div>
        
        <div className="space-y-4">
          <Textarea 
            placeholder="What's on your mind? Share your thoughts, concerns, or experiences..."
            className="min-h-[120px] resize-none border-muted"
          />
          <Button className="w-full" size="lg">
            <Send className="w-4 h-4 mr-2" />
            Share Anonymously
          </Button>
        </div>
      </div>
    </Card>
  );
}