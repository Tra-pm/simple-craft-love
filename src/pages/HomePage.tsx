
import { NhileLayout } from "@/components/NhileLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <NhileLayout>
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to the NhiLe System!</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive platform for team collaboration, knowledge sharing, and project management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Team Newsfeed</CardTitle>
              <CardDescription>Get the latest updates from the team</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Stay updated with announcements, achievements, and important information.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Resources Hub</CardTitle>
              <CardDescription>Access all learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Find documents, guides, templates and other resources for your work.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Time Tracking</CardTitle>
              <CardDescription>Log your contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Record your working hours and track project time allocation.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </NhileLayout>
  );
}
