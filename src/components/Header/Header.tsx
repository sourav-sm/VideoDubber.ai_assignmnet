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
    paddingBottom: 0,
    paddingRight: 0
  },
  toggle: {
    display: "flex",
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  social: {
    width: rem(500),
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
    padding: `${rem(1)} ${rem(1.5)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.xl,
    fontWeight: 500,
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

  const mobileMenu = links.map((link) => (
    <Menu.Item key={link.label}>
      <Link

        href={link.link}
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      >
        {link.label}
      </Link>
    </Menu.Item>
  ));

  return (
    <Header height={90} w={1470} mb={50} mx={25} mt={15} pt={40} px={60} className='bg-slate-200 rounded-3xl'>
      <Container className={classes.inner} fluid>
        <Menu trigger="hover" shadow="md" width={200}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
          </Menu.Target>
          <Menu.Dropdown>
            {mobileMenu}
          </Menu.Dropdown>
        </Menu>
        <Link href="/" className="font-extrabold text-6xl">
          VEED
        </Link>
        <Group>
          <Group  spacing={30} className={classes.link}>
            {items}    
        </Group>
          <Group spacing={30} className={classes.social} position="center" >
            <Link target="_blank" className='text-xl font-medium' href="https://twitter.com/Official_R_deep">
              Book a Demo
            </Link>
            <Link target="_blank" href="http://github.com/officialrajdeepsingh">
              {/* <ActionIcon size="lg">Signup</ActionIcon> */}
              <button className='bg-white text-black px-3 py-2 rounded-3xl text-lg'>Login</button>
            </Link>
            <Link target="_blank" href="http://github.com/officialrajdeepsingh">
              {/* <ActionIcon size="lg">Signup</ActionIcon> */}
              <button className='bg-black text-white px-3 py-2 rounded-3xl text-lg'>Sign Up</button>
            </Link>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}

