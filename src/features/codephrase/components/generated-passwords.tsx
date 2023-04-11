import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";

import { Button } from "@/components/button";
import { InputField } from "@/components/form";
import { generateSentences } from "@/utils/generateSentences";

export const GeneratedPasswords = () => {
  const [passphrases, setPassphrases] = useState<string[]>();

  const handleGeneratePassphrasesOnClick = async () => {
    generateSentences({delimiter: "-"}).then((sentences) => {
      if (sentences) setPassphrases(sentences);
    });
  };

  return (
    <Stack spacing="8" w="full">
      <Button onClick={handleGeneratePassphrasesOnClick} variant="solid">
        Generate New Passphrases
      </Button>
      {passphrases?.map((passphrase, index) => (
        <InputField
          key={index}
          type="text"
          variant="flushed"
          size="lg"
          value={passphrase}
          isReadOnly
        />
      ))}
    </Stack>
  );
};
