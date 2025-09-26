import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ShareThoughts } from "@/components/ui/share-thoughts";
import { PostCard } from "@/components/ui/post-card";
import { CrisisSupport } from "@/components/ui/crisis-support";
import { OnlineSupporters } from "@/components/ui/online-supporters";
import { QuickResources } from "@/components/ui/quick-resources";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <ShareThoughts />
              
              {/* AI Insight */}
              <PostCard
                type="insight"
                author="AI Insight"
                timeAgo="Now"
                content="Many students are discussing exam stress today. Consider trying the breathing exercises in our Resources section."
                avatarColor="bg-accent"
                supportCount={0}
                replyCount={0}
              />
              
              {/* Student Posts */}
              <PostCard
                author="Anonymous_Student_4891"
                timeAgo="2 hours ago"
                content="I have 5 assignments due next week and I can't seem to focus on any of them. Every time I sit down to study, my mind just goes blank. Has anyone else felt like this? How did you get through it?"
                badge="Feeling Overwhelmed"
                badgeVariant="outline"
                avatarColor="bg-red-500"
                supportCount={24}
                replyCount={8}
              />
              
              <PostCard
                author="Anonymous_Mentor_2347"
                timeAgo="4 hours ago"
                content="Remember: It's okay to not be okay. Your struggles are valid, and seeking help is a sign of strength, not weakness. Take it one day at a time. 💙"
                badge="Supportive"
                badgeVariant="default"
                avatarColor="bg-teal-500"
                supportCount={156}
                replyCount={23}
              />
            </div>
            
            {/* Right Column - Support & Resources */}
            <div className="space-y-6">
              <CrisisSupport />
              <OnlineSupporters />
              <QuickResources />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
