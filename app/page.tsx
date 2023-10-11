import PictureGallery from "@/components/PictureGallery";
import SidebarMobile from "@/components/SidebarMobile";
import { Box, Flex, Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 min-h-screen">
      <SidebarMobile />

      <Flex pt={"3"} justify={"center"} className="mb-4">
        <Box>
          <Heading>Oak Outlet Plus</Heading>
        </Box>
      </Flex>

      <PictureGallery />
    </main>
  );
}
