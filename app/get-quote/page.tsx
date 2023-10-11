"use client";
import * as Form from "@radix-ui/react-form";
import { Button, Container, Flex, TextFieldInput } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GetQuote = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }
    try {
      const res = await fetch("/api/get-quote", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        router.push(`/thank-you?name=${encodeURIComponent(name)}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = ("" + value).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return value;
  };

  const handlePhoneNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  return (
    <Flex justify={"center"} direction={"column"} align={"center"}>
      <h1>Get Quote</h1>
      <Container size={"4"}>
        Container for form
        <Form.Root
          onSubmit={onSubmit}
          className="space-y-4 w-full sm:w-[400px]"
        >
          <Form.Field name="email" className="flex flex-col">
            <Form.Label className="FormLabel">Name</Form.Label>
            <Form.Control asChild>
              <TextFieldInput
                className="Input"
                type="name"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                placeholder="Name"
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name="email" className="flex flex-col">
            <Form.Label className="FormLabel required-field">Email</Form.Label>
            <Form.Control asChild>
              <TextFieldInput
                className="Input"
                type="email"
                required
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Control>
            <Form.Message match="valueMissing">Email is required</Form.Message>
            <Form.Message match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </Form.Field>
          <Form.Field name="phoneNumber" className="flex flex-col">
            <Form.Label className="FormLabel required-field">
              Phone Number
            </Form.Label>
            <Form.Control asChild>
              <TextFieldInput
                className="Input"
                type="tel"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number"
                maxLength={14}
              />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please enter your phone number
            </Form.Message>
            <Form.Message match="typeMismatch">
              Please provide a valid phone number
            </Form.Message>
          </Form.Field>
          <Form.Field name="image" className="flex flex-col">
            <Form.Label className="FormLabel"></Form.Label>
            <Form.Control asChild>
              <Button variant="soft">
                Upload Pictures
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </Button>
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <Button>Submit</Button>
          </Form.Submit>
        </Form.Root>
      </Container>
    </Flex>
  );
};

export default GetQuote;
