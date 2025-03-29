
export interface User {
  id: string;
  name: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  image: string;
  isVideo: boolean;
  category: string;
  likes: string[]; // Array of user IDs who liked this tutorial
  steps: {
    image: string;
    description: string;
  }[];
}
