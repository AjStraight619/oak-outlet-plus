"use client";
import { AspectRatio, Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type testObjProps = {
  key?: number;
  image: string;
  description: string;
  price: string;
};

const kitchenImages = [
  "https://source.unsplash.com/400x400/?kitchen,1",
  "https://source.unsplash.com/400x400/?kitchen,2",
  "https://source.unsplash.com/400x400/?kitchen,3",
  "https://source.unsplash.com/400x400/?kitchen,4",
];

const PictureGallery = () => {
  const [products, setProducts] = useState<testObjProps[]>([]);

  useEffect(() => {
    const newProducts = kitchenImages.map((image, index) => ({
      image,
      description: `Beautiful Kitchen ${index + 1}`,
      price: `$${(index + 1) * 1000}`,
    }));
    setProducts(newProducts);
  }, []);
  return (
    <Flex
      direction={"row"}
      gap={"3"}
      wrap={"wrap"}
      align={"center"}
      justify={"center"}
      width={"100%"}
      height={"min-content"}
    >
      {products.map((product, index) => (
        <Box
          key={index}
          className="border border-gray-300 p-4 m-2 rounded shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-wrap"
        >
          <AspectRatio ratio={16 / 9}>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={product.image}
                alt={product.description}
                layout="fill" // This prop will make the Image component fill the dimensions of the parent div
                objectFit="cover"
                style={{
                  borderRadius: "var(--radius-2)",
                }}
              />
            </div>
          </AspectRatio>
          <Text color={"crimson"}>{product.description}</Text>
          <Text color={"crimson"}>{product.price}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default PictureGallery;
