import { createStyles, SimpleGrid, Card, Image, Text, Container } from '@mantine/core';
import Link from "next/link"

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image: 'https://i.imgur.com/FmurO7M.png'
  },
  {
    title: 'Best forests to visit in North America',
    image: 'https://i.imgur.com/4uvlXFY.png'
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image: 'https://i.imgur.com/QrEDTUH.png'
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image: 'https://i.imgur.com/DMd0HPu.png'
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    padding: theme.spacing.md,
    height: 550, // Further increase the height for the cards
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows.md,
    },
  },
  image: {
    height: '65%', // Adjust the height of the image within the card
    width: '100%',
    borderRadius: theme.radius.xl,
  }
}));

export function CardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} className={classes.card}>
      <Image className={classes.image} src={article.image} alt={article.title} />
    </Card>
  ));

  return (
    <Container px="lg" style={{ maxWidth: '1400px' }}>
      <SimpleGrid cols={4} spacing="xl" breakpoints={[{ maxWidth: 'sm', cols: 1} , {maxWidth: 'md', cols: 2 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}



