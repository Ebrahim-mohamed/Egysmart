"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ContactsTab from "./tabs/contacts";
import NewsTab from "./tabs/news";
import JobsTab from "./tabs/Jobs";
import TestimonialsTab from "./tabs/testimonials";
import ProjectsTab from "./tabs/projects";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="contacts">
      <TabsList className="mb-6">
        <TabsTrigger value="contacts">Contacts</TabsTrigger>
        <TabsTrigger value="news">News</TabsTrigger>
        <TabsTrigger value="jobs">Jobs</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
      </TabsList>

      <TabsContent value="contacts">
        <ContactsTab />
      </TabsContent>
      <TabsContent value="news">
        <NewsTab />
      </TabsContent>
      <TabsContent value="jobs">
        <JobsTab />
      </TabsContent>
      <TabsContent value="testimonials">
        <TestimonialsTab />
      </TabsContent>
      <TabsContent value="projects">
        <ProjectsTab />
      </TabsContent>

      {/* We will add the rest next */}
    </Tabs>
  );
}
