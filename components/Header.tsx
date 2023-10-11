import { Flex, Text } from "@radix-ui/themes";

const Header = () => {
  return (
    <Flex
      justify="between"
      align="center"
      className="p-4 border-b border-gray-300"
    >
      <Text size="3" weight="bold">
        Oak Outlet Plus
      </Text>
    </Flex>
  );
};

export default Header;
