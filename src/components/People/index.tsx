import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import PeopleCard from '../PeopleCard';

const People = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.700', 'white')}
      py={[6, 10]}
      px={8}
      spacing={{ base: 2, md: 4 }}
      align={'center'}
      direction={'column'}
      h={['100vh', '50vh']}
    >
      <Heading>Nosso time</Heading>
      <Text
        textAlign={'center'}
        fontSize={{ base: 'md', lg: 'lg' }}
        color={'gray.500'}
        maxW={'3xl'}
      >
        Conheça a nossa equipe altamente capacitada e experiente em Engenharia
        Civil e Segurança do Trabalho, pronta para oferecer soluções
        personalizadas para a sua empresa.
      </Text>
      <Flex>
        <PeopleCard />
      </Flex>
    </Stack>
  );
};

export default People;
