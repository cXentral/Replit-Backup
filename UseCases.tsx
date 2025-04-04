import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function UseCases() {
  const cases = [
    {
      title: "Global E-commerce Platform",
      description: "How a leading retailer unified their customer experience across 20+ countries",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
    },
    {
      title: "Financial Services Innovation",
      description: "Modernizing customer service with AI-powered automation",
      image: "https://images.unsplash.com/photo-1645570990200-2701a49d45ca"
    },
    {
      title: "Healthcare Provider Network",
      description: "Connecting patients with providers through intelligent routing",
      image: "https://images.unsplash.com/photo-1620206299186-4f8686055ab4"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how leading enterprises are transforming their customer experience with cXentral.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {cases.map((case_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader className="relative h-48 overflow-hidden">
                    <img
                      src={case_.image}
                      alt={case_.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{case_.title}</CardTitle>
                    <CardDescription>{case_.description}</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
