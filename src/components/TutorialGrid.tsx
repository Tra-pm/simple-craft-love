
import { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import TutorialCard from "./TutorialCard";
import { Tutorial, User } from "@/types";

interface TutorialGridProps {
  tutorials: Tutorial[];
  onLike: (tutorialId: string) => void;
  users: User[];
  currentUser: User | null;
}

export default function TutorialGrid({ 
  tutorials, 
  onLike, 
  users,
  currentUser 
}: TutorialGridProps) {
  const [category, setCategory] = useState<string>("all");
  
  const categories = ["all", ...new Set(tutorials.map(t => t.category))];
  
  const filteredTutorials = category === "all" 
    ? tutorials 
    : tutorials.filter(t => t.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h2 className="mb-4 text-2xl font-semibold text-craft-brown sm:mb-0">
          Handmade Craft Tutorials
        </h2>
        
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px] border-craft-brown/20 focus:ring-craft-terracotta">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat} className="capitalize">
                {cat === "all" ? "All Categories" : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredTutorials.map(tutorial => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
            onLike={onLike}
            users={users}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
}
