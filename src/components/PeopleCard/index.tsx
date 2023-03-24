import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsLinkedin } from 'react-icons/bs';

const PeopleCard = () => {
  const handleOpenLinkedin = (linkedin: string) => {
    window.open(`https://www.linkedin.com/in/${linkedin}/`);
  };
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            alt="Employee"
            src={'./images/julio.jpg'}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Julio Moutinho
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            CEO e Engenheiro Civil
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Uma breve descrição sobre você, seus hobbies e afins. Fique a
            vontade.
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #music
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              fontSize={'lg'}
              rounded={'full'}
              colorScheme="linkedin"
              w={'full'}
              leftIcon={<Icon boxSize={5} as={BsLinkedin} />}
              onClick={() => handleOpenLinkedin('julio-moutinho-3131a1163')}
            >
              Linkedin
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default PeopleCard;
