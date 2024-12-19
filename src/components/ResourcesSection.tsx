import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Women in Games International (WIGI)",
      description: "A non-profit organization that promotes diversity and inclusion in the gaming industry through mentorship programs, networking events, and educational resources.",
      category: "Organization",
      link: "https://www.womeningames.org/",
      tags: ["Mentorship", "Networking", "Education"]
    },
    {
      title: "AnyKey",
      description: "An advocacy organization that supports diversity, inclusion, and equity in gaming, offering resources, research, and grant opportunities.",
      category: "Organization",
      link: "https://www.anykey.org/",
      tags: ["Advocacy", "Research", "Grants"]
    },
    {
      title: "Girls Who Code",
      description: "Provides coding education and opportunities specifically for women interested in game development and esports technology.",
      category: "Education",
      link: "https://girlswhocode.com/",
      tags: ["Coding", "Game Development", "Technology"]
    },
    {
      title: "1,000 Dreams Fund BroadcastHER Academy",
      description: "Provides grants and mentorship opportunities for women pursuing careers in esports and gaming.",
      category: "Funding",
      link: "https://1000dreamsfund.org/broadcasther-academy/",
      tags: ["Grants", "Mentorship", "Career Development"]
    },
    {
      title: "Women in Esports",
      description: "Initiative by the British Esports Association providing tournaments, community support, and resources for women in competitive gaming.",
      category: "Community",
      link: "https://britishesports.org/women-in-esports/",
      tags: ["Tournaments", "Community", "Support"]
    },
    {
      title: "Female Legends",
      description: "A community organization focused on creating safe spaces for women in gaming and esports, offering tournaments and networking opportunities.",
      category: "Community",
      link: "https://femalelegends.com/",
      tags: ["Safe Space", "Tournaments", "Networking"]
    }
  ];

  return (
    <section className="py-12 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] to-[#00ffd5] text-transparent bg-clip-text">
            Resources for Women in Esports
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover organizations, communities, and resources dedicated to supporting and empowering women in the esports industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-black/40 border border-[#00ff9d]/20 hover:border-[#00ff9d]/40 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-[#00ff9d]">{resource.title}</CardTitle>
                  <Badge variant="outline" className="border-[#00ff9d] text-[#00ff9d]">
                    {resource.category}
                  </Badge>
                </div>
                <CardDescription className="text-gray-400">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-[#00ff9d]/10 text-[#00ff9d]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  className="w-full bg-[#00ff9d]/10 hover:bg-[#00ff9d]/20 text-[#00ff9d] border border-[#00ff9d]/50"
                  onClick={() => window.open(resource.link, '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;