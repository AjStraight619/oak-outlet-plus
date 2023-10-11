"use client";
import { Button, Flex } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";

const GetQuoteButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Flex justify={"center"}>
      {pathname !== "/get-quote" && (
        <Button
          className="hover:cursor-pointer"
          onClick={() => router.push("/get-quote")}
        >
          Get a Quote!
        </Button>
      )}
    </Flex>
  );
};

export default GetQuoteButton;
