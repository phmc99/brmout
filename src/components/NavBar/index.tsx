import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
        onClose();
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onClose]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue(
          ['white', scrolled ? 'white' : 'whiteAlpha.100'],
          'gray.800',
        )}
        transition={['none', scrolled ? '.5s all' : '.2s all']}
        visibility={[scrolled ? 'visible' : 'hidden', 'visible']}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue(['gray.200', 'transparent'], 'gray.900')}
        align={'center'}
        position={'fixed'}
        w={'100%'}
        boxShadow={['none', '0px 2px 5px 0px rgba(0, 0, 0, 0.05)']}
        zIndex={3}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'end', md: 'center' }}>
          <Image src="./images/icon-brmout.png" alt="logo" w={'60px'} />

          <Flex
            display={{ base: 'none', md: 'flex' }}
            w={'80%'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue(['gray.600', 'gray.500'], 'gray.200');
  const linkHoverColor = useColorModeValue(['gray.800', 'gray.600'], 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={10}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      w={'full'}
      display={{ md: 'none' }}
      position={'fixed'}
      top={'11%'}
      zIndex={3}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const {
    isOpen: isOpenMobileNavItem,
    onToggle: onToggleMobileNavItem,
  } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggleMobileNavItem}>
      <Flex
        py={2}
        as={Link}
        href={href && href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpenMobileNavItem ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={isOpenMobileNavItem}
        animateOpacity
        style={{ marginTop: '0!important' }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Sobre',
    children: [
      {
        label: 'Empresa',
        subLabel: 'Qual é o nosso propósito e a nossa história',
        href: '#',
      },
      {
        label: 'Colaboradores',
        subLabel: 'Descubra um pouco sobre a nossa equipe',
        href: '#',
      },
    ],
  },
  {
    label: 'Serviços',
    children: [
      {
        label: 'Engenharia',
        subLabel: 'Serviços e consultoria de Engenharia civil',
        href: '#',
      },
      {
        label: 'Segurança do trabalho',
        subLabel: 'Serviços e consultoria de Segurança do trabalho',
        href: '#',
      },
    ],
  },
  {
    label: 'Depoimentos',
    href: '#',
  },
  {
    label: 'Contato',
    href: '#',
  },
];

export default NavBar;
