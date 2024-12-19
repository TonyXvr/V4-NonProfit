import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <PageLayout 
      title="Contact"
      description="Get in touch with CyberQueen Esports"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
        <Card className="border border-primary/20">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Have questions or want to connect? We'd love to hear from you.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}