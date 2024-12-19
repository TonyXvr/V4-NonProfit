import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Events() {
  return (
    <PageLayout 
      title="Events"
      description="Upcoming events and tournaments in women's esports"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Events</h1>
        <Card className="border border-primary/20">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay tuned for upcoming tournaments, workshops, and community events.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}