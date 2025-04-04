import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type Product } from "@/types/product";

export default function ProductPage() {
  const { slug } = useParams();

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["/api/products", slug],
    enabled: !!slug,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Product page error:", error);
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600">Error loading product</h1>
          <p className="text-gray-600">Please try again later</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="text-gray-600">The requested product could not be found</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
        <p className="text-xl text-muted-foreground mb-8">{product.description}</p>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardContent className="prose prose-slate max-w-none p-6">
                {product.features?.overview ? (
                  <div dangerouslySetInnerHTML={{ __html: product.features.overview }} />
                ) : (
                  <p>No overview available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <div className="grid gap-6">
              {product.features?.featureList?.length ? (
                product.features.featureList.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground">No features available.</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="specifications">
            <Card>
              <CardContent className="p-6">
                <div className="prose prose-slate max-w-none">
                  {product.features?.specifications ? (
                    <div dangerouslySetInnerHTML={{ __html: product.features.specifications }} />
                  ) : (
                    <p>No specifications available.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="use-cases">
            <div className="grid gap-6">
              {product.features?.useCases?.length ? (
                product.features.useCases.map((useCase, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <Button variant="outline">Read Case Study</Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground">No use cases available.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}