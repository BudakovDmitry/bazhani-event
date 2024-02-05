import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"

export async function generateMetadata() {
  return {
    title: 'BAZHANI EVENT',
    description: 'Запрошуємо тебе на найбажаніший івент року про гроші!',
    openGraph: {
      title: 'BAZHANI EVENT',
      description: 'Запрошуємо тебе на найбажаніший івент року про гроші!',
      images: ['/bazhani_event_logo.png']
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
