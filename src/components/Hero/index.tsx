import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Image src={'./images/logo-brmout.png'} />

          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Consultoria de Engenharia e Segurança do trabalho para fazer do seu
            projeto o mais seguro.
          </Text>
          <Button
            rightIcon={<ChevronDownIcon boxSize={6} />}
            rounded={'full'}
            size={'md'}
            flexDirection={'column'}
            alignItems="center"
            variant={'link'}
            _hover={{
              textDecoration: 'none',
              color: 'blue.500',
            }}
          >
            Saiba mais
          </Button>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'./images/brmoutbg.jpg'}
        />
      </Flex>
    </Stack>
  );
}

export default Hero;
