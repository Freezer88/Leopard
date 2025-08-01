
Consolidated Product Requirements Document (As of July 11, 2025)


1.0 Introduction & Vision

1.1 Product Vision
To be the trusted guide that empowers every household to simply and securely protect their assets, providing true peace of mind.
1.2 The Problem
Most homeowners and renters do not have an accurate, up-to-date estimate of the value of their household goods. This lack of documentation becomes a critical issue in the aftermath of a catastrophic event like a fire, flood, or major theft.
A person who has just lost their home is often in a state of shock, which quickly leads to feelings of intense vulnerability and a deep fear of the unknown. They are suddenly faced with the overwhelming task of providing a detailed inventory to an insurance company, likely with no idea where to even begin. This external pressure, combined with the personal trauma of the event and the ongoing need to manage work and family, creates immense anger and frustration. The manual alternative—creating an inventory from memory—is not only emotionally taxing but also guarantees inaccuracies, leading to incomplete claims and significant, unrecoverable financial loss.
1.3 Target Audience & Personas
Primary Persona: "The Proactive Homeowner" (Insurance & Preparedness)
Who: A homeowner, typically aged 35-60, financially responsible, and understands the importance of being prepared for emergencies. They are tech-savvy but time-poor due to work and family commitments.
Needs: To create an insurance-grade inventory that ensures maximum and swift reimbursement in the event of a claim. The application must be more than a list; it must be an intelligent guide. It should have awareness of standard insurance practices, such as riders for high-value personal goods (e.g., jewelry, electronics, art). The system must proactively prompt the user to provide specific documentation (like close-up photos or receipts) for items that are likely to exceed standard personal property coverage limits. The ultimate measure of success for this user is a frictionless and complete claims process.
Secondary Persona: "The Millennial Renter" (Financial & Lifestyle Utility)
Who: A renter, typically aged 25-35, who moves every few years. They own a mix of high-value electronics, furniture, and sentimental items.
Needs: While the primary need is the financial benefit of having an accurate inventory for renter's insurance, the key driver for adoption and ongoing engagement is practical, everyday utility. The user wants the inventory to be a living, useful asset.
Lifestyle Integration Potential (Future-Proofing): The system must be designed so the inventory can serve as a "personal asset graph." While not part of the initial V1 build, the architecture must support future integrations where this data can be leveraged. Examples include Wishlists & Gifting or Style & Registry guidance.
1.4 Strategic Goals & Success Metrics
Business Goal: To establish a profitable and scalable subscription service that becomes the leading, most trusted solution for AI-powered home inventory management, validated by strong annual recurring revenue and high customer retention.
Primary Financial Metric (Year 1): Annual Recurring Revenue (ARR)
This is the ultimate measure of success, reflecting the market's willingness to pay for the value delivered. All other metrics will be analyzed as key drivers of ARR.
Key Performance Indicators (KPIs) for Year 1:
Subscriber Activation & Conversion Funnel: Targets for Free, Premium, and Platinum subscribers, and a target Free-to-Premium conversion rate.
User Engagement & Adoption Funnel: Staged goals for users completing one room, a full household, and multiple properties.
System Value & Utility: Targets for both the total number of items and the total estimated value cataloged.
Primary Success Metrics (Post-Year 1):
#1: Membership Renewal Rate: Target >85%.
#2: New Subscription Growth.

2.0 Core Features & User Stories

UI/UX Note: The primary user interface for both creating and viewing inventory will be organized around three main tabs or lenses: Rooms, High-Value Items, and Collections.
Epic 2.1: User Authentication & Account Management
(2.1.1) Signup: As a new user, I want to create a secure account using my email and password. The system must be architected to allow for future social logins without data migration.
(2.1.2) Login: As a returning user, I want to log in with my email and password. The system will lock an account after 5 failed attempts. No "Remember Me" functionality will be offered.
(2.1.3) Password Reset: As a user, I want a secure password reset link sent to my email. The link must be single-use and expire after 10 minutes.
(2.1.4) Manage Household Information: As a new user, immediately after completing registration and logging in for the first time, I must be prompted to create my first Household by providing its location address. As a returning user, I want to be able to edit this address or add new Households (as permitted by my subscription level) from my main account/profile settings page.
(2.1.5) Access Profile Page: As a logged-in user, I want to see a user icon, consistently present on all pages, that allows me to easily navigate to my profile page to manage my account and personal information. The icon will be a small circle with the user's first initial, located in a consistent area of the global navigation.
(2.1.6) Edit Profile Information (Placeholder): (Details to be defined. As a user on my profile page, I want to be able to view and edit my personal information, such as my name and email address.)
Epic 2.2: Room & Photo Management
(2.2.1) Create Room & Upload Photos: As a user, I want a single screen (within the "Rooms" tab) to name a new room and upload photos (JPEG, PNG, WEBP, GIF, HEIC).
Business Rules: Requires 2-4 photos per room. Room creation is limited by subscription level.
User Experience Requirement: The entire process, from naming the room to selecting the photos, must be designed to be intuitive and simple, allowing a user to complete the action in under one minute.
Photo Metadata Validation: The system must check photos for date, time, and location metadata. If missing, it will alert the user and provide three options: (1) Delete the non-compliant photos and proceed with valid ones, (2) Continue with the upload but acknowledge a warning that these photos may not be accepted by insurance companies, or (3) Cancel the upload. The alert will link to a guide on enabling metadata on devices.
Helpful Hints for Photos: The UI will provide tips for taking effective inventory photos, including using good lighting, taking shots from each corner of the room, and opening closet doors.
Epic 2.3: AI-Powered Inventory Generation
(2.3.1) Generate Inventory from Photos: As a user, after selecting photos, I want to click a "Generate Inventory" button to start the process, and I want to see real-time status updates (e.g., "Security Scanning," "Performing AI Analysis").
Pre-processing: The workflow includes security scans, file validation, and HEIC to JPEG conversion. If a security scan fails, the process is aborted, and the user is notified of a corrupt file.
AI Service Error Handling: If the AI API fails, the system will retry once while notifying the user. If it fails a second time, the user is notified of technical difficulties and asked to try again later. The room and photos will be saved to allow retrying the process later.
Epic 2.4: Inventory Management & Reporting
(2.4.1) View Inventory with Filters: As a user, I want to view my complete home inventory through three distinct lenses, accessible via primary tabs: "Rooms," "High-Value Items," and "Collections."
(2.4.2) Edit/Add Items: As a user, I want to edit AI-generated items and add new items manually. All user corrections must be logged for future AI model training(2.4.3) Delete Items & Groupings: As a user, I want the ability to delete a single item, multiple selected items, or entire groupings (like a Room or a Collection) via a simple confirmation pop-up.
(2.4.4) Recover Deleted Items: As a user, I want a "Trash" or "Recently Deleted" area where I can view, restore, or permanently delete items that have been soft-deleted within the last 30 days.
(2.4.5) Export Inventory: As a user, I want to export my inventory.
CSV Export: Available on all subscription levels.
PDF Report Export: A premium feature for Level 2 and above, including item thumbnail images. Level 1 users will see a sample and an upgrade CTA.
Epic 2.5: Subscription Levels & Entitlements
Level 1 (Free): 1 Household, 2 Rooms, 2,000 Items, No Insurance Features.
Level 2 (Premium): 1 Household, 12 Rooms, 20,000 Items, 4 Insurance Analyses, Claims Access.
Level 3 (Platinum): 2 Households, 20 Rooms/household, 200,000 Items, 10 Insurance Analyses, Claims Access.
Level 4 (Platinum Plus): (Architected for, not launched) 3 Households, 20 Rooms/household, 400,000 Items, 15 Insurance Analyses, Claims Access.
Architectural Note: An entitlements engine must allow for easy modification of these limits.
Epic 2.6: High-Value Item Management
(2.6.1) Create a High-Value Item: As a user, I will navigate to the "High-Value Items" tab to begin a dedicated workflow for adding individual HVIs.
(2.6.2) Category-Driven Data Collection: When creating an HVI, the system will first ask for a Category (e.g., Electronics, Jewelry, Art) and then present a customized form with data fields relevant to that category (e.g., Serial Number for electronics, Provenance for art).
(2.6.3) HVI Document Management: As a user, I want to upload and associate files like receipts, appraisals, and certificates of authenticity directly with an HVI record.
(2.6.4) Viewing HVI Details: As a user, HVIs will be clearly tagged in the inventory, and clicking them will open a detailed view showing all specific HVI data and associated documents.
Epic 2.7: Collections Management
(2.7.1) Creating a Collection: As a user, I will create a new "Collection" by giving it a name and selecting a Collection Type (e.g., Books, Music, Wine).
(2.7.2) Adding Items to a Collection: I can add items to a collection via AI photo analysis, manual entry, or by using an automated lookup feature (e.g., scanning a book's ISBN to fetch data from an external API).
(2.7.3) Grouping Existing Items into a Collection: As a user, I want to select multiple existing inventory items and group them into a new or existing collection.
(2.7.4) Viewing a Collection: The collection view will be optimized for the content type, supporting both a "Cover Grid" view and a detailed "List" view with category-specific columns.
Epic 2.8: Dashboard & Financial Reporting
(2.8.1) User Home Dashboard: As a logged-in user, I want to land on a central dashboard that provides an at-a-glance overview of all my inventoried properties and related insurance services, with clear actions I can take.
Inventory Overview: It will display summary cards/tiles for "Rooms," "High-Value Items," and "Collections."
Primary Inventory Actions: It will feature prominent action buttons: "Add Inventory," "Edit Inventory," and "Delete Inventory."
Insurance & Claims Overviews: It will feature dedicated cards for "Insurance Policy" and "Claims," which will be disabled with an "Upgrade" CTA for users on non-qualifying subscription levels.
(2.8.2) Main Dashboard View: As a user, I want a dashboard that shows the total estimated value of my assets, summarized by each Household.
(2.8.3) Household Drill-Down View: When I select a Household, I want to see a dashboard with separate summary totals for Rooms, High-Value Items, and Collections.
(2.8.4) Value Calculation Logic (Technical Requirement): The system must not double-count item values. An item designated as an HVI or part of a Collection will contribute its value only to that group's total, not the Room total.
(2.8.5) HVI & Collections Financial Summary: As a user, I want to see hierarchical financial summaries for HVIs and Collections, showing a grand total, subtotals by category/type, and finally the item-level values.
Epic 2.9: Core Inventory Actions
(2.9.1) Add Inventory Hub: When I click the "Add Inventory" button, I want a selection screen with options to "Add New Room," "Add New Collection," "Add New HVI," "Add to Existing Room," or "Add to Existing Collection."
(2.9.2) Manage Inventory via Master List: When I click "Edit" or "Delete" Inventory, I want to be taken to a master list of my items with powerful filtering (by Household, Room, Collection) and sorting (by Name, Description, Value) capabilities.
Epic 2.10: Insurance Policy Analysis (Placeholder)
(Details to be defined following industry research. This epic will cover the AI-powered extraction of data from user-uploaded insurance policies. The core goal is to analyze the user's coverage and compare it against their inventoried assets to identify critical gaps, under-insurance, and other potential risks that could lead to denied claims.)
Epic 2.11: Claims Support (FNOL)
(2.11.1) Initiate a New Claim (FNOL): As a user experiencing a property loss, I want a guided workflow to collect all necessary information for a First Notice of Loss, using standardized industry terms for the "Cause of Loss."
Damage Documentation: The workflow must prompt the user to upload photos/videos of the damage and include a clear safety warning to only do so if it is safe.
(2.11.2) Generate FNOL Report: As a user, after completing the FNOL workflow, I want to generate a comprehensive report viewable online and downloadable as a PDF.
(2.11.3) AI Claims Coach (Real-time FNOL Guidance): As a user filling out the FNOL form, I want the AI to review my free-text descriptions and provide real-time, helpful suggestions to avoid common mistakes and improve clarity.
Epic 2.12: Claim Lifecycle Tracking (Placeholder)
(This epic is a preliminary draft. Further industry research is required to refine the specific workflows, data fields, and best practices for claim lifecycle management.)
(2.12.1) Track Claim Details & Correspondence: As a user who has filed a claim, I want a single area to track the Claim Number, the Claims Adjuster's contact info, and a log of all communications with the insurer.
Epic 2.13: Promotional & Discount Pricing
Overview:To support marketing campaigns, partnerships, early user acquisition, and long-term monetization strategies, the system will support time-limited promotions, user-specific discounts, and referral-based incentives. All promotional logic must be secure, auditable, and designed to prevent abuse.

User Stories
As a prospective user, I want to enter a promo code during sign-up or upgrade so I can receive a discount on my subscription.
As a marketing manager, I want to create and schedule discount campaigns with start and end dates so I can drive user acquisition.
As a user, I want to refer my friends with a unique code and receive a discount when they subscribe, so I can benefit from spreading the word.
As an admin, I want to see how many times a promo was used and who redeemed it so I can track performance and prevent abuse.

Features
(2.13.1) Promo Code Management Interface (Admin Only)
Admin UI to create new promo codes with the following parameters:
Code (alphanumeric)
Description
Discount Type (Fixed $ or % Off)
Eligible Plan(s)
Max Redemptions (Global and Per-User)
Start Date / End Date
Internal Tags (e.g., Campaign name, Source)
Codes are inactive by default until activated.
(2.13.2) Promo Code Redemption (User-Facing)
Users can enter promo codes:
During sign-up (for paid plans)
During plan upgrade or renewal
UI validation returns clear feedback: code applied, expired, not valid for plan, max uses reached, etc.
Successful redemption updates billing logic and invoice totals.
Discount duration:
One-time
First billing cycle
Recurring (fixed number of cycles)
(2.13.3) Referral Codes
Each user receives a personal referral code.
Referral rules (configurable per campaign):
Referrer: $5 off next month or X% off for 3 months
Referee: X% off initial plan
Includes optional requirement: referee must remain subscribed for N days before reward triggers.
(2.13.4) Time-Based Discount Campaigns
Supports global or targeted price drops during a promotional window (e.g., “Launch Week” or “Cyber Monday”).
Can be set as:
Automatic (no code required)
Code-based
Triggered by system clock and billing engine logic.
(2.13.5) Reporting, Logging & Abuse Controls
Audit trail of all redemptions.
Admin reporting on:
Number of redemptions
Lifetime value of promo users
Revenue impact per campaign
Abuse detection:
Email domain restrictions (optional)
Device/IP flagging
One-use-per-user enforcement
Expired promo lockout

Technical Requirements
Promo Code Data Model
Table: promotions
Fields: code, type, amount, plan_ids, max_redemptions, user_limit, start_date, end_date, active, created_by, tags, is_referral
Redemption Model
Table: promotion_redemptions
Fields: user_id, promotion_id, redeemed_at, discount_applied, referrer_user_id (nullable)
Billing System Integration
All logic integrates with Stripe (or other billing service).
Applied discounts are reflected in subscription metadata and invoice line items.
Webhooks ensure any discount changes are synced with frontend and backend billing history.
JWT & Entitlement Impact
Promo and referral discounts may affect user plan level or expiration date.
Access to features must reflect post-discount subscription level.

Future Considerations (V2 or Later)
Promo stacking logic (support or block combining multiple discounts)
Geotargeted promotions (e.g., for users in specific regions)
A/B testing support (track conversion performance of different campaigns)
Partner-specific discounts (e.g., codes issued to organizations or influencers)
Promo bar / dynamic in-app promotions module

3.0 Technical & System Requirements

3.4 Token Handling & Session Management
Strategy: A two-token system (Access + Refresh) will be used.
Access Token (JWT): Lifespan of 15 minutes.
Refresh Token: Lifespan of 24 hours, stored in a secure, HttpOnly cookie.
Session Renewal: A "silent refresh" mechanism will be used to maintain the session without user interruption.

4.0 Security by Design & Zero Trust Principles

4.4 Secure File Handling & Malware Scanning
All uploaded files must be scanned for malware and viruses in an isolated environment before being processed or stored permanently. If a file is flagged, it will be rejected/quarantined, and the user will be notified of a corrupt file.
4.5 AI & Prompt Injection Defense
The system will use defensive prompting techniques (e.g., delimiters, instruction separation) to prevent users from hijacking the AI model. Input from users will be sanitized, and output from the AI will be validated against expected formats.
Certainly! Below is a clean, human-readable version of the **5.0 API Reference** section, styled for easy copy-pasting into your PRD without markdown characters, special bullets, or formatting symbols.

---

**5.0 API Reference**

This section describes the AI-powered API services used to support inventory generation and insurance policy analysis. These APIs are implemented using OpenAI’s GPT models, integrated through secure, prompt-based requests. Each service uses a structured prompt to enforce predictable, machine-readable output.

---

**5.1 Inventory Generation API**

Overview:
The Inventory Generation API uses OpenAI to analyze user-uploaded room photos and return a structured inventory of identifiable items. The AI returns name, category, estimated value, and descriptive hints to aid in claim documentation.

Endpoint: POST /api/inventory/generate

**Input**

* user\_id (string): Authenticated user identifier
* room\_id (string): Room identifier for photo context
* photos (array of images): JPEG, PNG, HEIC, WEBP formats allowed
* metadata\_override (boolean, optional): If true, allows processing images with missing EXIF metadata

Before sending to OpenAI, photos are pre-processed with the following steps:

* File scan (malware, HEIC to JPEG conversion)
* Metadata validation (date, location)
* Optional image enhancement (planned future feature)

**Prompt Format (OpenAI)**
"You are an AI assistant helping users document their home inventory. You will be provided with images of a room. Return a list of items found in the room as a JSON array. Each item should include:

* name
* category (e.g., Electronics, Furniture, Decor, Tools)
* estimated\_value (in USD)
* condition (Excellent, Good, Fair, Poor)
* location\_hint (brief text indicating where item appears in photo)"

Example Output:
\[
{
"name": "Samsung 65" LED TV",
"category": "Electronics",
"estimated\_value": 750,
"condition": "Good",
"location\_hint": "Mounted on wall above console table"
},
...
]

**Output**

{
"items": \[
{
"name": "Samsung 65" LED TV",
"category": "Electronics",
"estimated\_value": 750,
"condition": "Good",
"location\_hint": "Mounted on wall above console table"
},
{
"name": "Leather Recliner Chair",
"category": "Furniture",
"estimated\_value": 1200,
"condition": "Excellent",
"location\_hint": "Left of fireplace"
}
],
"status": "success"
}

**Error Handling**

* file\_error: Invalid photo format or malware detected (400)
* metadata\_error: Missing required EXIF metadata and override not selected (422)
* ai\_timeout: OpenAI fails to respond (retry once, then return 503)
* output\_malformed: AI returns non-parseable JSON (logged and return 502 with recovery instructions)

---

**5.2 Insurance Policy Analysis API**

Overview:
This API analyzes the content of a user-uploaded insurance policy (PDF or OCR-extracted text) and provides a summary of key coverage terms, exclusions, and recommendations based on the user’s inventory and risk profile.

Endpoint: POST /api/insurance/analyze

**Input**

* user\_id (string): Authenticated user identifier
* policy\_text (string): Extracted raw text from uploaded PDF
* inventory\_summary (object): Summary of current assets by category and estimated value
* location\_context (string): User-provided zip code or location context (optional)

**Prompt Format (OpenAI)**
"You are an expert in U.S. homeowners insurance. Given the user’s current inventory and the raw policy text, identify the most likely coverage gaps, exclusions, or risks. Return output in this JSON format:
{
summary: "...",
gaps: \[
{
area: "Jewelry",
issue: "Coverage limited to \$1,500. Inventory includes \$10K diamond ring.",
recommendation: "Recommend adding a scheduled rider."
}
],
confidence\_level: "High"
}"

**Output**

{
"summary": "This HO-3 policy covers dwelling and personal property but excludes flood and mold damage. Jewelry is covered up to \$1,500.",
"gaps": \[
{
"area": "Jewelry",
"issue": "Coverage limit is \$1,500, but inventory includes high-value items.",
"recommendation": "Suggest scheduling these items with a personal property endorsement."
},
{
"area": "Water Backup",
"issue": "No coverage found for sewer backup.",
"recommendation": "Recommend optional water backup endorsement."
}
],
"confidence\_level": "High"
}

**Error Handling**

* policy\_text\_unreadable: OCR failed or file corrupted (422)
* ai\_output\_format\_invalid: Output not matching expected schema (log, retry once, return 502)
* low\_confidence: AI indicates uncertain or incomplete result (warn user, provide human review option)

---

**5.3 General API Notes**

* Security: All API requests must include a JWT access token and pass a CSRF-safe origin check
* Rate Limits: 60 calls per hour per user for OpenAI-based endpoints (subject to change)
* Telemetry: All prompts, responses, and retries are logged with user ID (hashed) and timestamp for audit and model improvement
* Versioning: These endpoints are part of API version v1.0

---

Let me know if you’d like this exported as a DOCX or PDF for direct inclusion into your working document.



7.0 Future Considerations (Out of Scope for V1)

Insurance claim generation and automated submission to insurance carriers.
Multi-user collaboration on a single home inventory.
A dedicated mobile native application (iOS/Android).
Integration with third-party professionals, such as offering a service to connect users with independent claims adjusters or legal counsel.