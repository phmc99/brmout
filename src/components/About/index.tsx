import { Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      color={useColorModeValue('gray.700', 'white')}
      py={10}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}
      h={['90vh', '50vh']}
    >
      <Heading>Sobre</Heading>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}
      >
        Nosso objetivo é promover um ambiente de trabalho seguro e saudável,
        reduzindo os riscos de acidentes e doenças ocupacionais. Para isso,
        contamos com uma equipe de profissionais altamente capacitados e
        experientes, que estão sempre atualizados com as normas e
        regulamentações em vigor.
      </Text>
    </Stack>
  );
};

export default About;
