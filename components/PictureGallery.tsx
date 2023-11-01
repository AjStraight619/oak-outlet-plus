"use client";
import { AspectRatio, Box, Button, Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";

import { PhotoAlbum, photoAlbums } from "@/app/photos/photos";
import Image from "next/image";

const categories = ["refinish", "remodel", "other"];

const PictureGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("remodel");
  const [filteredAlbums, setFilteredAlbums] = useState<PhotoAlbum[]>([]);

  useEffect(() => {
    const filtered = photoAlbums.filter(
      (album) => album.coverPhoto.name === selectedCategory
    );
    setFilteredAlbums(filtered);
  }, [selectedCategory]);

  console.log("This is the filtered album", filteredAlbums);

  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        className="w-full"
      >
        <Flex
          gap={"3"}
          wrap={"wrap"}
          align={"center"}
          justify={"center"}
          className="mb-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </Flex>
        <Flex
          direction={"row"}
          gap={"3"}
          wrap={"wrap"}
          align={"center"}
          justify={"center"}
          className="w-full"
        >
          {filteredAlbums.map((album) => (
            <Box
              className="border border-gray-300 p-4 m-2 rounded shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-wrap"
              key={album.coverPhoto.id}
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={album.coverPhoto.url}
                  alt={"Cover Photo"}
                  style={{ borderRadius: "var(--radius-2)" }}
                  height={500}
                  width={500}
                />
              </AspectRatio>
              {/* album details will go here */}
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default PictureGallery;
