# 📋 Post-Deployment SEO Setup Guide

**For:** kaiya.taxi & hokkaido.taxi  

> [!IMPORTANT]
> All code changes are complete and verified. This document covers the **manual steps** you need to do in the browser after deploying. Follow each section in order.

---

## Table of Contents

1. [Step 1: Deploy Both Sites](#step-1-deploy-both-sites)
2. [Step 2: Verify Deployment](#step-2-verify-deployment)
3. [Step 3: Google Search Console Setup](#step-3-google-search-console-setup)
4. [Step 4: Google Business Profile](#step-4-google-business-profile)
5. [Step 5: Google Reviews Strategy](#step-5-google-reviews-strategy)
6. [Step 6: Submit to Aggregator Sites](#step-6-submit-to-aggregator-sites)
7. [Step 7: AI Platform Submissions](#step-7-ai-platform-submissions)
8. [Step 8: Ongoing Maintenance Checklist](#step-8-ongoing-maintenance-checklist)

---

## Step 1: Deploy Both Sites

### What to do

Push the latest code to your Hostinger hosting for **both** projects.

### Critical changes that MUST be deployed

| Project | Key Changes |
|---|---|
| **kaiya.taxi** | Enhanced JSON-LD schemas, FAQPage schema, `llms.txt`, Japanese locale |
| **hokkaido.taxi** | **Fixed `.env.production`** (was pointing to kaiya.taxi!), enhanced schemas, FAQPage, `llms.txt`, Japanese locale |

> [!CAUTION]
> The hokkaido.taxi `.env.production` fix is **critical**. Until deployed, hokkaido.taxi's sitemap, robots.txt, and all canonical URLs still point to kaiya.taxi — this is actively hurting both sites' SEO rankings.

### Deployment Steps (Hostinger)

1. Connect to your Hostinger server via SSH or Git deployment
2. Pull the latest code for **both** projects
3. Run `npm run build` (or `npx next build`) for each project
4. Restart both Node.js processes (different ports)
5. Verify both sites are accessible

---

## Step 2: Verify Deployment

After deploying, verify everything is working correctly.

### Checklist for kaiya.taxi

| Check | URL | What to look for |
|---|---|---|
| ✅ Homepage loads | `https://kaiya.taxi/` | Site loads normally |
| ✅ Japanese locale works | `https://kaiya.taxi/ja` | Japanese text appears |
| ✅ Sitemap correct | `https://kaiya.taxi/sitemap.xml` | All URLs point to `kaiya.taxi` |
| ✅ Robots.txt correct | `https://kaiya.taxi/robots.txt` | Sitemap URL points to `kaiya.taxi` |
| ✅ llms.txt accessible | `https://kaiya.taxi/llms.txt` | Business info text file loads |
| ✅ Schema validation | [Google Rich Results Test](https://search.google.com/test/rich-results) | Enter `kaiya.taxi` — should show TaxiService, Organization, FAQPage |

### Checklist for hokkaido.taxi

| Check | URL | What to look for |
|---|---|---|
| ✅ Homepage loads | `https://hokkaido.taxi/` | Site loads normally |
| ✅ Japanese locale works | `https://hokkaido.taxi/ja` | Japanese text appears |
| ✅ Sitemap correct | `https://hokkaido.taxi/sitemap.xml` | All URLs point to `hokkaido.taxi` (**NOT** kaiya.taxi) |
| ✅ Robots.txt correct | `https://hokkaido.taxi/robots.txt` | Sitemap URL points to `hokkaido.taxi` |
| ✅ llms.txt accessible | `https://hokkaido.taxi/llms.txt` | Business info text file loads |
| ✅ Schema validation | [Google Rich Results Test](https://search.google.com/test/rich-results) | Enter `hokkaido.taxi` — should show TaxiService, Organization, FAQPage |

> [!WARNING]
> If `hokkaido.taxi/sitemap.xml` still shows `kaiya.taxi` URLs, the `.env.production` fix was not deployed. Redeploy immediately.

### How to Validate Schema (JSON-LD)

1. Go to: **https://search.google.com/test/rich-results**
2. Enter `https://kaiya.taxi/` and click **Test URL**
3. You should see these detected schemas:
   - ✅ `TaxiService`
   - ✅ `Organization`
   - ✅ `WebSite`
   - ✅ `BreadcrumbList`
   - ✅ `FAQPage` (with all your FAQ questions listed)
4. Repeat for `https://hokkaido.taxi/`

Alternative tool: **https://validator.schema.org/** — paste the URL and check for errors.

---

## Step 3: Google Search Console Setup

> [!IMPORTANT]
> Google Search Console is **the most important** step. It tells Google your sites exist, lets you submit sitemaps, and shows you how your sites perform in search results.

### 3.1 Create a Google Account (if needed)

Your client can use **any email** — they don't need Gmail.

1. Go to: **https://accounts.google.com/signup**
2. Choose **"Use my existing email instead"**
3. Enter: `c.contact@kaiya.taxi` (or `c.contact@hokkaido.taxi`)
4. Complete the signup process
5. This one Google account will manage both sites

### 3.2 Add kaiya.taxi to Search Console

1. Go to: **https://search.google.com/search-console**
2. Sign in with the Google account
3. Click **"Add property"** (top-left dropdown)
4. Choose **"Domain"** property type
5. Enter: `kaiya.taxi`
6. Click **Continue**

#### DNS Verification

Google will give you a **TXT record** to add to your DNS:

```
Type: TXT
Name: @ (or leave blank)
Value: google-site-verification=XXXXXXXXXXXXXXXXX (Google gives you this)
TTL: 3600 (or default)
```

**Where to add this (Hostinger):**
1. Log in to Hostinger → **Domains** → `kaiya.taxi`
2. Go to **DNS / Name Servers** → **DNS Records**
3. Click **Add Record** → Type: **TXT**
4. Paste the verification value Google gave you
5. Save and wait 5-15 minutes
6. Go back to Google Search Console and click **Verify**

### 3.3 Add hokkaido.taxi to Search Console

Repeat the exact same process:

1. In Search Console, click **"Add property"** again
2. Enter: `hokkaido.taxi`
3. Add the DNS TXT record to hokkaido.taxi's DNS in Hostinger
4. Verify

### 3.4 Submit Sitemaps

After both sites are verified:

#### For kaiya.taxi:
1. In Search Console, select `kaiya.taxi` from the property dropdown
2. Go to **Sitemaps** (left sidebar)
3. Enter: `sitemap.xml`
4. Click **Submit**
5. Status should show **"Success"** (may take a few minutes)

#### For hokkaido.taxi:
1. Switch to `hokkaido.taxi` property
2. Go to **Sitemaps**
3. Enter: `sitemap.xml`
4. Click **Submit**

### 3.5 Request Indexing

For faster results, manually request indexing of your main pages:

1. In Search Console, go to **URL Inspection** (top search bar)
2. Enter these URLs one by one and click **"Request Indexing"** for each:

**kaiya.taxi:**
```
https://kaiya.taxi/
https://kaiya.taxi/ja
https://kaiya.taxi/fr
https://kaiya.taxi/zh
https://kaiya.taxi/ko
https://kaiya.taxi/th
https://kaiya.taxi/vi
https://kaiya.taxi/terms
https://kaiya.taxi/privacy
https://kaiya.taxi/disclosure
```

**hokkaido.taxi:**
```
https://hokkaido.taxi/
https://hokkaido.taxi/ja
https://hokkaido.taxi/fr
https://hokkaido.taxi/zh
https://hokkaido.taxi/ko
https://hokkaido.taxi/th
https://hokkaido.taxi/vi
https://hokkaido.taxi/terms
https://hokkaido.taxi/privacy
https://hokkaido.taxi/disclosure
```

> [!NOTE]
> Google may take 1-4 weeks to fully index all pages. The sitemap submission speeds this up significantly.

---

## Step 4: Google Business Profile

> [!IMPORTANT]
> Google Business Profile (GBP) creates the **rich business card** that appears in Google Search and Google Maps. This is what makes you appear when someone searches "taxi service Hokkaido" or "airport transfer Chitose".

### 4.1 Create Profile for Kaiya Taxi

1. Go to: **https://business.google.com/**
2. Sign in with the same Google account
3. Click **"Add your business"** or **"Manage now"**
4. Enter business name: **Kaiya Taxi**

#### Fill in these details:

| Field | Value |
|---|---|
| **Business name** | Kaiya Taxi |
| **Category** | `Taxi service` (primary) |
| **Additional categories** | `Airport shuttle service`, `Transportation service`, `Tour operator` |
| **Address** | Shinano 4-11-4-2F-C, Chitose, Hokkaido 066-0062, Japan |
| **Service area** | Hokkaido, Japan (add: Sapporo, Chitose, Niseko, Furano, Otaru) |
| **Phone** | +81-80-8293-8862 |
| **Website** | https://kaiya.taxi/ |
| **Booking link** | https://book.kaiya.taxi/ |
| **Hours** | Open 24 hours, 7 days a week |
| **Description** | Kaiya Taxi is a licensed private transfer and taxi company based in Chitose, Hokkaido. We provide safe, comfortable, and reliable airport transfers, private transportation, and sightseeing services throughout Hokkaido with professional drivers and premium vehicles. Services include airport pickup at New Chitose Airport, hotel transfers, point-to-point transportation, hourly charter, and custom day trips. We offer transparent pricing, real-time flight tracking, and multilingual support in English, French, Chinese, Korean, Thai, and Vietnamese. |
| **Languages** | English, Japanese, French, Chinese, Korean, Thai, Vietnamese |

#### Attributes to enable:
- ✅ Appointment required
- ✅ Online appointments
- ✅ Wheelchair accessible
- ✅ Credit cards accepted

### 4.2 Create Profile for Hokkaido Taxi

Repeat the same process:

| Field | Value |
|---|---|
| **Business name** | Hokkaido Taxi |
| **Category** | `Taxi service` (primary) |
| **Additional categories** | `Airport shuttle service`, `Transportation service`, `Tour operator` |
| **Address** | Shinano 4-11-4-2F-C, Chitose, Hokkaido 066-0062, Japan |
| **Service area** | Hokkaido, Japan (add: Sapporo, Chitose, Niseko, Furano, Otaru) |
| **Phone** | +81-80-8293-8862 |
| **Website** | https://hokkaido.taxi/ |
| **Booking link** | https://www.book.hokkaido.taxi/ |
| **Hours** | Open 24 hours, 7 days a week |
| **Description** | Hokkaido Taxi by Kaiya is a licensed private transfer and taxi company based in Chitose, Hokkaido, Japan. We provide premium airport transfers from New Chitose Airport, hotel transportation, hourly charter services, and customized sightseeing day trips throughout Hokkaido. Our services include ski resort transfers to Niseko and Furano, cultural tours, hot springs trips, and multi-day tours. Professional drivers, transparent pricing, and 24/7 support with multilingual assistance. |

### 4.3 Verify the Business

Google will need to verify your business. Options:

| Method | How it works | Time |
|---|---|---|
| **Phone** | Google calls +81-80-8293-8862 with a code | Instant |
| **Postcard** | Google mails a postcard to the business address | 1-2 weeks |
| **Email** | Google sends a code to the business email | Instant |
| **Video** | Record a short video showing the business | 1-3 days |

> [!TIP]
> **Phone verification is fastest.** When you create the profile, select phone verification and have the phone ready to receive the call from Google.

### 4.4 Add Photos to GBP

After verification, upload high-quality photos:

- **Logo** — Kaiya/Hokkaido logo
- **Cover photo** — Premium vehicle or scenic Hokkaido road
- **Interior photos** — Clean vehicle interiors
- **Driver photos** — Professional drivers in uniform
- **Vehicle fleet** — Different vehicle types available
- **Airport pickup** — Driver with name sign at airport

> [!TIP]
> Businesses with photos get **42% more direction requests** and **35% more website clicks** on Google.

---

## Step 5: Google Reviews Strategy

> [!IMPORTANT]
> **Google Reviews are the #1 factor** for ranking above competitors in local search. A business with 20+ reviews at 4.5+ stars will dominate local search results.

### 5.1 Get the Review Link

After your GBP is verified:

1. Go to **https://business.google.com/**
2. Select your business
3. Click **"Get more reviews"** or **"Share review form"**
4. Google gives you a short link like: `https://g.page/r/YOUR_ID/review`
5. Save this link — you'll share it with customers

### 5.2 How to Ask for Reviews

#### Method 1: After every ride (Best method)
Send a message to each customer after their ride:

**English template:**
```
Hi [Name],

Thank you for choosing Kaiya Taxi for your trip in Hokkaido! 🙏

We hope you had a comfortable journey. If you have a moment, 
we'd truly appreciate a review on Google — it helps other 
travelers find us:

👉 [PASTE YOUR GOOGLE REVIEW LINK HERE]

Thank you for your support!
— Kaiya Taxi Team
```

**Japanese template:**
```
[お名前]様

この度はKaiya Taxiをご利用いただき、誠にありがとうございます🙏

快適な旅をお楽しみいただけましたら、Googleでのレビューを
いただけると大変嬉しく思います。他の旅行者の方々の
参考になります：

👉 [GOOGLEレビューリンクをここに貼り付け]

ご支援に感謝いたします！
— Kaiya Taxi チーム
```

#### Method 2: QR Code in vehicle
1. Generate a QR code from your Google review link (use https://www.qr-code-generator.com/)
2. Print it on a small card
3. Place it in the vehicle with text: "Enjoyed your ride? Leave us a review! ⭐"

#### Method 3: Email follow-up
Add a review link to your booking confirmation email or post-ride email.

### 5.3 Review Goals

| Milestone | Impact |
|---|---|
| **5 reviews** | Profile starts appearing in search |
| **10 reviews** | Eligible for Google's local pack (map results) |
| **20+ reviews** | Competitive advantage over most local services |
| **50+ reviews** | Dominate local search for taxi/transfer keywords |

> [!WARNING]
> **Never buy fake reviews.** Google detects and removes them, and may penalize your business. Only ask real customers.

### 5.4 Respond to Every Review

Always respond to reviews — it shows you care and improves ranking:

**Positive review response:**
```
Thank you so much for your kind words, [Name]! We're delighted 
you had a wonderful experience. We look forward to welcoming 
you back to Hokkaido! 🙏
```

**Negative review response:**
```
Thank you for your feedback, [Name]. We're sorry your experience 
didn't meet our standards. We'd like to make this right — please 
contact us at c.contact@kaiya.taxi so we can address your concerns 
directly.
```

---

## Step 6: Submit to Aggregator Sites

Listing on these platforms creates **backlinks** (improves SEO) and **visibility** (customers find you).

### 6.1 Google Maps (Automatic)

Your Google Business Profile automatically appears on Google Maps. No extra action needed.

### 6.2 TripAdvisor

1. Go to: **https://www.tripadvisor.com/Owners**
2. Click **"List your business"**
3. Select **"Transportation"**
4. Fill in your business details for **both** Kaiya Taxi and Hokkaido Taxi
5. Verify ownership
6. Complete your profile with photos and description

### 6.3 Japan-Specific Platforms

| Platform | URL | Why it matters |
|---|---|---|
| **Tabelog** | https://tabelog.com/ | Japan's most popular review site |
| **Jalan.net** | https://www.jalan.net/ | Major Japanese travel booking platform |
| **Rakuten Travel** | https://travel.rakuten.co.jp/ | Popular for domestic Japanese travelers |
| **Japan-Guide.com** | https://www.japan-guide.com/ | Top English-language Japan travel resource |

### 6.4 International Travel Platforms

| Platform | URL | Action |
|---|---|---|
| **Viator** | https://supplier.viator.com/ | List as a transportation provider |
| **GetYourGuide** | https://supplier.getyourguide.com/ | List tours and transfers |
| **Klook** | https://www.klook.com/merchant/ | Popular in Asia-Pacific market |
| **Booking.com** | https://join.booking.com/taxi/ | Booking.com taxi/transfer listing |
| **Rome2Rio** | https://www.rome2rio.com/ | Route comparison — list your routes |

### 6.5 Business Directories

| Directory | URL | Action |
|---|---|---|
| **Yelp Japan** | https://biz.yelp.com/ | Create business listing |
| **Facebook** | https://www.facebook.com/pages/create | Create business pages for both |
| **Instagram** | https://www.instagram.com/ | Create business profiles |
| **Apple Maps** | https://mapsconnect.apple.com/ | Add business to Apple Maps |
| **Bing Places** | https://www.bingplaces.com/ | Add to Bing search engine |

> [!TIP]
> **Priority order:** Google Business Profile → TripAdvisor → Viator/Klook → Social media → Everything else. Don't try to do all at once — focus on the top 3-5 first.

---

## Step 7: AI Platform Submissions

These steps help AI assistants (ChatGPT, Google Gemini, Perplexity) recommend your services.

### 7.1 llms.txt (Already Done ✅)

Both sites now have `llms.txt` files that AI models can read:
- `https://kaiya.taxi/llms.txt`
- `https://hokkaido.taxi/llms.txt`

### 7.2 ChatGPT Plugins / Actions (Future)

OpenAI may open a directory for business listings. Monitor:
- https://openai.com/chatgpt/plugins/

### 7.3 Bing AI / Copilot

Since Bing powers Copilot, listing on **Bing Places** (Step 6.5) automatically feeds into Microsoft Copilot recommendations.

### 7.4 Perplexity

Perplexity crawls the web like Google. Having strong SEO (schema, reviews, backlinks) means Perplexity will naturally find and recommend your service.

> [!NOTE]
> The best way to appear in AI recommendations is: strong Google presence + good reviews + structured data (all done) + backlinks from travel sites (Step 6).

---

## Step 8: Ongoing Maintenance Checklist

### Weekly (5 minutes)

- [ ] Check Google Search Console for crawl errors
- [ ] Respond to any new Google reviews

### Monthly (30 minutes)

- [ ] Review Search Console **Performance** report — check clicks, impressions, CTR
- [ ] Check which search queries are bringing traffic
- [ ] Post a **Google Business Profile update** (photo, offer, or news)
- [ ] Share a post on social media (if you have accounts)

### Quarterly (1 hour)

- [ ] Review and update business descriptions if services change
- [ ] Check competitor rankings — search "taxi Hokkaido" and note your position
- [ ] Update photos on Google Business Profile
- [ ] Review and update FAQ content if common questions change

### Yearly

- [ ] Review all listings across platforms for accuracy
- [ ] Update copyright year in footer
- [ ] Consider adding more languages based on customer demographics
- [ ] Review pricing and service descriptions across all platforms

---

## Quick Reference Card

### Account Credentials Needed

| Service | Account Email | URL |
|---|---|---|
| Google Account | `c.contact@kaiya.taxi` | https://accounts.google.com |
| Google Search Console | Same as above | https://search.google.com/search-console |
| Google Business Profile | Same as above | https://business.google.com |

### Contact Info (for all listings)

| Field | Value |
|---|---|
| **Phone** | +81-80-8293-8862 |
| **Email (Kaiya)** | c.contact@kaiya.taxi |
| **Email (Hokkaido)** | c.contact@hokkaido.taxi |
| **Address** | Shinano 4-11-4-2F-C, Chitose, Hokkaido 066-0062, Japan |
| **Hours** | 24/7 |
| **Website (Kaiya)** | https://kaiya.taxi/ |
| **Website (Hokkaido)** | https://hokkaido.taxi/ |
| **Booking (Kaiya)** | https://book.kaiya.taxi/ |
| **Booking (Hokkaido)** | https://www.book.hokkaido.taxi/ |

### Business Categories (for all listings)

**Primary:** Taxi service  
**Additional:** Airport shuttle service, Transportation service, Tour operator, Chauffeur service

### Expected Timeline

| Milestone | When |
|---|---|
| Deploy + Schema validation | Day 1 |
| Google Search Console setup | Day 1-2 |
| Google Business Profile created | Day 2-3 |
| GBP verification complete | Day 2 (phone) or Week 2 (postcard) |
| First Google Reviews | Week 1-2 |
| Google starts indexing pages | Week 1-4 |
| FAQ rich results appear | Week 2-6 |
| Local pack ranking improvement | Month 1-3 |
| Competitive advantage visible | Month 3-6 |

---

> [!TIP]
> **Start with Step 1-3 today.** Deploy, set up Search Console, and create Google Business Profile. These three steps alone will have the biggest impact on your visibility. Everything else can be done gradually over the following weeks.
