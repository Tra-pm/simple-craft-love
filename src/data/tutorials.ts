
import { Tutorial } from "@/types";

export const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Macramé Plant Hanger",
    description: "Create a beautiful hanging planter for your indoor plants using simple knot techniques.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    isVideo: false,
    category: "Home Decor",
    likes: ["user1", "user2", "user3"],
    steps: [
      {
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
        description: "Cut 8 pieces of rope, each 3 meters long."
      },
      {
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
        description: "Fold the ropes in half and use a larks head knot to attach to a ring."
      },
      {
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
        description: "Create square knots in alternating patterns."
      }
    ]
  },
  {
    id: "2",
    title: "Hand-Knit Cozy Blanket",
    description: "Knit a warm, chunky blanket perfect for cold evenings with this beginner-friendly pattern.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    isVideo: false,
    category: "Textile",
    likes: ["user2"],
    steps: [
      {
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        description: "Gather your chunky yarn and large knitting needles."
      },
      {
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        description: "Cast on 40 stitches for a medium-sized blanket."
      },
      {
        image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        description: "Knit in garter stitch (knit every row) until desired length."
      }
    ]
  },
  {
    id: "3",
    title: "Pressed Flower Bookmarks",
    description: "Preserve the beauty of flowers by creating delicate bookmarks with pressed blooms.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    isVideo: true,
    category: "Paper Crafts",
    likes: ["user1", "user3"],
    steps: [
      {
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Collect small flowers and leaves to press."
      },
      {
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Press flowers between heavy books for 1-2 weeks."
      },
      {
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        description: "Arrange dried flowers on cardstock and laminate."
      }
    ]
  },
  {
    id: "4",
    title: "Clay Plant Pots",
    description: "Hand-sculpt and paint unique terracotta pots for your favorite plants.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    isVideo: false,
    category: "Ceramics",
    likes: [],
    steps: [
      {
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        description: "Start with air-dry clay and form into a ball."
      },
      {
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        description: "Use your thumb to create a hollow center and shape the pot."
      },
      {
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        description: "Let dry for 24-48 hours, then paint with acrylic paints."
      }
    ]
  },
  {
    id: "5",
    title: "DIY Beeswax Candles",
    description: "Craft natural, honey-scented candles using pure beeswax sheets.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    isVideo: true,
    category: "Home Decor",
    likes: ["user1"],
    steps: [
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        description: "Purchase beeswax sheets and cotton wicks."
      },
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        description: "Place wick along edge of wax sheet and roll tightly."
      },
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        description: "Press edges firmly to seal and trim wick to 1/4 inch."
      }
    ]
  }
];

export const users = [
  { id: "user1", name: "Emma" },
  { id: "user2", name: "Oliver" },
  { id: "user3", name: "Sophia" }
];
