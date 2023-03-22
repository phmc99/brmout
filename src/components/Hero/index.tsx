import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={'url(./images/brmoutbg.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, whiteAlpha.500, whiteAlpha.700)'}
      >
        <Stack maxW={'2xl'} align={'center'} textAlign={'center'} spacing={6}>
          <Image src="./images/logo-brmout.png" w={400} />
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            textShadow={'1px 1px 5px rgba(0,0,0,0.7 )'}
          >
            Engenharia e segurança do trabalho para um ambiente mais seguro.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'#245689'}
              color={'gray.100'}
              rounded={'full'}
              size={'lg'}
              _hover={{
                filter: 'brightness(1.15)',
              }}
              transition={'.2s all'}
            >
              Conheça mais!
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
