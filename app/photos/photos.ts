import { v4 as uuid } from "uuid";

type Photo = {
  id: string;
  url: string;
  name?: string;
  style?: string;
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
      style: "modern",
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,modern2",
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,modern3",
      },
      // ... more photos
    ],
  },
  {
    coverPhoto: {
      id: uuid(),
      url: "https://source.unsplash.com/featured/?kitchen,traditional1",
      name: "remodel",
      style: "traditional",
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,traditional2",
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,traditional3",
      },
      // ... more photos
    ],
  },
  {
    coverPhoto: {
      id: uuid(),
      url: "https://source.unsplash.com/featured/?kitchen,rustic1",
      name: "other",
      style: "rustic",
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,rustic2",
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,rustic3",
      },
      // ... more photos
    ],
  },
  {
    coverPhoto: {
      id: uuid(),
      url: "https://source.unsplash.com/featured/?kitchen,modern4",
      name: "refinish",
      style: "modern",
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,modern5",
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,modern6",
      },
      // ... more photos
    ],
  },
  {
    coverPhoto: {
      id: uuid(),
      url: "https://source.unsplash.com/featured/?kitchen,traditional4",
      name: "remodel",
      style: "traditional",
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,traditional5",
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,traditional6",
      },
      // ... more photos
    ],
  },
  {
    coverPhoto: {
      id: uuid(),
      url: "https://source.unsplash.com/featured/?kitchen,rustic4",
      name: "other",
      style: "rustic",
    },
    photos: [
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,rustic5",
      },
      {
        id: uuid(),
        url: "https://source.unsplash.com/featured/?kitchen,rustic6",
      },
      // ... more photos
    ],
  },
  // ... more albums following this pattern as needed
];
