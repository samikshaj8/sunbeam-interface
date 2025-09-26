import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-gradient-hero border-b border-primary/20 shadow-elegant">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">Psyche</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            Home
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            Communities
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            Resources
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            Profile
          </Button>
        </nav>
      </div>
    </header>
  );
}