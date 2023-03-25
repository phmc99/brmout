import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const features = [
  {
    id: 1,
    title: 'Autovistoria',
    text:
      'Autovistoria é uma inspeção que pode identificar possíveis danos ou riscos à estrutura da edificação. Essa avaliação é obrigatória em algumas cidades e pode prevenir problemas que afetem a estrutura e a valorização do patrimônio. Faça já a sua autovistoria!',
  },
  {
    id: 2,
    title: 'Projeto e planejamento de construções',
    text:
      'Desenvolvemos projetos que atendem às necessidades específicas do seu negócio, garantindo segurança, funcionalidade e conforto. Investir em um planejamento bem elaborado ajuda a reduzir custos e evitar problemas na construção.',
  },
  {
    id: 3,
    title: 'Análise e avaliação estrutural',
    text:
      'Podemos identificar possíveis problemas estruturais em edifícios existentes, garantindo a segurança do local. A análise estrutural também é útil para projetos de reforma ou ampliação de edifícios. Faça sua avaliação com a BRmout!',
  },
  {
    id: 4,
    title: 'Consultoria em sustentabilidade',
    text:
      'Oferecemos soluções para reduzir o impacto ambiental de edifícios, gerando economia de recursos e agregando valor ao imóvel. Invista na sustentabilidade do seu negócio!',
  },
  {
    id: 5,
    title: 'Elaboração de programas de segurança do trabalho',
    text:
      'Garanta a segurança dos trabalhadores com programas de segurança do trabalho elaborados por engenheiros especializados. Previna acidentes e otimize processos.',
  },
  {
    id: 6,
    title: 'Realização de análises de riscos',
    text:
      'Garanta a segurança de sua empresa e colaboradores através da realização de análises de riscos. Identifique e previna acidentes com os seus times.',
  },
  {
    id: 7,
    title: 'Treinamentos e capacitações',
    text:
      'Invista no desenvolvimento dos seus colaboradores com treinamentos e capacitações ministrados por um engenheiro especializado. Aperfeiçoe habilidades e promova a segurança em seu negócio.',
  },
  {
    id: 8,
    title: 'Inspeções e auditorias',
    text:
      'Não deixe a qualidade e segurança do seu negócio em risco. Garanta a excelência em suas operações e invista em inspeções e auditorias,.',
  },
];

const Features = () => {
  return (
    <Box
      py={[6, 10]}
      px={8}
      h={['130vh', '100vh']}
      bg={useColorModeValue('gray.50', 'gray.800')}
      color={useColorModeValue('gray.700', 'white')}
    >
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading>Serviços</Heading>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map(feature => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text display={['none', 'box']} color={'gray.600'}>
                  {feature.text}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features;
