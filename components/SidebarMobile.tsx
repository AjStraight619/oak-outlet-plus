"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text } from "@radix-ui/themes";
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
          <Text size="4" className="mb-4">
            Navigation
          </Text>
          <Text size="2" className="mb-2">
            <Link href="#services">Services</Link>
          </Text>
          <Text size="2" className="mb-2">
            <Link href="#portfolio">Portfolio</Link>
          </Text>
          <Text size="2" className="mb-2">
            <Link href="#contact">Contact Us</Link>
          </Text>
          <Text size="2" className="mb-2">
            <Link href="#about">About Us</Link>
          </Text>

          <Text size="4" className="mt-8 mb-4">
            Contact
          </Text>
          <Text size="2" className="mb-2">
            Phone: (123) 456-7890
          </Text>
          <Text size="2" className="mb-2">
            Email: info@kitchenremodel.com
          </Text>

          <Text size="4" className="mt-8 mb-4">
            Follow Us
          </Text>
          <div className="flex space-x-4">
            <Link href="" className="text-xl">
              🔵
            </Link>
            <Link href="#twitter" className="text-xl">
              🔷
            </Link>
            <Link href="#instagram" className="text-xl">
              🟥
            </Link>
          </div>
        </Flex>
      ) : null}
    </>
  );
};

export default SidebarMobile;
