import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["/api/marketplace"],
  });

  const filteredItems = items.filter((item: any) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Universal Marketplace Hub</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover and integrate solutions from our ecosystem of trusted partners.
        </p>

        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Search solutions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="integration">Integration</SelectItem>
              <SelectItem value="analytics">Analytics</SelectItem>
              <SelectItem value="ai">AI & Automation</SelectItem>
              <SelectItem value="security">Security</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: any) => (
              <Card key={item.id} className="h-full">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="text-sm text-muted-foreground">by {item.vendorName}</div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">{item.price}</div>
                    <div className="text-sm text-muted-foreground">{item.category}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
