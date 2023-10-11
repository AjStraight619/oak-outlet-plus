import { Box, Flex, Text } from "@radix-ui/themes";

const SubHeader = () => {
  return (
    <Flex direction={"column"} wrap={"wrap"}>
      <Box>
        <Text>This is where the subtext is going to be</Text>
      </Box>
    </Flex>
  );
};

export default SubHeader;
