"use client";

import { useSearchParams } from "next/navigation";
const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div>
      <h1>Thank you {name} we will get back with you soon!</h1>
    </div>
  );
};

export default ThankYouPage;
