import React from "react";
import PageLayout from "@/components/PageLayout";
import ResourcesSection from "@/components/ResourcesSection";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <PageLayout
      title="Home"
      description="Join the revolution of women in esports. CyberQueen is your platform for growth, community, and success in competitive gaming."
    >
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden -mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/rect.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary animate-pulse">
              Empowering Women in Esports
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Join the next generation of competitive gamers and break barriers in the digital arena
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <ResourcesSection />

      {/* Featured Players Section */}
      <section className="mt-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Featured Players</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border border-primary/20 hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Stephanie "missharvey" Harvey</CardTitle>
              <CardDescription>5-time CS:GO World Champion</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Founder of women-focused gaming initiatives and scholarship programs. Actively mentors aspiring female players and promotes inclusivity in esports.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/20 hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Katherine "mystik" Gunn</CardTitle>
              <CardDescription>Professional Gamer & Advocate</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Created educational content for aspiring female gamers and established mentorship programs to help women enter competitive gaming.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/20 hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Ksenia "vilga" Klyuenkova</CardTitle>
              <CardDescription>Professional Valorant Player</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Leads educational bootcamps for aspiring female Valorant players and advocates for women's opportunities in esports through various initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 mb-16 container mx-auto px-4 text-center">
        <Card className="border border-primary/20 backdrop-blur-sm hover:border-primary transition-all duration-300 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Ready to Level Up?</CardTitle>
            <CardDescription className="text-lg">
              Join our community of powerful women gamers and make your mark in the esports world
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Now
            </Button>
          </CardContent>
        </Card>
      </section>
    </PageLayout>
  );
}