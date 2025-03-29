
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-craft-cream">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-craft-terracotta">404</h1>
        <p className="mb-6 text-xl text-craft-brown">
          Oops! This craft tutorial couldn't be found
        </p>
        <Button 
          asChild
          className="bg-craft-terracotta hover:bg-craft-clay"
        >
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
