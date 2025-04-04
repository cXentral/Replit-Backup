import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Code, Book, Terminal, Users } from "lucide-react";
import { type Doc } from "@/types/docs";

export default function DeveloperPortalPage() {
  const { data: docs = [], isLoading } = useQuery<Doc[]>({
    queryKey: ["/api/docs"],
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Developer Portal</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to build and integrate with the cXentral platform.
        </p>

        <Tabs defaultValue="quickstart" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="sdks">SDKs</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="quickstart">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Getting Started
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <div className="space-y-4">
                    <h3>Prerequisites</h3>
                    <ul>
                      <li>Node.js 18 or higher</li>
                      <li>API credentials</li>
                      <li>Basic understanding of REST APIs</li>
                    </ul>
                    <h3>Installation</h3>
                    <pre><code>npm install @cxentral/sdk</code></pre>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                {docs.filter((doc: Doc) => doc.category === "quickstart").map((doc: Doc) => (
                  <Card key={doc.id}>
                    <CardHeader>
                      <CardTitle>{doc.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{doc.description}</p>
                      <Button variant="outline">Read Guide</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Code className="h-6 w-6" />
                  <div>
                    <h3 className="text-xl font-semibold">API Reference</h3>
                    <p className="text-muted-foreground">Complete API documentation with examples</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* API endpoints would be dynamically rendered here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sdks">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>JavaScript SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Official JavaScript SDK for cXentral platform</p>
                  <Button variant="outline">View Documentation</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Python SDK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Official Python SDK for cXentral platform</p>
                  <Button variant="outline">View Documentation</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="h-6 w-6" />
                  <div>
                    <h3 className="text-xl font-semibold">Developer Community</h3>
                    <p className="text-muted-foreground">Connect with other developers</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Community resources would be rendered here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}