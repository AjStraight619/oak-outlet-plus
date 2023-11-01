import { Button, Flex, Separator, Text } from "@radix-ui/themes";
import React from "react";

type CategoryButtonProps = {
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

type CategorySelectorProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryButton = ({
  title,
  isSelected,
  onClick,
}: CategoryButtonProps) => (
  <Button
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      color: isSelected ? "crimson" : "black",
      fontWeight: isSelected ? "bold" : "normal",
    }}
  >
    {title}
  </Button>
);

const CategorySelector = ({
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) => {
  return (
    <Text size="2">
      Choose Category:
      <Separator my="3" size="4" />
      <Flex gap="3" align="center">
        {["Remodels", "Refinishes", "Other"].map((category) => (
          <React.Fragment key={category}>
            <CategoryButton
              title={category}
              isSelected={selectedCategory === category}
              onClick={() => onSelectCategory(category)}
            />
            {category !== "Other" && <Separator orientation="vertical" />}
          </React.Fragment>
        ))}
      </Flex>
    </Text>
  );
};

export default CategorySelector;
