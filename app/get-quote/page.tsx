"use client";
import { sendEmail } from "@/app/actions/actions";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { FilePlusIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextFieldInput } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const GetQuote = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const formatPhoneNumber = (value: string) => {
    const cleaned = ("" + value).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return value;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleFileButtonClick = () => {
    if (fileInputRef?.current) fileInputRef.current.click();
  };

  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{
          backgroundColor: "#f5f5f5", // Light gray background
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
          maxWidth: "600px",
          margin: "auto",
          padding: "20px",
          borderRadius: "xl",
        }}
        position={"relative"}
      >
        <form
          action={async (formData) => {
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phoneNumber", phoneNumber);
            if (files) {
              for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
              }
            }

            try {
              await sendEmail(formData);
              router.push(`/thank-you?name=${encodeURIComponent(name)}`);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Flex direction="column" gap="2" justify="center" align="center">
            <TextFieldInput
              placeholder="Name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextFieldInput
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextFieldInput
              placeholder="Phone Number"
              name="phoneNumber"
              type="tel"
              value={phoneNumber}
              required
              onChange={(e) => handlePhoneNumberChange(e)}
            />

            <input
              hidden
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/*"
              onChange={(e) => handleFileChange(e)}
            />
            <Button
              className="hover:cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                handleFileButtonClick();
              }}
            >
              <FilePlusIcon />
              Add Photos
            </Button>

            {/* Displaying uploaded file names and previews */}
            <Flex direction="column" gap="2" mt="3">
              {files &&
                Array.from(files).map((file, index) => (
                  <Flex key={index} align="center" gap="2">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{
                        objectFit: "cover",
                      }}
                      width={50}
                      height={50}
                    />
                    <span>{file.name}</span>
                  </Flex>
                ))}
            </Flex>
          </Flex>

          {/* Get Quote Button */}
          <Flex
            justify="end"
            mt="3"
            position={"absolute"}
            bottom={"0"}
            right={"0"}
            p={"2"}
          >
            <SubmitButton>Get Quote</SubmitButton>
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default GetQuote;
