import { photoAlbums } from "@/app/photos/photos"; // Import your photo albums
import { AspectRatio, Box, Flex } from "@radix-ui/themes";
import Image from "next/image";

const RefinishPage = ({ params }: { params: { id: string } }) => {
  console.log("This is the params", params); // Log the received params

  console.log("Photo albums:", photoAlbums); // Log the photo albums to verify data

  // Find the album that matches the cover photo's id
  const album = photoAlbums.find((a) => a.coverPhoto.id === params.id);

  console.log("Found album:", album);

  if (!album) {
    return <div>Album not found</div>;
  }
  return (
    <Flex direction={"column"} gap={"2"} align={"center"} justify={"center"}>
      {album.photos.map((photo) => (
        <Box
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 p-4 m-2 rounded shadow-lg flex-wrap"
          key={photo.id}
        >
          <AspectRatio ratio={9 / 12}>
            <Image
              src={photo.url}
              alt={photo.name ?? "Photo"}
              style={{ borderRadius: "var(--radius-2)" }}
              fill={true}
              quality={100}
            />
          </AspectRatio>
        </Box>
      ))}
    </Flex>
  );
};

export default RefinishPage;
