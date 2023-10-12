"use client";
import "@/public/Facebook.png";
import {
  HamburgerMenuIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SidebarMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="absolute top-4 right-4 md:hidden">
        <IconButton
          onClick={handleSidebarToggle}
          style={{ background: "transparent" }}
        >
          <HamburgerMenuIcon className="hover: cursor-pointer" color="black" />
        </IconButton>
      </div>
      {isSidebarOpen ? (
        <Flex
          direction={"column"}
          grow={"1"}
          className="bg-gray-200 p-4 transition-all duration-300 ease-in-out transform translate-x-0"
        >
          <Text size="2" className="mb-2">
            <Link href="/get-quote">Get Quote</Link>
          </Text>
          <Text size="2" className="mb-2">
            <Link href="#portfolio">Portfolio</Link>
          </Text>

          <Text size="2" className="mb-2">
            <Link href="#about">About Us</Link>
          </Text>

          <Text size="4" className="mt-8 mb-4">
            <Link href="">Contact Us</Link>
          </Text>

          <Text size="4" className="mt-8 mb-4">
            Follow Us
          </Text>
          <Flex direction={"row"} gap={"2"} align={"center"}>
            <Link href="" className="text-xl">
              <Image
                height={"15"}
                width={"15"}
                src="/Facebook.png"
                alt="Facebook Logo"
              />
            </Link>
            <Link href="" className="text-xl">
              <TwitterLogoIcon />
            </Link>
            <Link href="" className="text-xl">
              <InstagramLogoIcon />
            </Link>
          </Flex>
        </Flex>
      ) : null}
    </>
  );
};

export default SidebarMobile;
