import { ThemeProvider as BaseThemeProvider } from 'next-themes';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemProvider = ({ children }: ThemeProviderProps) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemProvider };
