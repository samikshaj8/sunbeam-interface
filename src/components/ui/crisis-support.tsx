import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CrisisSupport() {
  return (
    <Card className="bg-emergency text-emergency-foreground border-none shadow-elegant">
      <div className="p-6 text-center">
        <div className="mb-4">
          <AlertTriangle className="w-8 h-8 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
          <p className="text-sm opacity-90 mb-4">
            If you're in crisis, don't wait. Reach out now.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white"
          >
            Call Crisis Helpline
          </Button>
          
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Phone className="w-4 h-4" />
            <span className="font-mono">1800-599-0019 (24/7)</span>
          </div>
        </div>
      </div>
    </Card>
  );
}