"use client";
import { Button } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";

const GetQuoteButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {pathname !== "/get-quote" && pathname !== "/thank-you" && (
        <Button
          className="hover: cursor-pointer"
          onClick={() => router.push("/get-quote")}
        >
          Get a Quote!
        </Button>
      )}
    </>
  );
};

export default GetQuoteButton;
