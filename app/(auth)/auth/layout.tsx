import Header from "@/components/Header/Header";
import Player from "@/components/Player/Player";
import { RecoilWrapper } from "@/components/RecoilWrapper/RecoilWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <RecoilWrapper>
          <Header />
          {children}
          <Player />
        </RecoilWrapper>
      </body>
    </html>
  );
}
