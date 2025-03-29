
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface HeaderProps {
  currentUser: { id: string; name: string } | null;
  onLogin: (name: string) => void;
}

export default function Header({ currentUser, onLogin }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleLogin = () => {
    if (name.trim() === "") {
      toast({
        title: "Please enter your name",
        description: "We need your name to track your likes",
        variant: "destructive",
      });
      return;
    }
    
    onLogin(name);
    setIsOpen(false);
    toast({
      title: "Welcome!",
      description: `Hello, ${name}! You can now like tutorials.`,
    });
  };

  return (
    <header className="sticky top-0 z-10 border-b bg-craft-beige/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-craft-brown">SimpleCraft</h1>
        </div>
        <div>
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-craft-brown">Hello, {currentUser.name}</span>
            </div>
          ) : (
            <Button 
              onClick={() => setIsOpen(true)}
              className="bg-craft-terracotta hover:bg-craft-clay"
            >
              Enter Your Name
            </Button>
          )}

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Enter your name</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="focus-visible:ring-craft-terracotta"
                />
              </div>
              <DialogFooter>
                <Button 
                  onClick={handleLogin}
                  className="bg-craft-terracotta hover:bg-craft-clay"
                >
                  Continue
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
