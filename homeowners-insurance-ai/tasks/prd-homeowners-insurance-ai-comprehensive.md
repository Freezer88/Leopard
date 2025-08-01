# Homeowners Insurance AI - Comprehensive Product Requirements Document

## 1.0 Introduction & Vision

### 1.1 Product Vision
To be the trusted guide that empowers every household to simply and securely protect their assets, providing true peace of mind through AI-powered inventory management and insurance analysis.

### 1.2 The Problem
Most homeowners and renters lack accurate, up-to-date documentation of their household goods' value. This becomes critical during catastrophic events like fires, floods, or major theft. Victims often experience shock, vulnerability, and overwhelming stress when trying to provide detailed inventories to insurance companies. Manual inventory creation from memory is emotionally taxing and guarantees inaccuracies, leading to incomplete claims and significant financial loss.

### 1.3 Target Audience & Personas

#### Primary Persona: "The Proactive Homeowner" (Insurance & Preparedness)
- **Who**: Homeowners aged 35-60, financially responsible, tech-savvy but time-poor
- **Needs**: Insurance-grade inventory ensuring maximum reimbursement, intelligent guidance for insurance practices, proactive documentation prompts for high-value items
- **Success Metric**: Frictionless and complete claims process

#### Secondary Persona: "The Millennial Renter" (Financial & Lifestyle Utility)
- **Who**: Renters aged 25-35, frequent movers, mix of high-value electronics and sentimental items
- **Needs**: Financial benefit of accurate inventory for renter's insurance, practical everyday utility
- **Success Metric**: Living, useful asset that serves as a "personal asset graph"

### 1.4 Strategic Goals & Success Metrics
- **Business Goal**: Profitable, scalable subscription service with strong ARR and high retention
- **Primary Metric**: Annual Recurring Revenue (ARR)
- **Year 1 KPIs**: Subscriber activation, user engagement, system value
- **Post-Year 1**: >85% membership renewal rate, new subscription growth

## 2.0 Technical Architecture & Stack

### 2.1 Technology Stack

#### Frontend
- **Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11 with custom design system
- **State Management**: React Context API with custom hooks
- **Animation**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.536.0
- **Utilities**: clsx 2.1.1, tailwind-merge 3.3.1

#### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with two-token system (access + refresh)
- **File Storage**: Replit's built-in file storage system
- **AI Integration**: OpenAI GPT-4 API
- **Payment Processing**: Stripe (initially mocked)

#### Development & Testing
- **Testing**: Jest with React Testing Library
- **Linting**: ESLint with TypeScript support
- **Documentation**: Storybook for component documentation
- **Deployment**: Replit Core/Native environment

### 2.2 Security Architecture

#### Zero Trust Principles
- **Never Trust, Always Verify**: All requests must be authenticated and authorized
- **Least Privilege Access**: Users only access resources they need
- **Micro-segmentation**: Separate network segments for different services
- **Continuous Monitoring**: Real-time security monitoring and logging

#### JWT Implementation
- **Access Token**: 15-minute lifespan, stored in memory
- **Refresh Token**: 24-hour lifespan, stored in HttpOnly cookie
- **Silent Refresh**: Automatic token renewal without user interruption
- **Token Rotation**: Refresh tokens rotate on each use

#### Security Headers
```typescript
// Required security headers
{
  'Content-Security-Policy': "default-src 'self'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
}
```

## 3.0 Database Schema Design

### 3.1 Core Tables

#### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  subscription_level VARCHAR(20) DEFAULT 'free',
  subscription_expires_at TIMESTAMP,
  failed_login_attempts INTEGER DEFAULT 0,
  account_locked_until TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Households Table
```sql
CREATE TABLE households (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Rooms Table
```sql
CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id UUID REFERENCES households(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  room_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Photos Table
```sql
CREATE TABLE photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  file_path VARCHAR(500) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  metadata JSONB,
  security_scan_status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Inventory Items Table
```sql
CREATE TABLE inventory_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  collection_id UUID REFERENCES collections(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100) NOT NULL,
  estimated_value DECIMAL(10,2),
  condition VARCHAR(20),
  location_hint TEXT,
  is_high_value BOOLEAN DEFAULT FALSE,
  ai_generated BOOLEAN DEFAULT FALSE,
  user_corrected BOOLEAN DEFAULT FALSE,
  deleted_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Collections Table
```sql
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id UUID REFERENCES households(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  collection_type VARCHAR(50) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Subscriptions Table
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stripe_subscription_id VARCHAR(255),
  plan_type VARCHAR(20) NOT NULL,
  status VARCHAR(20) NOT NULL,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3.2 Indexes for Performance
```sql
-- Performance indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_households_user_id ON households(user_id);
CREATE INDEX idx_rooms_household_id ON rooms(household_id);
CREATE INDEX idx_photos_room_id ON photos(room_id);
CREATE INDEX idx_inventory_items_room_id ON inventory_items(room_id);
CREATE INDEX idx_inventory_items_collection_id ON inventory_items(collection_id);
CREATE INDEX idx_inventory_items_deleted_at ON inventory_items(deleted_at);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
```

## 4.0 Core Features & Implementation

### 4.1 Epic 2.1: User Authentication & Account Management

#### 4.1.1 User Registration
**Implementation Details:**
```typescript
// Backend registration endpoint
POST /api/auth/register
{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Response
{
  success: boolean;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    subscriptionLevel: string;
  };
  accessToken: string;
  refreshToken: string;
}
```

**Security Requirements:**
- Password must be minimum 8 characters with complexity requirements
- Email validation and uniqueness check
- Account lockout after 5 failed attempts (30-minute lockout)
- JWT tokens with proper expiration and rotation

**Frontend Components:**
- `SignupForm.tsx` with real-time validation
- Password strength indicator
- Email confirmation flow
- Error handling with user-friendly messages

#### 4.1.2 User Login
**Implementation Details:**
```typescript
// Backend login endpoint
POST /api/auth/login
{
  email: string;
  password: string;
}

// Response
{
  success: boolean;
  user: UserObject;
  accessToken: string;
  refreshToken: string;
}
```

**Security Features:**
- Rate limiting: 5 attempts per 15 minutes
- Account lockout mechanism
- Secure password comparison (timing attack resistant)
- Audit logging for all login attempts

#### 4.1.3 Password Reset
**Implementation Details:**
```typescript
// Request reset
POST /api/auth/forgot-password
{
  email: string;
}

// Reset password
POST /api/auth/reset-password
{
  token: string;
  newPassword: string;
}
```

**Security Requirements:**
- Single-use tokens with 10-minute expiration
- Secure token generation using crypto.randomBytes()
- Email delivery with rate limiting
- Audit logging for all reset attempts

#### 4.1.4 Household Management
**Implementation Details:**
```typescript
// Create household
POST /api/households
{
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

// Update household
PUT /api/households/:id
{
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}
```

**Business Rules:**
- Free users: 1 household maximum
- Premium users: 1 household maximum
- Platinum users: 2 households maximum
- Address validation using external service

### 4.2 Epic 2.2: Room & Photo Management

#### 4.2.1 Room Creation
**Implementation Details:**
```typescript
// Create room
POST /api/rooms
{
  householdId: string;
  name: string;
  roomType: string;
}

// Response
{
  id: string;
  name: string;
  roomType: string;
  photoCount: number;
  itemCount: number;
  estimatedValue: number;
}
```

**Business Rules:**
- Free users: 2 rooms maximum
- Premium users: 12 rooms maximum
- Platinum users: 20 rooms per household maximum
- Room names must be unique within household

#### 4.2.2 Photo Upload & Validation
**Implementation Details:**
```typescript
// Upload photos
POST /api/rooms/:id/photos
Content-Type: multipart/form-data
{
  photos: File[];
  metadataOverride?: boolean;
}

// Photo validation response
{
  validPhotos: PhotoObject[];
  invalidPhotos: {
    file: string;
    reason: string;
  }[];
  warnings: string[];
}
```

**Security Requirements:**
- File type validation: JPEG, PNG, WEBP, GIF, HEIC
- File size limit: 10MB per photo
- Malware scanning using ClamAV or similar
- Metadata extraction and validation
- HEIC to JPEG conversion

**Photo Metadata Validation:**
```typescript
interface PhotoMetadata {
  dateTime?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  device?: string;
  resolution?: {
    width: number;
    height: number;
  };
}
```

**User Experience Flow:**
1. User selects room and clicks "Add Photos"
2. Drag-and-drop interface with preview
3. Real-time validation feedback
4. Metadata validation with user options:
   - Delete non-compliant photos
   - Continue with warning
   - Cancel upload
5. Progress indicator during upload
6. Success confirmation with photo count

#### 4.2.3 Room Management Interface
**Frontend Components:**
- `RoomList.tsx`: Grid view of rooms with thumbnails
- `RoomForm.tsx`: Room creation/editing form
- `PhotoUpload.tsx`: Drag-and-drop photo upload
- `PhotoPreview.tsx`: Photo gallery with metadata display

**UI/UX Requirements:**
- Intuitive room naming with suggestions
- Photo tips and guidance overlay
- Progress indicators for all operations
- Error handling with clear user feedback
- Responsive design for mobile devices

### 4.3 Epic 2.3: AI-Powered Inventory Generation

#### 4.3.1 AI Integration Architecture
**OpenAI API Integration:**
```typescript
// AI service configuration
interface AIConfig {
  apiKey: string;
  model: 'gpt-4-vision-preview';
  maxTokens: 2000;
  temperature: 0.1;
  retryAttempts: 2;
  timeoutMs: 30000;
}

// AI processing workflow
interface AIProcessingWorkflow {
  step1: 'Security Scanning';
  step2: 'Metadata Validation';
  step3: 'Image Enhancement';
  step4: 'AI Analysis';
  step5: 'Result Processing';
}
```

**Prompt Engineering:**
```typescript
const inventoryPrompt = `
You are an expert home inventory assistant. Analyze the provided room photos and identify all visible items.

Return a JSON array with the following structure for each item:
{
  "name": "Item name",
  "category": "Electronics|Furniture|Decor|Tools|Clothing|Other",
  "estimatedValue": number,
  "condition": "Excellent|Good|Fair|Poor",
  "locationHint": "Brief description of item location in photo"
}

Guidelines:
- Estimate realistic values based on current market prices
- Consider item condition and age
- Be specific with item names and descriptions
- Include all visible items, even small ones
- Focus on items that would be covered by insurance
`;
```

#### 4.3.2 Real-Time Processing Status
**Status Updates:**
```typescript
interface ProcessingStatus {
  step: 'scanning' | 'validating' | 'enhancing' | 'analyzing' | 'processing';
  progress: number; // 0-100
  message: string;
  estimatedTimeRemaining?: number;
  errors?: string[];
}
```

**WebSocket Implementation:**
```typescript
// WebSocket connection for real-time updates
const ws = new WebSocket(`ws://localhost:3000/api/inventory/status/${jobId}`);

ws.onmessage = (event) => {
  const status: ProcessingStatus = JSON.parse(event.data);
  updateProcessingUI(status);
};
```

#### 4.3.3 Error Handling & Recovery
**Error Types:**
- `FILE_ERROR`: Invalid format or malware detected
- `METADATA_ERROR`: Missing required metadata
- `AI_TIMEOUT`: OpenAI API timeout
- `AI_RATE_LIMIT`: Rate limit exceeded
- `OUTPUT_MALFORMED`: Invalid AI response

**Recovery Strategies:**
- Automatic retry for transient errors
- Manual retry option for failed jobs
- Graceful degradation with partial results
- User notification with clear next steps

### 4.4 Epic 2.4: Inventory Management & Reporting

#### 4.4.1 Three-Lens View Architecture
**Rooms Lens:**
```typescript
interface RoomView {
  id: string;
  name: string;
  photoCount: number;
  itemCount: number;
  estimatedValue: number;
  lastUpdated: Date;
  items: InventoryItem[];
}
```

**High-Value Items Lens:**
```typescript
interface HighValueItemView {
  id: string;
  name: string;
  category: string;
  estimatedValue: number;
  condition: string;
  room: string;
  documents: Document[];
  insuranceRecommendations: string[];
}
```

**Collections Lens:**
```typescript
interface CollectionView {
  id: string;
  name: string;
  type: string;
  itemCount: number;
  totalValue: number;
  items: InventoryItem[];
}
```

#### 4.4.2 Inventory CRUD Operations
**Create Item:**
```typescript
POST /api/inventory/items
{
  roomId: string;
  name: string;
  category: string;
  estimatedValue: number;
  condition: string;
  locationHint?: string;
  isHighValue?: boolean;
}
```

**Update Item:**
```typescript
PUT /api/inventory/items/:id
{
  name?: string;
  category?: string;
  estimatedValue?: number;
  condition?: string;
  locationHint?: string;
  isHighValue?: boolean;
  userCorrected: boolean;
}
```

**Delete Item:**
```typescript
DELETE /api/inventory/items/:id
// Soft delete - moves to trash for 30 days
```

#### 4.4.3 Export Functionality
**CSV Export (All Levels):**
```typescript
GET /api/inventory/export/csv
Query Parameters:
- householdId: string
- roomId?: string
- collectionId?: string
- includeDeleted?: boolean

Response: CSV file with headers
Item Name,Category,Estimated Value,Condition,Room,Collection,Last Updated
```

**PDF Export (Premium+):**
```typescript
GET /api/inventory/export/pdf
Query Parameters:
- householdId: string
- includePhotos?: boolean
- includeCharts?: boolean

Response: PDF with thumbnails, charts, and summaries
```

#### 4.4.4 Trash & Recovery System
**Trash Management:**
```typescript
// View trash
GET /api/inventory/trash
Response: {
  items: InventoryItem[];
  totalCount: number;
  expiresAt: Date;
}

// Restore item
POST /api/inventory/trash/:id/restore

// Permanently delete
DELETE /api/inventory/trash/:id/permanent
```

### 4.5 Epic 2.5: Subscription Levels & Entitlements

#### 4.5.1 Subscription Level Definitions
```typescript
interface SubscriptionLevel {
  id: string;
  name: 'free' | 'premium' | 'platinum';
  price: number;
  billingCycle: 'monthly' | 'yearly';
  limits: {
    households: number;
    roomsPerHousehold: number;
    totalItems: number;
    insuranceAnalyses: number;
    claimsAccess: boolean;
    pdfExport: boolean;
  };
  features: string[];
}
```

**Level Definitions:**
- **Free**: 1 household, 2 rooms, 2,000 items, no insurance features
- **Premium**: 1 household, 12 rooms, 20,000 items, 4 analyses, claims access
- **Platinum**: 2 households, 20 rooms/household, 200,000 items, 10 analyses, claims access

#### 4.5.2 Entitlements Engine
```typescript
class EntitlementsEngine {
  async checkUserLimits(userId: string, action: string): Promise<boolean>;
  async getRemainingQuota(userId: string): Promise<QuotaInfo>;
  async incrementUsage(userId: string, action: string): Promise<void>;
  async enforceLimits(userId: string, resource: string): Promise<void>;
}

interface QuotaInfo {
  households: { used: number; limit: number };
  rooms: { used: number; limit: number };
  items: { used: number; limit: number };
  analyses: { used: number; limit: number };
}
```

#### 4.5.3 Mock Stripe Integration
```typescript
// Mock Stripe service
class MockStripeService {
  async createSubscription(userId: string, planId: string): Promise<Subscription> {
    // Simulate Stripe API call
    return {
      id: `sub_${generateId()}`,
      status: 'active',
      planId,
      userId,
      currentPeriodStart: new Date(),
      currentPeriodEnd: addMonths(new Date(), 1)
    };
  }

  async cancelSubscription(subscriptionId: string): Promise<void> {
    // Simulate cancellation
    console.log(`Mock: Cancelled subscription ${subscriptionId}`);
  }
}
```

## 5.0 Testing Strategy

### 5.1 Unit Testing Requirements
**Frontend Testing:**
- Component testing with React Testing Library
- Hook testing with custom test utilities
- Form validation testing
- Error handling testing
- Accessibility testing with jest-axe

**Backend Testing:**
- API endpoint testing with supertest
- Database integration testing
- Authentication middleware testing
- File upload testing
- AI integration mocking

**Test Coverage Requirements:**
- Minimum 80% code coverage
- 100% coverage for critical paths (auth, payments, file upload)
- All error conditions must be tested
- Performance testing for file uploads

### 5.2 Integration Testing Strategy
**API Integration Tests:**
- End-to-end authentication flow
- File upload and processing pipeline
- AI integration with mocked responses
- Database transaction testing
- Error recovery scenarios

**UI Integration Tests:**
- User registration and login flow
- Room creation and photo upload
- Inventory management workflows
- Subscription upgrade/downgrade
- Export functionality

## 6.0 Deployment & Infrastructure

### 6.1 Replit Deployment Configuration
**Environment Setup:**
```json
{
  "name": "homeowners-insurance-ai",
  "language": "nodejs",
  "run": "npm run dev",
  "env": {
    "NODE_ENV": "production",
    "DATABASE_URL": "postgresql://...",
    "JWT_SECRET": "your-secret-key",
    "OPENAI_API_KEY": "your-openai-key",
    "STRIPE_SECRET_KEY": "your-stripe-key"
  }
}
```

**Build Configuration:**
```json
{
  "scripts": {
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "vite build",
    "build:backend": "tsc -p backend/tsconfig.json",
    "start": "node backend/dist/index.js"
  }
}
```

### 6.2 Environment Configuration
**Development Environment:**
```bash
# .env.development
DATABASE_URL=postgresql://localhost:5432/homeowners_dev
JWT_SECRET=dev-secret-key
OPENAI_API_KEY=your-openai-key
STRIPE_SECRET_KEY=sk_test_...
NODE_ENV=development
```

**Production Environment:**
```bash
# .env.production
DATABASE_URL=postgresql://production-db-url
JWT_SECRET=production-secret-key
OPENAI_API_KEY=your-openai-key
STRIPE_SECRET_KEY=sk_live_...
NODE_ENV=production
```

## 7.0 Monitoring & Logging

### 7.1 Logging Strategy
**Structured Logging:**
```typescript
interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  userId?: string;
  action?: string;
  metadata?: Record<string, any>;
  sessionId?: string;
}
```

**User Click Tracking:**
```typescript
interface UserAction {
  userId: string;
  action: string;
  component: string;
  timestamp: Date;
  metadata: {
    page: string;
    element: string;
    value?: any;
  };
}
```

### 7.2 Performance Monitoring
**Key Metrics:**
- API response times
- File upload success rates
- AI processing times
- Database query performance
- User engagement metrics

**Alerting:**
- Error rate > 5%
- Response time > 2 seconds
- AI processing failures
- Database connection issues

## 8.0 Success Metrics & KPIs

### 8.1 Technical Metrics
- **Performance**: API response time < 500ms
- **Reliability**: 99.9% uptime
- **Security**: Zero security incidents
- **Quality**: < 1% error rate

### 8.2 Business Metrics
- **User Acquisition**: Monthly signup growth
- **Engagement**: Daily active users
- **Retention**: 30-day retention rate
- **Revenue**: Monthly recurring revenue

### 8.3 User Experience Metrics
- **Task Completion**: Room creation < 1 minute
- **Photo Upload**: Success rate > 95%
- **AI Processing**: Accuracy > 90%
- **Export Functionality**: Success rate > 98%

## 9.0 Open Questions & Future Considerations

### 9.1 Technical Questions
- Specific antivirus service for malware scanning
- Image enhancement service integration
- Backup and disaster recovery strategy
- Scaling strategy for AI processing

### 9.2 Business Questions
- Pricing strategy for different markets
- Partnership opportunities with insurance companies
- Mobile app development timeline
- International expansion considerations

### 9.3 Future Enhancements
- Multi-language support
- Advanced AI features (damage assessment)
- Integration with insurance company APIs
- Mobile app development
- Advanced analytics and reporting

This comprehensive PRD provides detailed implementation guidance for junior developers while maintaining the psychological design principles and security requirements outlined in the original specification.
