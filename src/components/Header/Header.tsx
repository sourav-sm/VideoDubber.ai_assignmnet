import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/core';
import Link from 'next/link'; 
import { Menu } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(5),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  toggle: {
    display: "flex",
  },
  links: {
    width: rem(500),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(300),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'flex',
    lineHeight: 1,
    padding: `${rem(1)} ${rem(1)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMenu({ links }: HeaderMiddleProps) {

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    >
      {link.label}
    </Link>
  ));

  const mobileMenu = links.map((link) => (<Menu.Item key={link.label}> <Link
    href={link.link}
    className={cx(classes.link, { [classes.linkActive]: active === link.link })}
  >
    {link.label}
  </Link></Menu.Item>))
  return (
    <Header height={56} mb={120} mt={40} >
      <Container className={classes.inner}>

        <Menu trigger={"hover"} shadow="md" width={200}>
          <Menu.Target  >
            <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
          </Menu.Target>

          <Menu.Dropdown>
            {mobileMenu}
          </Menu.Dropdown>
        </Menu>

        <Link href={"/"} className='font-extrabold text-4xl' >
          {/* <MantineLogo size={28} /> */}
          Veed
        </Link>
        <Group>

          <Group className={classes.links}  spacing={5}>
            {items}
          </Group>

          <Group spacing={1} className={classes.social} position="right" noWrap>

            <Link target='_blank' href="https://twitter.com/Official_R_deep">
              <ActionIcon size="lg">
                {/* <IconBrandTwitter size="1.1rem" stroke={1.5} /> */}
                Book a Demo
              </ActionIcon>
            </Link>

            <Link target='_blank' href="https://www.linkedin.com/in/officalrajdeepsingh/">
              <ActionIcon size="lg">
                {/* <button>
                  Login
                </button> */}
              </ActionIcon>
            </Link>

            <Link target='_blank' href="http://github.com/officialrajdeepsingh">
              <ActionIcon size="lg">
                {/* <button>
                  Sign Up
                </button> */}
              </ActionIcon>
            </Link>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}
