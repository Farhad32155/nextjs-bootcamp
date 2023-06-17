"use client"
import { Container, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./_coreComponents/Header";
import Footer from "./_coreComponents/Footer";

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '70px',
            color: 'blue',
        },
        h2: {
            fontSize: '40px',
            color: 'skyblue',
        },
        h3: {
            fontSize: '20px',
            color: 'black',
        }

    }
});

export default function FrontendLayout({ children }: any) {
    return <ThemeProvider theme={theme}>
        <Header />
        <ContentBody>
            {children}
        </ContentBody>
        <Footer />
    </ThemeProvider>
}

function ContentBody({ children }: any) {
    return <Container maxWidth={false} disableGutters sx={{ minHeight: '85vh' }}>{children}</Container>
}


