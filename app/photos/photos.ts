type Photo = {
  id?: string;
  url: string;
  name?: string;
  style?: string;
};

export type PhotoAlbum = {
  coverPhoto: Photo;
  afterPhotos: Photo[];
  beforePhotos?: Photo[];
};

export const photoAlbums: PhotoAlbum[] = [
  {
    coverPhoto: {
      id: "1",
      url: "/photos/refinish/kitchen1/4.jpg",
      name: "refinish",
      style: "modern",
    },
    afterPhotos: [
      { url: "/photos/refinish/kitchen1/1.jpg" },
      { url: "/photos/refinish/kitchen1/2.jpg" },
      { url: "/photos/refinish/kitchen1/3.jpg" },
      { url: "/photos/refinish/kitchen1/4.jpg" },
      { url: "/photos/refinish/kitchen1/5.jpg" },
      { url: "/photos/refinish/kitchen1/6.jpg" },
    ],
    beforePhotos: [
      {
        url: "/photos/refinish/kitchen1/before-1.jpg",
      },
      {
        url: "/photos/refinish/kitchen1/before-2.jpg",
      },
      {
        url: "/photos/refinish/kitchen1/before-3.jpg",
      },
      {
        url: "/photos/refinish/kitchen1/before-4.jpg",
      },
    ],
  },
  {
    coverPhoto: {
      id: "2",
      url: "/photos/refinish/kitchen2/4.jpg",
      name: "refinish",
      style: "modern",
    },
    afterPhotos: [
      { url: "/photos/refinish/kitchen2/1.jpg" },
      { url: "/photos/refinish/kitchen2/2.jpg" },
      { url: "/photos/refinish/kitchen2/3.jpg" },
      { url: "/photos/refinish/kitchen2/4.jpg" },
      { url: "/photos/refinish/kitchen2/5.jpg" },
    ],
  },
];
