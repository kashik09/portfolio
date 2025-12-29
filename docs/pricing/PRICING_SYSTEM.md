# Pricing Management System

## Overview

A centralized pricing management system that allows you to maintain all pricing information across your portfolio site in a structured, editable format.

## Architecture

### Components

1. **Central Pricing Configuration**: `public/content/pricing.json`
   - Single source of truth for all pricing
   - Structured JSON format with support for:
     - Numeric values
     - Currency symbols
     - Prefix text (e.g., "From", "Starting at")
     - Suffix text (e.g., "/hr", "/mo")
     - Auto-generated display formats
     - Categories (service, membership, budget-range)
     - Metadata for additional context

2. **Admin Interface**: `/admin/content/pricing`
   - Visual editor for all pricing items
   - Organized by category
   - Real-time display format preview
   - No raw JSON editing required

3. **Scripts**:
   - `scripts/generate-pricing-review.ts` - Generate pricing documentation
   - `scripts/update-prices.ts` - Bulk price updates via JSON map

4. **API**: `/api/content/pricing`
   - GET: Fetch pricing data
   - PUT: Update pricing data

## Pricing Data Structure

### Schema

```typescript
interface PricingItem {
  id: string                    // Unique identifier
  name: string                  // Display name
  value: number                 // Numeric price value
  prefix?: string               // Optional prefix (e.g., "From")
  suffix?: string               // Optional suffix (e.g., "/hr")
  displayFormat: string         // Auto-generated display text
  description: string           // Internal description
  category: string              // Category type
  active: boolean               // Whether this pricing is active
  metadata?: Record<string, any> // Additional data
}
```

### Example

```json
{
  "web-dev": {
    "id": "web-dev",
    "name": "Web Development",
    "value": 500,
    "prefix": "From",
    "displayFormat": "From $500",
    "description": "Base price for web development projects",
    "category": "service",
    "active": true
  }
}
```

## Usage

### Method 1: Admin Interface (Recommended)

1. Navigate to `/admin/content/pricing`
2. Edit pricing items visually
3. Click "Save Changes"
4. Changes are immediately reflected

**Pros:**
- Visual interface
- Real-time preview
- No coding required
- Validation built-in

### Method 2: Bulk Update Script

For updating multiple prices at once:

1. Create a pricing map JSON file:

```json
{
  "updates": [
    {
      "id": "web-dev",
      "value": 600,
      "prefix": "Starting at"
    },
    {
      "id": "consulting",
      "value": 125
    }
  ],
  "notes": "Q1 2025 price adjustments"
}
```

2. Test with dry-run:
```bash
npx tsx scripts/update-prices.ts --dry-run my-pricing-map.json
```

3. Apply changes:
```bash
npx tsx scripts/update-prices.ts my-pricing-map.json
```

**Pros:**
- Batch updates
- Version control friendly
- Scriptable/automatable
- Dry-run preview

### Method 3: Direct File Editing

Edit `public/content/pricing.json` directly.

**Pros:**
- Full control
- Fast for single changes

**Cons:**
- Manual format validation
- Must regenerate display formats
- Risk of JSON syntax errors

## Workflows

### Updating Service Prices

**Scenario**: Increase all service prices by 20%

1. Create pricing map:
```json
{
  "updates": [
    { "id": "web-dev", "value": 600 },
    { "id": "mobile-dev", "value": 1800 },
    { "id": "ui-ux", "value": 360 },
    { "id": "consulting", "value": 120 }
  ],
  "notes": "20% increase across all services"
}
```

2. Test: `npx tsx scripts/update-prices.ts --dry-run price-increase.json`
3. Apply: `npx tsx scripts/update-prices.ts price-increase.json`
4. Review: `npx tsx scripts/generate-pricing-review.ts`
5. Commit: `git add . && git commit -m "feat: update service pricing"`

### Seasonal Promotions

**Scenario**: Run a limited-time promotion on Pro membership

1. Go to `/admin/content/pricing`
2. Find "Pro Membership"
3. Update value from 1499 to 1299
4. Update description: "Limited time offer - save $200"
5. Save changes
6. When promotion ends, restore original price

### Adding New Pricing Items

1. Edit `public/content/pricing.json`
2. Add new item with unique ID:
```json
"rush-delivery": {
  "id": "rush-delivery",
  "name": "Rush Delivery",
  "value": 200,
  "prefix": "From",
  "displayFormat": "From $200",
  "description": "Expedited project delivery fee",
  "category": "service",
  "active": true
}
```
3. Regenerate review: `npx tsx scripts/generate-pricing-review.ts`

## Commands Reference

### Generate Pricing Review
```bash
npx tsx scripts/generate-pricing-review.ts
```
- **Output**: `docs/PRICING_REVIEW.md`
- **Purpose**: Documentation and audit trail
- **When**: After any pricing changes

### Update Prices (Dry Run)
```bash
npx tsx scripts/update-prices.ts --dry-run <pricing-map.json>
```
- **Effect**: Preview changes without saving
- **Purpose**: Verify updates before applying
- **When**: Before bulk updates

### Update Prices (Apply)
```bash
npx tsx scripts/update-prices.ts <pricing-map.json>
```
- **Effect**: Applies changes to `public/content/pricing.json`
- **Purpose**: Bulk price updates
- **When**: After dry-run verification

## Integration

### Current Integration Points

The pricing data is currently centralized in `public/content/pricing.json` but still needs to be manually synced with:

1. **Services Page**: `public/content/services.json`
   - Edit the `pricing` field for each service
   - Use the `displayFormat` from pricing.json

2. **Request Form**: `public/content/request-form.json`
   - Update budget ranges in `fields.budgetRanges`

3. **Membership Plans**: `lib/membership-plans.ts`
   - Update the `price` field for each plan

### Future Enhancement: Auto-Sync

To automatically sync pricing data, you could:

1. Create helper functions that read from `pricing.json`
2. Update services/membership components to fetch prices dynamically
3. Add a sync script that updates all dependent files

Example sync function:
```typescript
import pricing from '@/public/content/pricing.json'

export function getPrice(id: string): string {
  return pricing.items[id]?.displayFormat || 'Contact for pricing'
}
```

## Best Practices

1. **Always use dry-run first** when using bulk update script
2. **Regenerate pricing review** after changes for documentation
3. **Commit pricing changes** with clear messages
4. **Document price changes** in pricing map notes
5. **Test pricing display** on all affected pages after updates
6. **Keep backup** of pricing.json before major changes

## Pricing Map Format

### Full Specification

```json
{
  "updates": [
    {
      "id": "item-id",           // Required: pricing item ID
      "value": 500,              // Optional: new numeric value
      "prefix": "From",          // Optional: new prefix
      "suffix": "/hr",           // Optional: new suffix
      "description": "...",      // Optional: new description
      "active": true             // Optional: active status
    }
  ],
  "notes": "Description of this batch update"
}
```

### Examples

**Simple price update:**
```json
{
  "updates": [
    { "id": "web-dev", "value": 550 }
  ]
}
```

**Change pricing style:**
```json
{
  "updates": [
    {
      "id": "web-dev",
      "prefix": "Starting at",
      "value": 500
    }
  ]
}
```

**Multiple changes:**
```json
{
  "updates": [
    { "id": "web-dev", "value": 600 },
    { "id": "mobile-dev", "value": 1800 },
    { "id": "ui-ux", "value": 350 }
  ],
  "notes": "Q1 2025 service price increase"
}
```

## Troubleshooting

### Issue: Changes not reflected on site

**Solution:**
1. Verify `public/content/pricing.json` was updated
2. Check if services.json, request-form.json need manual sync
3. Clear browser cache and reload
4. Check for any caching on the server side

### Issue: Display format looks wrong

**Solution:**
1. The format is auto-generated from value + prefix + suffix
2. Update in admin interface to see real-time preview
3. For custom formats, edit `displayFormat` directly in JSON

### Issue: Script fails with "Item not found"

**Solution:**
1. Check the ID in your pricing map matches an ID in pricing.json
2. IDs are case-sensitive
3. Use `jq '.items | keys' public/content/pricing.json` to list all IDs

## File Locations

- **Pricing Data**: `public/content/pricing.json`
- **Admin UI**: `app/admin/content/pricing/page.tsx`
- **API Route**: `app/api/content/pricing/route.ts`
- **Update Script**: `scripts/update-prices.ts`
- **Review Generator**: `scripts/generate-pricing-review.ts`
- **Documentation**: `docs/PRICING_REVIEW.md`
- **Example Map**: `pricing-map.example.json`

## Version History

- **v1.0** (2025-12-24): Initial pricing system implementation
  - Central pricing configuration
  - Admin editor interface
  - Bulk update script
  - Documentation generator
