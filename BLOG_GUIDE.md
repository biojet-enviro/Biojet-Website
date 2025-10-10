# Blog Guide

This guide explains how to add and manage blog posts for the Biojet website.

## Adding a New Blog Post

### Step 1: Create a New Markdown File

1. Navigate to the `/src/content/blog/` directory
2. Create a new file with a descriptive name using kebab-case (e.g., `my-new-article.md`)
3. The filename will become the URL slug (e.g., `my-new-article.md` → `/blog/my-new-article`)

### Step 2: Add Frontmatter

At the top of your markdown file, add the following frontmatter (metadata) between three dashes:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your blog post that will appear in cards and search results"
pubDate: 2024-10-15
coverImage: "/assets/your-image.jpg"
draft: false
---
```

#### Frontmatter Fields Explained

- **title**: The main title of your blog post (required)
- **description**: A short summary that appears on blog cards and listings (required)
- **pubDate**: Publication date in YYYY-MM-DD format (required)
- **coverImage**: Path to the cover image starting with `/assets/` (required)
- **draft**: Set to `true` to hide the post from the website, `false` to publish it (optional, defaults to false)

### Step 3: Write Your Content

After the frontmatter, write your blog content using Markdown syntax:

```markdown
---
title: "My New Article"
description: "This is an exciting new article about jet aerators"
pubDate: 2024-10-15
coverImage: "/assets/my-new-image.jpg"
draft: false
---

# My New Article

This is the introduction paragraph of my article.

## First Section

Here's some content for the first section.

### Subsection

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Second Section

More content here with **bold text** and *italic text*.
```

### Step 4: Add Your Cover Image

1. Place your cover image in the `/public/assets/` directory
2. Use a descriptive filename (e.g., `advanced-aeration-2024.jpg`)
3. Reference it in the frontmatter as `/assets/your-image-name.jpg`

### Step 5: Build and Preview

Run the development server to preview your changes:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your website with the new blog post.

## Markdown Syntax Guide

### Headings
```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
```

### Lists
```markdown
- Unordered list item 1
- Unordered list item 2

1. Ordered list item 1
2. Ordered list item 2
```

### Links
```markdown
[Link text](https://example.com)
```

### Images (within content)
```markdown
![Alt text](/assets/image-name.jpg)
```

### Blockquotes
```markdown
> This is a quote
```

## How the Blog System Works

### Automatic Features

1. **Homepage Display**: The homepage automatically shows the 4 most recent published blog posts
2. **Blog Listing Page**: The `/blog` page shows all published posts, sorted by date
3. **Individual Post Pages**: Each post gets its own page at `/blog/[filename]`
4. **Draft Posts**: Posts with `draft: true` are hidden from the website

### Sorting

Blog posts are automatically sorted by publication date (newest first) on:
- Homepage blog section
- Blog listing page (`/blog`)

### Publishing vs Drafts

- Set `draft: false` or omit the draft field to publish a post
- Set `draft: true` to work on a post without publishing it yet

## File Structure

```
src/
├── content/
│   ├── blog/
│   │   ├── post-1.md
│   │   ├── post-2.md
│   │   └── your-new-post.md
│   └── config.ts (blog configuration)
├── pages/
│   ├── blog/
│   │   └── [slug].astro (blog post template)
│   ├── blog.astro (blog listing page)
│   └── index.astro (homepage)
└── components/
    └── BlogCard.astro (blog card component)
```

## Example Blog Post

Here's a complete example of a well-formatted blog post:

```markdown
---
title: "Advanced Aeration Techniques for Industrial Applications"
description: "Explore cutting-edge aeration methods that improve efficiency and reduce costs in industrial wastewater treatment."
pubDate: 2024-10-15
coverImage: "/assets/advanced-aeration.jpg"
draft: false
---

# Advanced Aeration Techniques for Industrial Applications

Industrial wastewater treatment demands innovative solutions that balance efficiency with cost-effectiveness. In this article, we explore the latest advancements in jet aeration technology.

## The Evolution of Aeration Systems

Over the past decade, aeration systems have undergone significant improvements...

### Key Innovations

- **High-efficiency nozzles**: Improved oxygen transfer rates
- **Smart controls**: Automated adjustment based on real-time conditions
- **Durable materials**: Extended lifespan in harsh environments

## Benefits for Industrial Facilities

Modern aeration systems provide several advantages:

1. **Energy savings** of up to 50% compared to traditional systems
2. **Reduced maintenance** requirements
3. **Improved treatment performance** in high-strength wastewater

## Conclusion

Investing in advanced aeration technology can transform your wastewater treatment operations...
```

## Tips for Great Blog Posts

1. **Use descriptive titles** that clearly communicate the topic
2. **Write clear descriptions** that encourage readers to click
3. **Include relevant images** to make posts visually appealing
4. **Break content into sections** with headings for easy reading
5. **Use bullet points and lists** to organize information
6. **Keep paragraphs short** for better readability
7. **Proofread** before publishing

## Troubleshooting

### Post not showing up?

- Check that `draft` is set to `false` or omitted
- Verify the frontmatter is correctly formatted
- Make sure the file is in `/src/content/blog/`
- Run `npm run build` to check for errors

### Image not displaying?

- Verify the image exists in `/public/assets/`
- Check that the path starts with `/assets/` (not `/public/assets/`)
- Ensure the filename matches exactly (case-sensitive)

### Build errors?

- Check that all required frontmatter fields are present
- Verify the date is in YYYY-MM-DD format
- Ensure there are three dashes `---` before and after frontmatter

## Need Help?

If you encounter issues or have questions, check the [Astro documentation](https://docs.astro.build/en/guides/content-collections/) for more information about content collections.

