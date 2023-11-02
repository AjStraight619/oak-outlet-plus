"use client";
import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";

const ContactButtons = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:Nickatz5@yahoo.com?subject=Inquiry&body=Hi, I would like to inquire about...`;
  };

  const handleTextMessage = () => {
    window.location.href = "sms:+360-633-0999";
  };

  return (
    <Flex gap={"2"} justify={"end"}>
      <IconButton
        style={{ backgroundColor: "transparent" }}
        onClick={handleTextMessage}
      >
        <MobileIcon className="text-base hover: cursor-pointer" color="black" />
      </IconButton>
      <IconButton
        style={{ backgroundColor: "transparent" }}
        onClick={handleEmailClick}
      >
        <EnvelopeClosedIcon
          className="text-base hover: cursor-pointer"
          color="black"
        />
      </IconButton>
    </Flex>
  );
};

export default ContactButtons;
