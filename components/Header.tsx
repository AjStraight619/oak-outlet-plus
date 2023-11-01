import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import GetQuoteButton from "./get-a-quote/GetQuoteButton";
import ContactButtons from "./ui/contact-buttons/ContactButtons";
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

        <ContactButtons />
      </Flex>
    </>
  );
};

export default Header;
