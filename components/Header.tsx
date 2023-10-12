import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import Link from "next/link";
import GetQuoteButton from "./get-a-quote/GetQuoteButton";

const Header = () => {
  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="p-4 border-b border-gray-300"
      >
        <Link href="/">
          <Text size="3" weight="bold">
            Oak Outlet Plus
          </Text>
        </Link>
        <GetQuoteButton />

        <Flex justify={"end"} gap={"2"} pr={"5"} mr={"3"}>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <MobileIcon
              className="text-base hover: cursor-pointer"
              color="black"
            />
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <EnvelopeClosedIcon
              className="text-base hover: cursor-pointer"
              color="black"
            />
          </IconButton>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
