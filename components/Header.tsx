import { Box, Flex } from "@radix-ui/themes";
import GoBack from "./GoBack";
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
        <Box pr={"2"}>
          <GoBack />
        </Box>

        <GetQuoteButton />
        <Flex grow={"1"} />
        <ContactButtons />
      </Flex>
    </>
  );
};

export default Header;
