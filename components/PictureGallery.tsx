"use client";
import { PhotoAlbum, photoAlbums } from "@/app/photos/photos";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Box,
  Button,
  DropdownMenu,
  Flex,
  Separator,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const categories = ["refinish", "remodel", "other"];

const PictureGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("refinish");
  const [filteredAlbums, setFilteredAlbums] = useState<PhotoAlbum[]>([]);
  const [style, setStyle] = useState("modern");
  const router = useRouter();

  useEffect(() => {
    const filtered = photoAlbums.filter(
      (album) =>
        album.coverPhoto.name === selectedCategory &&
        album.coverPhoto.style === style
    );

    console.log("Cover photo id", filtered[0].coverPhoto.id);
    setFilteredAlbums(filtered);
  }, [selectedCategory, style]);

  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        width={"100%"}
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

              <Separator orientation="vertical" />
            </>
          ))}

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                <Text size={"1"}>
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </Text>
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onSelect={() => setStyle("modern")}>
                Modern
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => setStyle("traditional")}>
                Traditional
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => setStyle("rustic")}>
                Rustic
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>

        <Flex justify={"between"} width={"100%"} direction={"column"} mt={"2"}>
          <Flex justify={"between"} align={"center"} width={"100%"} gap="3">
            <Box className="flex-1 mb-2 text-center">
              <Text size={"1"} color={"gray"}>
                {selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)}
              </Text>
            </Box>

            <Box className="flex-1 mb-2 text-center">
              <Text size={"1"} color={"gray"}>
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </Text>
            </Box>
          </Flex>
          <Separator orientation="horizontal" size={"4"} />
        </Flex>

        <Flex
          direction={"row"}
          gap={"3"}
          wrap={"wrap"}
          align={"center"}
          justify={"center"}
          className="w-full"
          mt={"2"}
        >
          {filteredAlbums.map((album) => (
            <Box
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 p-4 m-2 rounded shadow-lg flex-wrap "
              key={album.coverPhoto.id}
            >
              <AspectRatio ratio={9 / 12}>
                <Image
                  className="hover: cursor-pointer"
                  onClick={() =>
                    router.push(`/${selectedCategory}/${album.coverPhoto.id}`)
                  }
                  src={album.coverPhoto.url}
                  alt={"Cover Photo"}
                  style={{ borderRadius: "var(--radius-2)" }}
                  fill={true}
                  quality={100}
                />
              </AspectRatio>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default PictureGallery;
