import React from "react";
import PageLayout from "@/components/PageLayout";
import ResourcesSection from "@/components/ResourcesSection";

export default function Resources() {
  return (
    <PageLayout 
      title="Resources"
      description="Access resources and support for women in esports"
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Resources</h1>
      <ResourcesSection />
    </PageLayout>
  );
}