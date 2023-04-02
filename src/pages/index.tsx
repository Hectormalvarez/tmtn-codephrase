import {
  Center,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Seo } from '@/components/seo';
import { GeneratedPasswords } from '@/features/codephrase';

const LandingPage = () => {
  return (
    <>
      <Seo title="CodePhrase Generator" />
      <Center flexDirection="column" h="full">
        <VStack maxW="3xl" spacing="5">
          <Heading size="3xl" paddingTop="132">CodePhrase Generator</Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            color="muted"
          >
            Memorable Passwords Are More Secure
          </Text>
          <GeneratedPasswords />
        </VStack>
      </Center>
    </>
  );
};

export default LandingPage;
