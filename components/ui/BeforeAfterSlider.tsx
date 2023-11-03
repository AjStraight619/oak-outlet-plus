"use client";
import { AspectRatio, Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

type BeforeAfterSliderProps = {
  beforeImage?: string;
  afterImage: string;
};

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) => {
  const hasBeforeImage = !!beforeImage;
  const [isBeforeImage, setIsBeforeImage] = useState(false);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => hasBeforeImage && setIsBeforeImage(true),
    onSwipedRight: () => setIsBeforeImage(false),
    trackMouse: true,
  });

  const currentImageSrc = isBeforeImage ? beforeImage : afterImage;
  const imageIndicator = hasBeforeImage
    ? isBeforeImage
      ? "2/2"
      : "1/2"
    : "1/1";

  return (
    <Flex align={"center"} justify={"center"}>
      <Box
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 p-4 m-2 rounded shadow-lg relative flex-wrap mb-2"
        {...swipeHandlers}
      >
        <Text
          as="div"
          className="text-xs text-gray-400 font-semibold absolute top-0 right-5 z-10"
        >
          {imageIndicator}
        </Text>
        <AspectRatio ratio={9 / 12}>
          <Image
            src={currentImageSrc ?? ""}
            alt="Sliding Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </AspectRatio>
      </Box>
    </Flex>
  );
};

export default BeforeAfterSlider;
