import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = () => {
  return <Image src={`./images/icon-brmout.png`} alt="logo" w={[50, 20]} />;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo />
        <Text textAlign={'center'}>
          © {new Date().getFullYear()} BRmout. Todos os direitos reservados
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'Linkedin'}
            href={'https://www.linkedin.com/company/brmout/'}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={'Facebook'}
            href={'https://www.facebook.com/brmoutoficial'}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/brmoutoficial/'}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
