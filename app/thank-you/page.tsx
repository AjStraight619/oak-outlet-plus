"use client";

import { Flex, Heading } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <Flex direction={"column"} gap={"2"} align={"center"} justify={"center"}>
      {name ? (
        <Heading>Thank you {name}, we will get back with you soon!</Heading>
      ) : (
        <Heading>Thank you, we will get back with you soon!</Heading>
      )}
    </Flex>
  );
};

export default ThankYouPage;
