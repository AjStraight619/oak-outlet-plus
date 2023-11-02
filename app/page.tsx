import PictureGallery from "@/components/PictureGallery";
import SubHeader from "@/components/SubHeader";
import { Box, Flex, Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 min-h-screen">
      <Flex
        pt={"3"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        className="mb-4"
      >
        <Box>
          <Heading>Oak Outlet Plus</Heading>
        </Box>
        <SubHeader />
      </Flex>

      <PictureGallery />
    </main>
  );
}
