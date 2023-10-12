import {
  Cross2Icon,
  EnvelopeClosedIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Button, Dialog, Flex, IconButton } from "@radix-ui/themes";

const ContactDialog = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="surface">Contact Us</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Flex direction={"column"} gap={"1"}>
            <IconButton>
              <MobileIcon />
            </IconButton>
            <IconButton>
              <EnvelopeClosedIcon />
            </IconButton>
          </Flex>
        </Dialog.Content>
        <Dialog.Close>
          <Cross2Icon color="black" />
        </Dialog.Close>
      </Dialog.Root>
    </>
  );
};

export default ContactDialog;
