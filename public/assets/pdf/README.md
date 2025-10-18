# Product PDF Datasheets

This directory contains PDF datasheets for products.

## File Naming Convention
Use descriptive names for your PDF files, for example:
- `biojet-bjm-01-datasheet.pdf`
- `biojet-bjm-02-datasheet.pdf`
- `biojet-bjm-03-datasheet.pdf`

## How to Add a PDF to a Product

1. Place your PDF file in this directory (`public/assets/pdf/`)
2. In `src/pages/index.astro` (or any page using ProductCard), add the `pdfUrl` prop:

```astro
<ProductCard
  name={t.products.product1Name}
  model={t.products.product1Model}
  image="/assets/product-1.png"
  serviceLife={t.products.product1ServiceLife}
  material={t.products.product1Material}
  description={t.products.product1Desc}
  pdfUrl="/assets/pdf/biojet-bjm-01-datasheet.pdf"
/>
```

3. If a product doesn't have a PDF yet, simply omit the `pdfUrl` prop, and the "Download PDF" button will be hidden automatically.

## Example

**With PDF (button will show):**
```astro
<ProductCard
  name="Jet Aerator"
  model="BJM-01"
  image="/assets/product-1.png"
  serviceLife="5-7 Years"
  material="PVDF"
  description="High-efficiency jet aerator"
  pdfUrl="/assets/pdf/bjm-01-datasheet.pdf"
/>
```

**Without PDF (button will be hidden):**
```astro
<ProductCard
  name="Jet Aerator"
  model="BJM-01"
  image="/assets/product-1.png"
  serviceLife="5-7 Years"
  material="PVDF"
  description="High-efficiency jet aerator"
/>
```

