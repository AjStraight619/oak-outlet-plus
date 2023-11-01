"use client";
import { usePathname, useRouter } from "next/navigation";

const GetQuoteButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {pathname !== "/get-quote" && pathname !== "/thank-you" && (
        <button
          className="hover:cursor-pointer box-border  text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          onClick={() => router.push("/get-quote")}
        >
          Get a Quote!
        </button>
      )}
    </>
  );
};

export default GetQuoteButton;
