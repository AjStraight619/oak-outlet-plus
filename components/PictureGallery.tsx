"use client";
import { PhotoAlbum, photoAlbums } from "@/app/photos/photos";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Separator,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const categories = ["refinish", "remodel", "other"];

const PictureGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("remodel");
  const [filteredAlbums, setFilteredAlbums] = useState<PhotoAlbum[]>([]);
  const router = useRouter();

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
          {categories.map((category, idx) => (
            <>
              <Button
                size={"1"}
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{ backgroundColor: "transparent" }}
              >
                <Text color={selectedCategory === category ? "blue" : "gray"}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Text>
              </Button>
              {idx !== categories.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </>
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
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 p-4 m-2 rounded shadow-lg flex-wrap"
              key={album.coverPhoto.id}
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  onClick={() =>
                    router.push(`/${selectedCategory}/${album.coverPhoto.id}`)
                  }
                  src={album.coverPhoto.url}
                  alt={"Cover Photo"}
                  style={{ borderRadius: "var(--radius-2)" }}
                  fill
                  priority
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
