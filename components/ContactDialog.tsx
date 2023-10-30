import {
  Cross2Icon,
  EnvelopeClosedIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Button, Dialog, Flex, IconButton } from "@radix-ui/themes";

const ContactDialog = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:Nickatz5@yahoo.com?subject=Inquiry&body=Hi, I would like to inquire about...";
  };
  const handlePhoneCallClick = () => {
    window.location.href = "tel:+1234567890"; // Replace with your phone number
  };
  const handleTextMessageClick = () => {
    window.location.href = "sms:+1234567890"; // Replace with your phone number
  };

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
              <EnvelopeClosedIcon onClick={handleEmailClick} />
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
