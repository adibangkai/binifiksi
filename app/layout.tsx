import "../styles/globals.css";
import UserProvider from "@/context/userProvider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
