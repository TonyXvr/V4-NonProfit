import React from "react";
import Head from "next/head";
import Header from "@/components/Header";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title} - CyberQueen Esports</title>
        <meta name="description" content={description || "CyberQueen Esports - Empowering Women in Gaming"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-primary/20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-muted-foreground">
              <p>© 2024 CyberQueen Esports. Empowering women in competitive gaming.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;