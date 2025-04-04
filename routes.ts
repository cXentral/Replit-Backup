import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db/index";
import { products, users, marketplaceItems, documentation } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  // Authentication endpoints
  app.post("/api/auth/login", async (req, res) => {
    // Implementation needed
    res.json({ message: "Auth endpoint" });
  });

  // Products API
  app.get("/api/products", async (req, res) => {
    try {
      const allProducts = await db.select().from(products);
      res.json(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to fetch products"
      });
    }
  });

  app.get("/api/products/:slug", async (req, res) => {
    try {
      const product = await db
        .select()
        .from(products)
        .where(eq(products.slug, req.params.slug));

      if (!product.length) {
        return res.status(404).json({ 
          error: "Not found",
          message: "Product not found" 
        });
      }

      res.json(product[0]);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to fetch product"
      });
    }
  });

  // Marketplace API
  app.get("/api/marketplace", async (req, res) => {
    try {
      const items = await db.select().from(marketplaceItems);
      res.json(items);
    } catch (error) {
      console.error("Error fetching marketplace items:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to fetch marketplace items"
      });
    }
  });

  // Documentation API
  app.get("/api/docs", async (req, res) => {
    try {
      const docs = await db.select().from(documentation);
      res.json(docs);
    } catch (error) {
      console.error("Error fetching documentation:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to fetch documentation"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}