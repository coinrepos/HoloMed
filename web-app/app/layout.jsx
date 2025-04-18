export const metadata = {
  title: 'HoloMed',
  description: 'AI-Powered Healing with DAO Integration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
