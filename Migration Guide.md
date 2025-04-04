## API Endpoints

### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout
- GET /api/auth/user

### Products
- GET /api/products
- GET /api/products/:slug
- POST /api/products (protected)
- PUT /api/products/:id (protected)

### Marketplace
- GET /api/marketplace
- GET /api/marketplace/:id
- POST /api/marketplace (vendor only)
- PUT /api/marketplace/:id (vendor only)

## Development Setup

### Prerequisites
- Node.js >= 20.x
- PostgreSQL >= 16
- npm or yarn package manager

### Environment Variables
```bash
# Database Configuration
DATABASE_URL=postgresql://user:password@host:port/database
PGHOST=your-host
PGUSER=your-user
PGPASSWORD=your-password
PGDATABASE=your-database
PGPORT=5432

# Server Configuration
PORT=5000
NODE_ENV=development
```

### Installation Steps
1. Clone the repository
```bash
git clone <repository-url>
cd project-directory
```

2. Install dependencies
```bash
npm install
```

3. Set up the database
```bash
# Generate migration files
npm run generate

# Apply migrations
npm run migrate
```

4. Start development server
```bash
npm run dev
```

## Production Deployment

### Build Process
1. Frontend build
```bash
npm run build
```

2. Production start
```bash
npm run start
```

### Deployment Requirements
- Node.js production environment
- PostgreSQL database
- Environment variables configured
- SSL certificate for HTTPS
- Sufficient memory (minimum 1GB RAM recommended)

## Component Library Documentation

### UI Components
All components are built on shadcn/ui and follow these patterns:

1. Button Component
```tsx
<Button 
  variant="default|destructive|outline|ghost"
  size="default|sm|lg|icon"
>
  Content
</Button>
```

2. Navigation Component
```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item</NavigationMenuTrigger>
      <NavigationMenuContent>Content</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

3. Form Components
```tsx
<Form {...form}>
  <FormField
    control={form.control}
    name="fieldName"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Label</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

## Authentication Flow

1. User Registration
```typescript
// 1. Client submits registration form
// 2. Server validates input
// 3. Password hashing
// 4. User creation in database
// 5. Session creation
// 6. Response with user data
```

2. User Login
```typescript
// 1. Client submits login form
// 2. Passport.js local strategy authentication
// 3. Session creation
// 4. Response with user data
```

## Error Handling

### Frontend Error Handling
```typescript
try {
  // API call
} catch (error) {
  if (error instanceof ApiError) {
    // Handle API-specific errors
  } else {
    // Handle generic errors
  }
}
```

### Backend Error Handling
```typescript
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ message });
});
```

## Testing

### Frontend Testing
- Jest for unit tests
- React Testing Library for component tests
- Cypress for E2E tests

### Backend Testing
- Jest for unit tests
- Supertest for API testing

## Performance Optimization

### Frontend Optimization
- Code splitting
- Lazy loading of routes
- Image optimization
- Bundle size optimization

### Backend Optimization
- Response caching
- Database query optimization
- Connection pooling

## Troubleshooting Guide

### Common Issues

1. Database Connection Issues
```bash
# Check database connection
npx drizzle-kit check
```

2. Build Errors
```bash
# Clear build cache
rm -rf dist/
npm run build
```

3. Type Errors
```bash
# Regenerate types
npm run generate-types
```

## API Implementation Details

### Authentication Endpoints
```typescript
// POST /api/auth/login
interface LoginRequest {
  email: string;
  password: string;
}

// POST /api/auth/register
interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  companyName?: string;
}

// GET /api/auth/user
interface UserResponse {
  id: number;
  email: string;
  name: string;
  role: string;
  companyName?: string;
}
```

### Products API Implementation
```typescript
// GET /api/products
interface ProductsResponse {
  id: number;
  name: string;
  slug: string;
  description: string;
  features: Record<string, any>;
  category: string;
  createdAt: string;
}

// GET /api/products/:slug
// Returns single product with same interface as above

// POST /api/products
interface CreateProductRequest {
  name: string;
  description: string;
  features?: Record<string, any>;
  category: string;
}
```

### Marketplace API Implementation
```typescript
// GET /api/marketplace
interface MarketplaceItemResponse {
  id: number;
  name: string;
  description: string;
  vendorId: number;
  price: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
}

// POST /api/marketplace
interface CreateMarketplaceItemRequest {
  name: string;
  description: string;
  price: string;
  category: string;
}
```

## Known Issues and Migration Notes

### Database Connection Issues
The project was experiencing database connectivity issues with the error "endpoint is disabled". When migrating to a new platform:

1. Database Setup
```bash
# Create a new PostgreSQL database
createdb your_database_name

# Update your .env file with new credentials
DATABASE_URL=postgresql://user:password@host:port/your_database_name
```

2. Connection Retry Logic
The application includes built-in connection retry logic in `server/index.ts`. You may need to adjust these settings:
```typescript
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // milliseconds
```

3. Verify Connection
```bash
# Using drizzle-kit
npx drizzle-kit push:pg

# Or using psql directly
psql $DATABASE_URL -c "SELECT NOW()"