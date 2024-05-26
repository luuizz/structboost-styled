import { Inter, Sora } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../../lib/registry";
import Header from "@/components/Header";
import GlobalStyle from "@/styles/Global";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import PreloadProvider from "./context/PreloadContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600" ,"700"],
  display: "swap",
  variable: "--font-sora"
})

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  title: "StructBoost | Domine o Front-end com Facilidade e Crie Interfaces de Impacto Visual Imbatível",
  description: "Desenvolva suas habilidades de front-end com o StructBoost. Aprenda com profissionais atuantes em projetos renomados, transformando ideias em realidade digital. Torne-se um mestre na criação de interfaces modernas e impactantes. Curso prático e direto ao ponto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${sora.variable}`}>
        <PreloadProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
              <Header />
                {children}
              <Footer />
          </StyledComponentsRegistry>
          <SpeedInsights />
        </PreloadProvider>
        </body>
    </html>
  );
}
