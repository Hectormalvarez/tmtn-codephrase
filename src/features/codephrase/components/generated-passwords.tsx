import React from "react";

import { Button } from "@/components/button";
import { InputField } from "@/components/form";

import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


export const GeneratedPasswords = () => {
  return (
    <>
      <Button type="submit" variant="solid">
        Generate New Passphrases
      </Button>
      <InputGroup>
        <InputField
          type="text"
          variant="flushed"
          size="lg"
          value="test"
          isReadOnly
        />
        <InputRightElement>
          <Button variant="solid">Copy</Button>
        </InputRightElement>
      </InputGroup>
      <InputField
        type="text"
        variant="flushed"
        size="lg"
        value="test"
        isReadOnly
      />
      <InputField
        type="text"
        variant="flushed"
        size="lg"
        value="test"
        isReadOnly
      />
      <InputField
        type="text"
        variant="flushed"
        size="lg"
        value="test"
        isReadOnly
      />
      <InputField
        type="text"
        variant="flushed"
        size="lg"
        value="test"
        isReadOnly
      />
    </>
  );
};
