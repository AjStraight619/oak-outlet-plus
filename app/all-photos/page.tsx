"use client";
import FacebookSDK from "@/components/facebook-sdk/facebook-sdk";
import PhotoDisplayComponent from "@/components/PhotoDisplay";
import { useState } from "react";

const ClientComponent = () => {
  const [photos, setPhotos] = useState(null);

  return (
    <>
      <FacebookSDK setPhotos={setPhotos} />
      {photos && <PhotoDisplayComponent photos={photos} />}
    </>
  );
};

export default ClientComponent;