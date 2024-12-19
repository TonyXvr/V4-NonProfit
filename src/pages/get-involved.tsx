import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function GetInvolved() {
  return (
    <PageLayout 
      title="Get Involved"
      description="Find out how you can get involved with CyberQueen Esports"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Get Involved</h1>
        <Card className="border border-primary/20">
          <CardHeader>
            <CardTitle>Ways to Get Involved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Discover opportunities to participate, volunteer, or contribute to our mission.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}