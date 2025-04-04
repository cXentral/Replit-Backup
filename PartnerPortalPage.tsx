import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, BookOpen, BarChart, Users } from "lucide-react";

export default function PartnerPortalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Partner Portal</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Access exclusive resources and grow your business with cXentral.
        </p>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="deals">Deal Registration</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <CardTitle>Partner Program</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Join our partner ecosystem and unlock new opportunities for growth.
                  </p>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    <CardTitle>Performance Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Track your success metrics and partnership status.
                  </p>
                  <Button variant="outline">View Dashboard</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Sales Enablement</h3>
                    <ScrollArea className="h-[400px] rounded-md border p-4">
                      <div className="space-y-4">
                        {["Product Overview", "Customer Presentations", "ROI Calculator", "Case Studies"].map((resource) => (
                          <div key={resource} className="flex items-center justify-between">
                            <span>{resource}</span>
                            <Button variant="ghost" size="sm">Download</Button>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Marketing Resources</h3>
                    <ScrollArea className="h-[400px] rounded-md border p-4">
                      <div className="space-y-4">
                        {["Brand Guidelines", "Email Templates", "Social Media Kit", "Campaign Assets"].map((resource) => (
                          <div key={resource} className="flex items-center justify-between">
                            <span>{resource}</span>
                            <Button variant="ghost" size="sm">Download</Button>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <BookOpen className="h-6 w-6" />
                    <div>
                      <h3 className="text-xl font-semibold">Learning Paths</h3>
                      <p className="text-muted-foreground">Comprehensive training programs for partners</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {["Technical Certification", "Sales Certification", "Implementation Training"].map((course) => (
                      <Card key={course}>
                        <CardHeader>
                          <CardTitle className="text-lg">{course}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">Start Course</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deals">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="h-6 w-6" />
                  <div>
                    <h3 className="text-xl font-semibold">Deal Registration</h3>
                    <p className="text-muted-foreground">Register and track your opportunities</p>
                  </div>
                </div>
                <Button className="w-full md:w-auto">Register New Deal</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
