import { photoAlbums } from "@/app/photos/photos";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { Box, Flex } from "@radix-ui/themes";

const RefinishPage = ({ params }: { params: { id: string } }) => {
  // Find the album that matches the cover photo's id
  const album = photoAlbums.find((a) => a.coverPhoto.id === params.id);

  if (!album) {
    return <div>Album not found</div>;
  }

  // Assume the first photo in afterPhotos is the "after" for the first "before" photo, and so on.
  const photoPairs = album.beforePhotos?.map((beforePhoto, idx) => ({
    before: beforePhoto,
    after: album.afterPhotos[idx] || null,
  }));

  return (
    <>
      <Flex direction="column" gap={"2"} justify="center">
        {photoPairs &&
          photoPairs.map((pair, idx) => (
            <Box key={idx}>
              {pair.after && (
                <BeforeAfterSlider
                  beforeImage={pair.before.url}
                  afterImage={pair.after.url}
                />
              )}
            </Box>
          ))}
      </Flex>
    </>
  );
};

export default RefinishPage;
