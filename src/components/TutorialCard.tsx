
import { useState } from "react";
import { Heart } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tutorial, User } from "@/types";
import { useToast } from "@/components/ui/use-toast";

interface TutorialCardProps {
  tutorial: Tutorial;
  onLike: (tutorialId: string) => void;
  users: User[];
  currentUser: User | null;
}

export default function TutorialCard({ 
  tutorial, 
  onLike, 
  users,
  currentUser 
}: TutorialCardProps) {
  const [showLikes, setShowLikes] = useState(false);
  const { toast } = useToast();
  
  const likedUsers = users.filter(user => tutorial.likes.includes(user.id));
  const isLiked = currentUser ? tutorial.likes.includes(currentUser.id) : false;

  const handleLikeClick = () => {
    if (!currentUser) {
      toast({
        title: "Please enter your name first",
        description: "You need to enter your name to like tutorials",
        variant: "destructive",
      });
      return;
    }
    
    onLike(tutorial.id);
    
    if (!isLiked) {
      toast({
        title: "Tutorial liked!",
        description: `You liked "${tutorial.title}"`,
      });
    }
  };

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={tutorial.image} 
            alt={tutorial.title} 
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {tutorial.isVideo && (
            <div className="absolute right-2 top-2">
              <Badge variant="secondary" className="bg-white/80 text-black">Video</Badge>
            </div>
          )}
          <div className="absolute left-2 top-2">
            <Badge className="bg-craft-sage text-white">{tutorial.category}</Badge>
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{tutorial.title}</CardTitle>
          <CardDescription>{tutorial.description}</CardDescription>
        </CardHeader>
        
        <CardFooter className="flex items-center justify-between pt-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-0 hover:bg-transparent"
            onClick={() => tutorial.likes.length > 0 && setShowLikes(true)}
          >
            <span className="text-sm text-muted-foreground">
              {tutorial.likes.length} {tutorial.likes.length === 1 ? 'like' : 'likes'}
            </span>
          </Button>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`transition-all ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                  onClick={handleLikeClick}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current animate-heart-beat' : ''}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isLiked ? 'Unlike' : 'Like'} this tutorial</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>

      <Dialog open={showLikes} onOpenChange={setShowLikes}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>People who liked this tutorial</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {likedUsers.length > 0 ? (
              <ul className="space-y-2">
                {likedUsers.map(user => (
                  <li key={user.id} className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-craft-terracotta text-white">
                      {user.name.charAt(0)}
                    </div>
                    <span>{user.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground">No likes yet</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
