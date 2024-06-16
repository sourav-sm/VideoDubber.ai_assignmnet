import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Flex } from '@mantine/core';
import Link from "next/link"
import one from "../../images/one.png"

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
    'https://drive.google.com/file/d/1B0wREiWQc7AUU1RlMNjTVzdc1P4V9Epr/view?usp=sharing',
    date: 'August 18, 2022',
  },
  {
    title: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 27, 2022',
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 9, 2022',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 12, 2022',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },

  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function CardsGrid() {

  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    // <Card key={article.title} p="md" radius="md" component="div" className={classes.card}>
<Card key={article.title}  classNames={"flex "}>
      {/* <AspectRatio ratio={1920 / 1000}>
        <Image src={article.image} alt={article.title} />
      </AspectRatio> */}
      <Image src={article.image} alt={article.title} />
    </Card>
  ));

  return (
    <Container py="">
      <SimpleGrid spacing="sm" verticalSpacing="sm" cols={4} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
