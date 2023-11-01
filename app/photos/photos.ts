import { v4 as uuid } from "uuid";

type Photo = {
  id: string;
  url: string;
  name?: string;
  // You can add additional fields like title, description, etc.
};

export type PhotoAlbum = {
  coverPhoto: Photo;
  photos: Photo[];
};

export const photoAlbums: PhotoAlbum[] = [
  {
    coverPhoto: {
      id: uuid(),
      url: "https://source.unsplash.com/featured/?kitchen,modern1",
      name: "refinish",
      // Additional fields like title or description can go here
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,modern2",
        // Additional fields like title or description can go here
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,modern3",
        // Additional fields like title or description can go here
      },
      // ... more photos
    ],
  },
  {
    coverPhoto: {
      id: uuid(),
      url: "https://source.unsplash.com/featured/?kitchen,traditional1",
      name: "remodel",
      // Additional fields like title or description can go here
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,traditional2",
        // Additional fields like title or description can go here
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,traditional3",
        // Additional fields like title or description can go here
      },
      // ... more photos
    ],
  },
  // ... more albums
];
