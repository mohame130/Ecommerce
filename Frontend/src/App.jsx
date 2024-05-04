import Header1 from "./component/Header/Header1";
import Header2 from "./component/Header/Header2";
import Header3 from "./component/Header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Hero from "./component/hero/Hero";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import ScrollToTop from "./component/Scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />
        <Header2 />
        <Header3 />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
        </Box>

        <Footer />

        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
