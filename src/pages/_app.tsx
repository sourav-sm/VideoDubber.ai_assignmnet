import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useLocalStorage } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { HeaderMenu } from '@/components/Header/Header';

let links = [ { link: "/", label: "Products" }, { link: "/about", label: "Use Cases" }, { link: "/t", label: "Resources" },{ link: "/", label: "For Business" },{ link: "/", label: "Prcing" }];

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'demo-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <HeaderMenu links={links} />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
