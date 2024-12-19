import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <PageLayout 
      title="About Us"
      description="Learn more about CyberQueen Esports and our mission to empower women in gaming"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        <Card className="border border-primary/20">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              CyberQueen Esports is dedicated to empowering women in the competitive gaming space. 
              We believe in creating opportunities, fostering talent, and building a supportive community 
              where female gamers can thrive and excel.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}