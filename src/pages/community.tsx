import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Community() {
  return (
    <PageLayout 
      title="Community"
      description="Join our community of women gamers and esports enthusiasts"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Community</h1>
        <Card className="border border-primary/20">
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Connect with other women in esports, share experiences, and grow together.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}