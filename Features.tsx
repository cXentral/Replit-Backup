import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleSlash2, Lock, Zap, Share2 } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <CircleSlash2 className="h-8 w-8" />,
      title: "Zero-Lock In Architecture",
      description: "Build with complete freedom using our vendor-agnostic platform"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance built into every component"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Automation",
      description: "Leverage intelligent agents to streamline operations"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Universal Integration",
      description: "Connect with any system using our extensive integration framework"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-200/90 dark:from-slate-800 dark:to-slate-900/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose cXentral</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our enterprise platform provides the tools and flexibility you need to build exceptional customer experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
