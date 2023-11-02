type Photo = {
  id: string;
  url: string;
  name?: string;
  style?: string;
};

export type PhotoAlbum = {
  coverPhoto: Photo;
  photos: Photo[];
};

export const photoAlbums: PhotoAlbum[] = [
  {
    coverPhoto: {
      id: "1",
      url: "/photos/refinish/4.jpg",
      name: "refinish",
      style: "modern",
    },
    photos: [
      { id: "2", url: "/photos/refinish/1.jpg" },
      { id: "3", url: "/photos/refinish/2.jpg" },
      { id: "4", url: "/photos/refinish/3.jpg" },
      { id: "5", url: "/photos/refinish/4.jpg" },
      { id: "6", url: "/photos/refinish/5.jpg" },
      { id: "7", url: "/photos/refinish/6.jpg" },
    ],
  },
];
