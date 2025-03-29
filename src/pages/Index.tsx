
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import TutorialGrid from "@/components/TutorialGrid";
import Footer from "@/components/Footer";
import { tutorials as initialTutorials, users as initialUsers } from "@/data/tutorials";
import { Tutorial, User } from "@/types";

const Index = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>(initialTutorials);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Check for saved user in localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("simplecraft-user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (name: string) => {
    // Create a new user or use existing one
    const existingUser = users.find(user => user.name.toLowerCase() === name.toLowerCase());
    
    if (existingUser) {
      setCurrentUser(existingUser);
      localStorage.setItem("simplecraft-user", JSON.stringify(existingUser));
    } else {
      const newUser: User = {
        id: `user${users.length + 1}`,
        name
      };
      
      setUsers(prev => [...prev, newUser]);
      setCurrentUser(newUser);
      localStorage.setItem("simplecraft-user", JSON.stringify(newUser));
    }
  };

  const handleLike = (tutorialId: string) => {
    if (!currentUser) return;
    
    setTutorials(prev => 
      prev.map(tutorial => {
        if (tutorial.id === tutorialId) {
          const isLiked = tutorial.likes.includes(currentUser.id);
          
          if (isLiked) {
            // Unlike: remove user from likes
            return {
              ...tutorial,
              likes: tutorial.likes.filter(id => id !== currentUser.id)
            };
          } else {
            // Like: add user to likes
            return {
              ...tutorial,
              likes: [...tutorial.likes, currentUser.id]
            };
          }
        }
        return tutorial;
      })
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-craft-cream">
      <Header currentUser={currentUser} onLogin={handleLogin} />
      
      <main className="flex-1">
        <TutorialGrid 
          tutorials={tutorials} 
          onLike={handleLike} 
          users={users}
          currentUser={currentUser}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
