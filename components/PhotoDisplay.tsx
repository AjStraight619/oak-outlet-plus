import Image from "next/image";

const PhotoDisplay = ({ photos }: any) => {
  return (
    <div>
      {photos && photos.length > 0 ? (
        photos.map((photo: any, index: number) => (
          <Image key={index} src={photo.url} alt={`Photo ${index + 1}`} />
        ))
      ) : (
        <p>No photos available</p>
      )}
    </div>
  );
};

export default PhotoDisplay;
