"use client";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Box, IconButton } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Box top={"0"} left={"0"} pr={"2"}>
      {pathname !== "/" && (
        <IconButton
          className="text-4xl hover:cursor-pointer"
          onClick={() => router.back()}
          style={{ backgroundColor: "transparent" }}
        >
          <ChevronLeftIcon color="black" width={"24px"} height={"24px"} />
        </IconButton>
      )}
    </Box>
  );
};

export default GoBack;
