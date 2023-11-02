"use client";
import { sendEmail } from "@/app/actions/actions";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { Cross2Icon, FilePlusIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Box,
  Button,
  Flex,
  Separator,
  Text,
  TextArea,
  TextFieldInput,
} from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

const GetQuote = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [files, setFiles] = useState<File[] | null>(null);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState<boolean[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempFileNames, setTempFileNames] = useState<string[]>([]);
  const [originalFileExtensions, setOriginalFileExtensions] = useState<
    string[]
  >([]);

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
    const newFiles = e.target.files;

    if (newFiles) {
      // Calculate the total number of files, accounting for the possibility that 'files' is null
      const totalFiles = (files ? files.length : 0) + newFiles.length;

      if (totalFiles > 6) {
        setIsDialogOpen(true);
        return;
      }

      setFiles((prevFiles) => {
        const newFilesArray = Array.from(newFiles);
        if (prevFiles) {
          return [...prevFiles, ...newFilesArray];
        }
        return newFilesArray;
      });
      const newFileExtensions = Array.from(newFiles).map((file) =>
        getFileExtension(file.name)
      );
      setOriginalFileExtensions((prevExtensions) => [
        ...prevExtensions,
        ...newFileExtensions,
      ]);
    } else {
      setFiles(null);
    }
  };

  const handleFileButtonClick = () => {
    if (fileInputRef?.current) fileInputRef.current.click();
  };

  const handleRemovePhoto = (index: number) => {
    if (files && originalFileExtensions) {
      const updatedFiles = files.filter((_, i) => i !== index);
      const updatedExtensions = originalFileExtensions.filter(
        (_, i) => i !== index
      );
      setFiles(updatedFiles);
      setOriginalFileExtensions(updatedExtensions);
    }
  };

  const handleToggleEdit = (index: number) => {
    console.log("handleToggleEdit is called on index", index);
    const newIsEditing = [...isEditing];
    newIsEditing[index] = !newIsEditing[index];
    setIsEditing(newIsEditing);
  };

  const handleBlur = (index: number) => {
    console.log("handleBlur is called on index", index);
    if (!files || !originalFileExtensions) return;
    const newIsEditing = [...isEditing];
    newIsEditing[index] = false;
    setIsEditing(newIsEditing);

    const currentFileName = files[index].name;
    let originalExtension = originalFileExtensions[index];
    originalExtension = originalExtension.startsWith(".")
      ? originalExtension.slice(1)
      : originalExtension;
    const nameWithoutExtension = removeExtension(currentFileName);
    const updatedFileName = `${nameWithoutExtension}.${originalExtension}`;
    const updatedFile = new File([files[index]], updatedFileName, {
      type: files[index].type,
    });
    const updatedFiles = files.slice();
    updatedFiles[index] = updatedFile;
    setFiles(updatedFiles);
  };

  const removeExtension = (filename: string): string => {
    return filename.slice(0, filename.lastIndexOf("."));
  };
  const handleRenameFile = (index: number, newName: string) => {
    if (files) {
      const updatedFiles = files.slice();
      updatedFiles[index] = renameFile(files[index], newName);
      setFiles(updatedFiles);
    }
  };

  const renameFile = (file: File, newName: string): File => {
    const newFile = new File([file], newName, { type: file.type });
    return newFile;
  };
  const getFileExtension = (filename: string): string => {
    return filename.slice(filename.lastIndexOf(".") >>> 0); // Include the dot
  };

  useEffect(() => {
    if (files) {
      console.log("these are the current files", files);
    }
  }, [files]);

  return (
    <>
      <Flex
        direction="column"
        justify="start"
        align="center"
        height={"100%"}
        mt={"2"}
        width={"100%"}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          p={"4"}
          style={{
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "xl",
            maxWidth: "600px",
          }}
        >
          <Flex direction="column" width="100%" p={"4"}>
            <form
              className="w-full"
              action={async (formData) => {
                formData.append("name", name);
                formData.append("email", email);
                formData.append("phoneNumber", phoneNumber);
                formData.append("description", description);
                if (files) {
                  for (let i = 0; i < files.length; i++) {
                    formData.append("files", files[i]);
                  }
                }

                try {
                  await sendEmail(formData);
                  router.push(`/thank-you?name=${encodeURIComponent(name)}`);
                } catch (error) {
                  alert("Something went wrong. Please try again.");
                  console.log(error);
                }
              }}
            >
              <Flex direction="column" gap="3" justify="center" align="center">
                <Box className="justify-start">
                  <label htmlFor="name" className="text-gray-400 text-sm">
                    Name
                  </label>

                  <TextFieldInput
                    style={{ width: "100%" }}
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>

                <Box className="justify-start">
                  <label htmlFor="email" className="text-gray-400 text-sm">
                    Email<span className="text-red-500"> *</span>
                  </label>
                  <TextFieldInput
                    style={{ width: "100%" }}
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
                <Box className="justify-start">
                  <label htmlFor="email" className="text-gray-400 text-sm">
                    Phone Number<span className="text-red-500"> *</span>
                  </label>
                  <TextFieldInput
                    style={{ width: "100%" }}
                    placeholder="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    required
                    onChange={(e) => handlePhoneNumberChange(e)}
                    maxLength={14}
                  />
                </Box>
                <Box className="justify-start w-full">
                  <label
                    htmlFor="description"
                    className="text-gray-400 text-sm"
                  >
                    Description
                  </label>
                  <Flex width={"100%"}>
                    <TextArea
                      size={"2"}
                      placeholder="Describe your kitchen project (e.g., refinishing cabinets, new countertops)."
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      style={{ width: "100%" }} // Adjust the percentage as needed
                    />
                  </Flex>
                </Box>

                <Flex
                  direction={"column"}
                  width={"100%"}
                  align={"center"}
                  pt={"3"}
                >
                  <Text className="text-start text-xs text-gray-400">
                    Optional: Upload photos of your kitchen
                  </Text>

                  <Separator orientation="horizontal" size={"4"} />
                </Flex>

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
                  color="gray"
                >
                  <FilePlusIcon />
                  Add Photos
                </Button>

                {/* Displaying uploaded file names and previews */}
                <Flex
                  direction="column"
                  gap="2"
                  mt="3"
                  mb={"3"}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  {files &&
                    files.map((file, index) => (
                      <Flex key={index} align="center" gap="2">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          width={40}
                          height={40}
                          blurDataURL={URL.createObjectURL(file)}
                        />
                        <Box style={{ width: "150px" }}>
                          {isEditing[index] ? (
                            <TextFieldInput
                              type="text"
                              value={file.name}
                              onChange={(e) =>
                                handleRenameFile(index, e.target.value)
                              }
                              onBlur={() => handleBlur(index)}
                            />
                          ) : (
                            <span onClick={() => handleToggleEdit(index)}>
                              {file.name}
                            </span>
                          )}
                        </Box>
                        <Cross2Icon
                          className="hover:cursor-pointer"
                          onClick={() => handleRemovePhoto(index)}
                        />
                      </Flex>
                    ))}
                </Flex>
                <SubmitButton>Get Quote</SubmitButton>
              </Flex>
            </form>
          </Flex>
        </Flex>
        <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Flex direction="column" p="3">
            <AlertDialog.Content>
              A maximum of 6 photos can be uploaded at a time.
              <AlertDialog.Cancel>
                <Box className="bottom-0 left-0 flex justify-end">
                  <Button>Ok</Button>
                </Box>
              </AlertDialog.Cancel>
            </AlertDialog.Content>
          </Flex>
        </AlertDialog.Root>
      </Flex>
    </>
  );
};

export default GetQuote;
