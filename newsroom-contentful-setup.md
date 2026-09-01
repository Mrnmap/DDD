# Newsroom in Contentful: Step-by-step guide

This guide assumes you are new to Contentful. It explains the basic terms and then walks you through setting up the Newsroom listing and detail pages so they work with the current codebase.

## Quick glossary (plain language)
- Space: Your Contentful workspace (like a project).
- Environment: A copy of your content model and entries (usually `master`).
- Content type: A template for a kind of content (like a schema).
- Entry: A piece of content created from a content type.
- Publish: Makes an entry visible to the website.
- Tags: Labels you attach to entries; we use them as Categories.

## Where to click in Contentful
- Content model: Create or edit content types and fields.
- Content: Create or edit entries (the actual content).
- Settings: Locales, Tags, API keys, and Environment settings.

## Step 1: Open the right space and environment
1. Log in to Contentful.
2. Choose the space used by this website.
3. Pick the correct environment (usually `master`) in the top-left environment menu.

## Step 2: Confirm locales (languages)
1. Go to Settings -> Locales.
2. Make sure these locales exist: `en` and `ar`.
3. If you add fields later, enable localization for any text that should change per language.

## Step 3: Create Tags (these are your Categories)
Contentful metadata tags are not localized, so they should not be used as the
display source for the newsroom business unit filter. Use the existing
`Article.categories` reference field instead.

1. Go to Settings -> Tags.
2. Click Create tag.
3. Use a short, lowercase Tag ID (example: `aviation`, `business`, `infrastructure`).
4. Set a human-readable Name (example: `Aviation`).
5. Save the tag.

Notes:
- Tags can still be useful for internal organization, but the newsroom filter
  label should come from localized category entries.
- Keep Tag IDs stable if you want to preserve the compatibility fallback during
  rollout.

## Step 3.1: Create localized business unit categories
Use the existing `Article.categories` reference field for newsroom business
units.

1. Open the content type already used by the site for category-style entries
   (`LinkItem` or `ListOption`, depending on your space).
2. Create or reuse one entry per business unit.
3. Set the stable key to match the newsroom IDs exactly:
   - `corporate`
   - `aviation`
   - `nrlogistics`
   - `nrrealestate`
4. Localize the display label in both `en` and `ar`.
5. Reuse these same entries across all newsroom articles.

### Bulk migration for existing newsroom posts
If you already have many newsroom articles tagged with the legacy metadata tags,
you can migrate them in bulk with the repo script:

1. Create the localized category entries first.
2. Set the stable key on each entry to one of:
   - `corporate`
   - `aviation`
   - `nrlogistics`
   - `nrrealestate`
3. Add `NEXT_CMA_TOKEN`, `NEXT_SPACE_ID`, and `NEXT_ENV_ID` to `.env.local`.
4. Run a dry run:
   - `yarn newsroom:migrate-business-units:dry`
5. If your category entries use `uniqueKey` or `value` with those exact keys,
   the script will resolve them automatically.
6. If not, provide an explicit map and rerun the dry run:

```bash
export NEWSROOM_BUSINESS_UNIT_MAP='{"corporate":"ENTRY_ID_1","aviation":"ENTRY_ID_2","nrlogistics":"ENTRY_ID_3","nrrealestate":"ENTRY_ID_4"}'
yarn newsroom:migrate-business-units:dry
```

7. Once the output looks correct, apply the migration:
   - `yarn newsroom:migrate-business-units`

Optional:
- Set `NEWSROOM_LISTING_ID=<entry-id>` to migrate only one `NewsroomListing`
  entry at a time.

## Step 4: Verify your existing Article content type (do not recreate)
You already have an `Article` content type. The Newsroom code expects specific field IDs. We only need a subset of fields; the extra fields are fine.

### 4.1 Check the required field IDs
1. Go to Content model -> Article.
2. Click each field and confirm its Field ID (API identifier).
3. These IDs must exist so the current code can read them:

| Required field | Required Field ID | Notes |
| --- | --- | --- |
| Title | `title` | Used in listing + detail |
| Slug | `slug` | Used in the URL query param |
| Date | `date` | Used in listing + year filter |
| Image | `image` | Used in listing + detail |
| Text | `text` | Used for search + fallback body |
| Rich text content | `richTextContent` | Used for full detail body |

If any Field ID is different:
- Option A (recommended): Update the field ID in Contentful to match the table.
- Option B: Update queries in `src/schemas/NewsroomArticles.ts` to match your field IDs.

Tip: Use a lowercase, hyphenated slug (example: `dubai-south-records-2023`). This slug is used in the URL query.

## Step 5: Create NewsroomListing (content type)
1. Go to Content model -> Add content type.
2. Name: `NewsroomListing`.
3. API identifier: `newsroomListing`.
4. Add these fields (IDs must match exactly):

| Field name | Field ID | Type | Localized | Required |
| --- | --- | --- | --- | --- |
| Title | `title` | Short text | Yes | Yes |
| Intro text | `introText` | Long text | Yes | Yes |
| Search placeholder | `searchPlaceholder` | Short text | Yes | Yes |
| Category label | `categoryLabel` | Short text | Yes | Yes |
| Year label | `yearLabel` | Short text | Yes | Yes |
| Filter button label | `filterButtonLabel` | Short text | Yes | Yes |
| Items per page | `itemsPerPage` | Integer | No | Yes |
| Articles | `articles` | Reference (many) -> Article | No | Yes |
| Component styles | `componentStyles` | Reference (one) -> ComponentStyles | No | No |

Note: The listing page only shows Articles that are linked in this `articles` field.

## Step 6: Create NewsroomDetails (content type)
1. Go to Content model -> Add content type.
2. Name: `NewsroomDetails`.
3. API identifier: `newsroomDetails`.
4. Add these fields (IDs must match exactly):

| Field name | Field ID | Type | Localized | Required |
| --- | --- | --- | --- | --- |
| Recent news title | `recentNewsTitle` | Short text | Yes | Yes |
| Recent news limit | `recentNewsLimit` | Integer | No | Yes |
| Component styles | `componentStyles` | Reference (one) -> ComponentStyles | No | No |

If `ComponentStyles` already exists in your space, reuse it. If it does not exist, ask a developer to confirm the expected structure before creating it.

## Step 7: Create Article entries
Follow these steps for each Newsroom article you want to publish:

1. Go to Content -> Article -> Add entry.
2. Title: add a clear headline (localized in `en` and `ar`).
3. Slug: use lowercase hyphenated text (example: `newsroom-aviation-growth-2024`).
   - Slugs must be unique across all Articles.
4. Date: select the correct publish date (used by the Year filter).
5. Image: upload a large landscape image (this is required for both listing and detail).
6. Text: add a short summary (used by the search and as a fallback body).
7. RichTextContent: add the full article body (recommended for the detail page).
8. Variant (if required in your Article type):
   - Pick a safe default used elsewhere, or leave blank if it is optional.
   - The Newsroom components do not read variant, but other parts of the site might.
9. Business unit categories:
   - In the `categories` field, select the localized business unit entry or entries.
   - The newsroom filter uses the localized category label and the stable key.
10. Optional metadata tags:
   - In the right sidebar, you can still assign matching tags such as `aviation`.
   - These are only a compatibility fallback, not the primary translated label source.
11. Save, then Publish.

Repeat for every newsroom article.

## Step 8: Create the NewsroomListing entry
1. Go to Content -> NewsroomListing -> Add entry.
2. Fill the UI labels (Title, Intro text, Search placeholder, Category label, Year label, Filter button label).
3. Set Items per page (use `6` to match the design).
4. Link all Article entries in the Articles field.
5. Save, then Publish.

Important: The Category and Year filters only use the Articles linked here.

## Step 9: Create the NewsroomDetails entry
1. Go to Content -> NewsroomDetails -> Add entry.
2. Set Recent news title (example: `Most recent news`).
3. Set Recent news limit (use `3` to match the design).
4. Save, then Publish.

## Step 10: Add components to Pages
The site uses the `Page` content type with a `topSectionCollection` field.

1. Go to Content -> Page.
2. Create or edit the Page with slug `newsroom`.
3. In topSectionCollection, add the NewsroomListing entry.
4. Publish the Page entry.
5. Create or edit the Page with slug `newsroom/detail`.
6. In topSectionCollection, add the NewsroomDetails entry.
7. Publish the Page entry.

## Step 11: Add API keys to the site (one-time setup)
1. Go to Settings -> API keys in Contentful.
2. Create or copy a Content Delivery API key.
3. Add these values to your `.env` file:

```
NEXT_SPACE_ID=your_space_id
NEXT_ENV_ID=master
NEXT_ACCESS_TOKEN=your_delivery_api_token
```

Optional preview:
- Create a Preview API key and use `?preview_token=...` in the URL.

## Step 12: Verify everything works
1. Open `/en/newsroom` and confirm the listing shows articles.
2. Use the Business Unit filter and confirm it filters by the localized
   `categories` labels.
3. Use the Year filter and confirm it filters by date.
4. Click a card and confirm the details page shows the full article.
5. Confirm the Most recent news sidebar shows 3 other articles.

## Common issues and fixes
- No articles show in the list: Make sure Articles are linked in the NewsroomListing entry and all entries are published.
- Business unit dropdown shows fallback labels: Make sure `categories` entries
  are assigned to Article entries and their labels are localized in both `en`
  and `ar`.
- Details page is blank: The `article` query param must match the Article slug.
- Recent news is empty: Ensure there are at least 2 published Articles.
- Arabic is missing: Make sure localized fields are filled for `ar` and published.
