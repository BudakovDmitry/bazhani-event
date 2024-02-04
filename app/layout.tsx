import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"

export async function generateMetadata() {
  return {
    title: 'BAZHANI EVENT',
    description: '',
    openGraph: {
      title: 'BAZHANI EVENT',
      description: '',
      images: ['']
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
