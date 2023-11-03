"use client";
import { AspectRatio, Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRef, useState } from "react";

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
  const touchStartXRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStartX = e.touches[0].clientX;
    touchStartXRef.current = touchStartX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = touchStartXRef.current;
    const touchDelta = touchEndX - touchStartX;

    const swipeThreshold = 30;
    if (touchDelta < -swipeThreshold && hasBeforeImage) {
      setIsBeforeImage(true);
    } else if (touchDelta > swipeThreshold) {
      setIsBeforeImage(false);
    }
  };

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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
