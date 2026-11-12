import type { ContentDictionary } from "../../types";

/**
 * English page content: the source for every other language.
 * Text supports **bold** and `code`.
 */
const content: ContentDictionary = {
  categories: {
    "image-tools": {
      name: "Image Tools",
      shortName: "Image",
      tagline: "Compress and resize",
      description:
        "Free image tools that run in your browser. Your photos are processed on your own device and never uploaded to a server.",
    },
    "pdf-tools": {
      name: "PDF Tools",
      shortName: "PDF",
      tagline: "Merge and convert",
      description:
        "Work with PDF files without installing software. Files stay on your device, which keeps private documents private.",
    },
    calculators: {
      name: "Calculators",
      shortName: "Calculators",
      tagline: "Calculate anything",
      description:
        "Fast, accurate calculators for loans, finance and everyday maths, with the full breakdown behind every result.",
    },
    "text-tools": {
      name: "Text Tools",
      shortName: "Text",
      tagline: "Edit and format text",
      description:
        "Count, clean and transform text instantly. Useful for students, writers, bloggers and anyone with a word limit.",
    },
    "developer-tools": {
      name: "Developer Tools",
      shortName: "Developer",
      tagline: "JSON and encoding",
      description:
        "Everyday utilities for developers: format, validate and convert data without pasting it into a remote server.",
    },
    "seo-tools": {
      name: "SEO Tools",
      shortName: "SEO",
      tagline: "Keywords and snippets",
      description:
        "Find keyword ideas and check how your pages appear in search results, with tools built for bloggers and site owners.",
    },
  },

  tools: {
    "image-compressor": {
      name: "Image Compressor",
      summary: "Shrink JPG, PNG and WebP images without visible quality loss.",
      seoTitle: "Image Compressor – Compress JPG, PNG & WebP Online Free",
      seoDescription:
        "Compress JPG, PNG and WebP images online for free. Reduce file size, resize and convert in your browser. Your images are never uploaded.",
      keywords: ["compress image", "image compressor", "reduce image size", "compress jpg", "compress png", "photo size reducer", "resize image", "image to 100kb"],
      howTo: [
        "Click “Choose images” or drag your JPG, PNG or WebP files into the box. You can add several at once.",
        "Move the quality slider. 70% is a good starting point for photos, and the new file size updates automatically.",
        "Optionally pick a different output format, or set a max width to shrink large photos.",
        "Download each image individually, or click “Download all”.",
      ],
      content: [
        { h2: "Why compress images?" },
        {
          p: "A photo straight from a phone camera is often 3–5 MB. That is far more than you need for a website, an email attachment or an online application form, where 100–300 KB is usually plenty. Smaller images upload faster, load faster for your visitors and help you stay under the file size limits on government, exam and job portals.",
        },
        { h2: "Which output format should you choose?" },
        {
          ul: [
            "**JPG** works everywhere and is the best choice for photographs.",
            "**WebP** is a modern format that is often 25–35% smaller than JPG at the same visual quality. Every modern browser supports it, but some older apps and upload forms do not.",
            "**PNG** is lossless. Use it for screenshots, logos and graphics with transparency. For photos it produces much larger files.",
          ],
        },
        { h2: "Private by design" },
        {
          p: "Many online compressors upload your photos to their servers. This one does not. It uses your browser's built-in image engine, so your files never leave your device and the tool keeps working even on a slow connection once the page has loaded.",
        },
      ],
      faqs: [
        {
          q: "Will compressing my image reduce its quality?",
          a: "JPG and WebP compression is lossy, which means some detail is removed to save space. At 60–80% quality the difference is usually invisible on screen. Your original file is never changed, so you can always try again with a higher quality setting.",
        },
        {
          q: "How do I compress an image to 100 KB or 200 KB?",
          a: "Lower the quality slider and watch the new file size update. If the image is still too large, set a max width such as 1200 pixels. Large phone photos usually drop under 200 KB once they are resized to around 1200–1600 pixels wide.",
        },
        {
          q: "Are my images uploaded to a server?",
          a: "No. All compression happens inside your web browser on your own device. Your images are never sent to us or anyone else, which makes this tool safe for ID cards, documents and personal photos.",
        },
        {
          q: "Why did my PNG file barely get smaller?",
          a: "PNG is a lossless format, so the quality setting has no effect on it. To make a PNG much smaller, convert it to WebP or JPG, or reduce its width. Keep PNG for logos, icons and screenshots that need sharp edges or transparency.",
        },
        {
          q: "Is there a limit on how many images I can compress?",
          a: "We do not set any limit. You can add as many images as you like. Very large images (over 50 megapixels) may be slow on older phones because the work happens on your device.",
        },
      ],
    },

    "merge-pdf": {
      name: "Merge PDF",
      summary: "Combine several PDF files into one document, in any order.",
      seoTitle: "Merge PDF – Combine PDF Files Online Free",
      seoDescription:
        "Merge multiple PDF files into one in seconds. Reorder files before combining. Free, no sign-up, and your PDFs never leave your device.",
      keywords: ["merge pdf", "combine pdf", "join pdf", "pdf merger", "merge pdf files", "combine pdf online"],
      howTo: [
        "Click “Choose PDF files” or drag two or more PDFs into the box.",
        "Arrange the files in the order you want using the up and down arrows.",
        "Click “Merge & download”. Your combined file is saved as merged.pdf.",
      ],
      content: [
        { h2: "When is merging PDFs useful?" },
        {
          ul: [
            "Uploading several documents (ID proof, certificates, mark sheets) to a portal that accepts only one file.",
            "Combining scanned pages into a single document.",
            "Sending one tidy file of invoices or receipts to your accountant.",
            "Joining chapters or reports into a single PDF for easier reading and printing.",
          ],
        },
        { h2: "What is kept in the merged file?" },
        {
          p: "Every page's content, size and orientation is copied exactly. Interactive extras such as form fields, bookmarks and the table of contents of the original files may not carry over to the merged document.",
        },
        { h2: "Private by design" },
        {
          p: "Most PDF websites upload your documents to their servers to process them. This tool uses the open-source pdf-lib library to do the work in your browser instead, so your files never leave your device.",
        },
      ],
      faqs: [
        {
          q: "Is there a limit on the number or size of PDFs?",
          a: "We do not set a limit. Because merging happens on your device, the practical limit depends on your device's memory. Documents with hundreds of pages merge without problems on most computers and modern phones.",
        },
        {
          q: "Can I merge password-protected PDFs?",
          a: "No. Encrypted PDFs cannot be combined until the password protection is removed. Open the file in a PDF reader with the password, save an unprotected copy, then merge that copy.",
        },
        {
          q: "Does merging reduce the quality of my PDF?",
          a: "No. Pages are copied exactly as they are, without re-compressing text or images, so the merged PDF looks identical to the originals.",
        },
        {
          q: "Can I merge PDF files on my phone?",
          a: "Yes. The tool works in Chrome, Safari, Firefox and other modern mobile browsers. Choose the files from your phone's storage, arrange them and tap Merge & download.",
        },
        {
          q: "Are my PDF files uploaded anywhere?",
          a: "No. Your PDFs are read and combined inside your browser and are never uploaded to a server. This keeps sensitive documents such as ID proofs, contracts and bank statements private.",
        },
      ],
    },

    "emi-calculator": {
      name: "EMI Calculator",
      summary: "Work out your monthly loan EMI, total interest and repayment schedule.",
      seoTitle: "EMI Calculator – Home, Car & Personal Loan EMI",
      seoDescription:
        "Calculate your loan EMI, total interest and total payment instantly. See a year-by-year repayment schedule for home, car and personal loans.",
      keywords: ["emi calculator", "loan calculator", "home loan emi", "car loan emi", "personal loan emi", "loan repayment calculator"],
      howTo: [
        "Enter the loan amount and choose your currency.",
        "Enter the yearly interest rate your lender offers.",
        "Enter the loan tenure in years or months.",
        "Your monthly EMI, total interest and total payment update instantly, along with a year-by-year schedule.",
      ],
      content: [
        { h2: "What is an EMI?" },
        {
          p: "EMI stands for **Equated Monthly Instalment**: the fixed amount you pay your lender every month until the loan is fully repaid. Each EMI contains two parts, interest on the outstanding balance and a repayment of principal. In the early years most of the EMI is interest. In the later years most of it is principal.",
        },
        { h2: "The EMI formula" },
        {
          p: "**EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)**, where P is the loan amount, r is the monthly interest rate (yearly rate ÷ 12 ÷ 100) and n is the number of monthly instalments.",
        },
        {
          p: "For example, a loan of ₹10,00,000 at 8.5% a year for 20 years gives r = 0.00708 and n = 240, so the EMI is about **₹8,678**. Over 20 years you would repay about ₹20.83 lakh, of which roughly ₹10.83 lakh is interest.",
        },
        { h2: "How to pay less interest" },
        {
          ul: [
            "**Choose a shorter tenure if you can afford it.** A longer tenure lowers the EMI but greatly increases the total interest.",
            "**Prepay when you can.** Even occasional extra payments early in the loan cut the total interest significantly.",
            "**Compare lenders.** A rate difference of just 0.5% adds up to a large amount over a long home loan.",
            "**Make a larger down payment** to reduce the amount you borrow.",
          ],
        },
        {
          p: "**Note:** results are estimates for planning purposes. Your lender's exact figures may differ slightly because of fees, rounding and rate changes. This is not financial advice.",
        },
      ],
      faqs: [
        {
          q: "Can I use this for home, car and personal loans?",
          a: "Yes. The calculator works for any loan that charges interest on the reducing (outstanding) balance, which includes almost all home loans, car loans, personal loans and education loans.",
        },
        {
          q: "Does it work for floating interest rates?",
          a: "The calculation assumes the rate stays the same for the whole tenure. If you have a floating-rate loan, recalculate with the new rate whenever your lender changes it.",
        },
        {
          q: "Does the EMI include processing fees or insurance?",
          a: "No. The result covers principal and interest only. Processing fees, loan insurance and other charges are extra and depend on your lender.",
        },
        {
          q: "What happens if I prepay part of my loan?",
          a: "A prepayment reduces your outstanding principal, so you pay less interest from then on. Most lenders then either shorten your tenure or reduce your EMI. Check whether your lender charges a prepayment fee.",
        },
        {
          q: "Why is most of my early EMI going towards interest?",
          a: "Interest is charged on the outstanding balance, which is highest at the start of the loan. As you repay principal, the interest part of each EMI shrinks and the principal part grows. You can see this in the yearly schedule above.",
        },
      ],
    },

    "word-counter": {
      name: "Word Counter",
      summary: "Count words, characters, sentences and reading time as you type.",
      seoTitle: "Word Counter – Count Words & Characters Online",
      seoDescription:
        "Free online word counter. Count words, characters, sentences and paragraphs, and estimate reading time. Works in English, Hindi, Kannada and more.",
      keywords: ["word counter", "character counter", "count words", "letter counter", "word count tool", "reading time calculator"],
      howTo: [
        "Type in the box or paste your text.",
        "Word, character, sentence and paragraph counts update instantly as you type.",
        "Check the estimated reading and speaking time, and see which keywords you repeat most.",
        "Use “Copy text” to copy your writing or “Clear” to start again.",
      ],
      content: [
        { h2: "What this word counter measures" },
        {
          ul: [
            "**Words and characters**, with and without spaces.",
            "**Sentences and paragraphs**, where each non-empty line counts as a paragraph.",
            "**Reading and speaking time**, useful for blog posts, speeches and presentations.",
            "**Keyword density**, which shows how often you repeat important words so you can avoid overusing them.",
          ],
        },
        { h2: "Common word and character limits" },
        {
          ul: [
            "X (Twitter) post: 280 characters",
            "Meta description for SEO: about 155–160 characters",
            "Instagram caption: 2,200 characters",
            "LinkedIn post: 3,000 characters",
            "Common App college essay: 650 words",
          ],
        },
        { h2: "Built for every language" },
        {
          p: "Many simple word counters split text only on spaces, which gives wrong results for many languages. This tool uses the language-aware text segmentation built into modern browsers, so counts are accurate whether you write in English, Hindi, Kannada or Japanese.",
        },
      ],
      faqs: [
        {
          q: "How does the word counter count words?",
          a: "It uses your browser's built-in, language-aware text segmentation, the same technology used for selecting words by double-clicking. Numbers count as words. Hyphenated words such as “well-known” count as two words, so totals can be slightly higher than in Microsoft Word, which counts them as one.",
        },
        {
          q: "Are spaces counted as characters?",
          a: "The main Characters figure includes spaces and line breaks. The figure below the text box shows the count without spaces, which some forms and assignments ask for.",
        },
        {
          q: "How is reading time calculated?",
          a: "Reading time assumes an average silent reading speed of 238 words per minute for adults. Speaking time assumes a comfortable presentation pace of 140 words per minute.",
        },
        {
          q: "Is my text saved or sent anywhere?",
          a: "No. Your text stays in your browser and is never uploaded. It is not saved either, so refreshing the page clears it. Copy anything you want to keep.",
        },
        {
          q: "Does it work with Hindi, Kannada and other languages?",
          a: "Yes. Because it uses language-aware segmentation, it counts words and characters correctly in Hindi, Kannada, Tamil, Telugu and other Indian languages, and even in languages written without spaces, such as Chinese and Japanese.",
        },
      ],
    },

    "json-formatter": {
      name: "JSON Formatter",
      summary: "Format, validate and minify JSON with clear error locations.",
      seoTitle: "JSON Formatter & Validator – Beautify and Minify JSON",
      seoDescription:
        "Format, beautify, validate and minify JSON online. Find syntax errors by line and column and sort keys. Your data stays in your browser.",
      keywords: ["json formatter", "json validator", "json beautifier", "format json", "json minify", "pretty print json"],
      howTo: [
        "Paste your JSON into the input box, or click “Sample” to try an example.",
        "The tool checks your JSON as you type and shows the exact line and column of any error.",
        "Click “Format” to beautify it (choose 2 spaces, 4 spaces or tabs, and optionally sort keys) or “Minify” to compress it.",
        "Copy the result or download it as a .json file.",
      ],
      content: [
        { h2: "What is a JSON formatter?" },
        {
          p: "JSON (JavaScript Object Notation) is the most common format for exchanging data between apps and APIs. To save space it is often sent as one long line, which is hard to read. A JSON formatter adds indentation and line breaks so the structure is clear, and a validator checks that the syntax is correct.",
        },
        { h2: "Common JSON errors and how to fix them" },
        {
          ul: [
            "**Trailing commas:** remove the comma after the last item in an object or array.",
            "**Single quotes:** replace `'text'` with `\"text\"`.",
            "**Unquoted keys:** write `{\"name\": 1}`, not `{name: 1}`.",
            "**Comments:** JSON does not support `//` or `/* */` comments.",
            "**Missing commas** between items, often after copying and pasting.",
          ],
        },
        { h2: "Your data stays private" },
        {
          p: "API responses and config files often contain access tokens, email addresses or other sensitive data. Many online formatters send what you paste to a server. This one never does: all processing happens in your browser.",
        },
      ],
      faqs: [
        {
          q: "What is the difference between formatting and minifying JSON?",
          a: "Formatting (also called beautifying or pretty-printing) adds line breaks and indentation so JSON is easy for people to read. Minifying removes all unnecessary whitespace to make the data as small as possible for sending over a network.",
        },
        {
          q: "Why is my JSON invalid when it works in JavaScript?",
          a: "JavaScript object literals are more relaxed than JSON. JSON requires double quotes around every key and string, and it does not allow trailing commas, comments, single quotes or values like undefined and NaN.",
        },
        {
          q: "Can it handle large JSON files?",
          a: "Yes. Files of several megabytes format in well under a second on a typical computer, because everything runs locally in your browser with no upload time.",
        },
        {
          q: "Are very large numbers kept exactly?",
          a: "Integers larger than 9,007,199,254,740,991 cannot be represented exactly in JavaScript, so they may be rounded when formatted. If you work with very large IDs, store them as strings in your JSON.",
        },
        {
          q: "Is my JSON sent to a server?",
          a: "No. Parsing, validating and formatting all happen in your browser. That makes it safe to paste API responses that contain tokens, keys or personal data.",
        },
      ],
    },

    "meta-tag-checker": {
      name: "Meta Title & Description Checker",
      summary: "Preview your search snippet and check title and description length.",
      seoTitle: "Meta Title & Description Length Checker with Search Preview",
      seoDescription:
        "Check your meta title and description length in characters and pixels, preview how your page may look in search results, and copy the HTML tags.",
      keywords: ["meta title checker", "meta description length", "serp preview", "title tag length", "snippet preview", "seo title checker"],
      howTo: [
        "Type or paste your page title into the Meta title box.",
        "Add your meta description and, optionally, the page URL.",
        "Watch the character and pixel counts and the live preview. Aim for “Good length” on both.",
        "Click “Copy code” and paste the tags into the <head> section of your page.",
      ],
      content: [
        { h2: "Why pixel width matters" },
        {
          p: "Search engines truncate titles and descriptions by their width on screen, not by character count. That is why this checker measures both: around 580 pixels for titles (usually 50–60 characters) and around 920 pixels for descriptions on desktop (usually 150–160 characters).",
        },
        { h2: "Tips for writing a better meta title" },
        {
          ul: [
            "Put your main keyword near the beginning.",
            "Give every page a unique title that matches what searchers are looking for.",
            "Add your brand name at the end, separated by a dash or a pipe.",
            "Avoid ALL CAPS and stuffing in repeated keywords.",
          ],
        },
        { h2: "Tips for writing a better meta description" },
        {
          ul: [
            "Summarise the value of the page in one or two sentences.",
            "Include your keyword naturally. Search engines often highlight words that match the search.",
            "End with a clear call to action, such as “Try it free” or “See the full guide”.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is the ideal meta title length?",
          a: "Aim for roughly 50–60 characters, or under about 580 pixels wide. Titles longer than that are usually cut off with an ellipsis in desktop search results.",
        },
        {
          q: "What is the ideal meta description length?",
          a: "About 120–160 characters works well. Shorter descriptions may not explain the page well enough, and longer ones are usually truncated.",
        },
        {
          q: "Does the meta description affect rankings?",
          a: "Google has said the meta description is not a direct ranking factor. It still matters, because a clear and relevant description can persuade more people to click your result.",
        },
        {
          q: "Why does Google show a different title or description from mine?",
          a: "Search engines sometimes rewrite titles and descriptions to better match a searcher's query, using other text from your page. Writing accurate, specific tags makes it more likely that yours are used.",
        },
        {
          q: "Why measure pixels instead of characters?",
          a: "Search results are cut off based on how much space the text takes up, not how many letters it has. A title full of wide letters like W and M is cut off sooner than one with narrow letters like i and l.",
        },
      ],
    },

    "keyword-generator": {
      name: "Keyword Generator",
      summary: "Get hundreds of keyword ideas for SEO, grouped by search intent.",
      seoTitle: "Free Keyword Generator – Keyword Ideas for SEO",
      seoDescription:
        "Generate hundreds of keyword ideas from one word: questions, long-tail phrases, buying keywords and comparisons, in 7 languages. Free, no sign-up.",
      keywords: ["keyword generator", "keyword ideas", "keyword tool", "long tail keywords", "seo keywords", "keyword research"],
      howTo: [
        "Type a keyword or topic, such as “home loan” or “word counter”. Separate several keywords with commas.",
        "Choose the language you want keyword ideas in.",
        "Browse the ideas, grouped into questions, popular phrases, long-tail ideas, buying keywords and comparisons.",
        "Filter the list, copy a group, or download everything as a CSV file for your spreadsheet.",
      ],
      content: [
        { h2: "What is a keyword generator?" },
        {
          p: "A keyword generator turns one seed word into many related search phrases. It helps you discover what people might type into Google, so you can plan blog posts, product pages and FAQs around real questions instead of guessing.",
        },
        { h2: "Understanding search intent" },
        {
          ul: [
            "**Informational:** the searcher wants to learn something, e.g. “how does a home loan work”. Answer these with guides and FAQs.",
            "**Commercial:** the searcher is comparing options, e.g. “best home loan” or “home loan alternatives”. Answer with reviews and comparisons.",
            "**Transactional:** the searcher is ready to act, e.g. “home loan price” or “buy”. Answer with product, pricing or sign-up pages.",
          ],
        },
        { h2: "How to choose the right keywords" },
        {
          ul: [
            "**Start with long-tail ideas.** Longer, specific phrases have less competition and are easier for a new website to rank for.",
            "**Check search volume** for your favourite ideas in Google Keyword Planner (free with a Google Ads account) or in Google Search Console once your site has traffic.",
            "**Look at the current results** on Google for each keyword. If big brands fill the first page, pick a more specific phrase.",
            "**Write one page per main topic** and use closely related keywords naturally in its headings and text.",
          ],
        },
      ],
      faqs: [
        {
          q: "Does this tool show search volume?",
          a: "No. It generates keyword ideas from proven search patterns, but search volume data comes from paid databases. Check the volume of your best ideas for free in Google Keyword Planner or Google Search Console.",
        },
        {
          q: "How is this different from Ahrefs or Semrush?",
          a: "Paid tools such as Ahrefs and Semrush combine keyword ideas with their own search volume and difficulty data. This tool focuses on fast, free idea generation, which is the first step of keyword research.",
        },
        {
          q: "Can I generate keywords in other languages?",
          a: "Yes. Choose a keyword language and the ideas are built from natural phrases in English, German, French, Spanish, Portuguese, Italian or Dutch.",
        },
        {
          q: "What are long-tail keywords?",
          a: "Long-tail keywords are longer, more specific phrases such as “word counter for students”. Each one is searched less often, but they are easier to rank for and usually bring visitors who know exactly what they want.",
        },
        {
          q: "Is it free to use?",
          a: "Yes. The keyword generator is completely free, needs no account and has no daily limits. It runs in your browser, so your keywords are not sent to any server.",
        },
      ],
    },
  },

  keywordTemplates: {
    questions: [
      "what is {k}",
      "what is the best {k}",
      "how does {k} work",
      "how to use {k}",
      "how to choose {k}",
      "how much does {k} cost",
      "why use {k}",
      "is {k} free",
      "is {k} safe",
      "is {k} worth it",
      "which {k} is best",
      "where to find {k}",
      "when to use {k}",
      "who needs {k}",
      "can i get {k} for free",
    ],
    modifiers: [
      "best {k}",
      "free {k}",
      "top {k}",
      "online {k}",
      "easy {k}",
      "simple {k}",
      "fast {k}",
      "{k} online",
      "{k} free",
      "{k} online free",
      "best free {k}",
      "{k} tool",
      "{k} app",
      "{k} software",
      "{k} website",
      "{k} {year}",
    ],
    longTail: [
      "{k} for beginners",
      "{k} for students",
      "{k} for small business",
      "{k} for professionals",
      "{k} for mac",
      "{k} for windows",
      "{k} for android",
      "{k} for iphone",
      "{k} without sign up",
      "{k} no download",
      "{k} tips",
      "{k} tutorial",
      "{k} examples",
      "{k} guide",
      "{k} step by step",
      "{k} checklist",
    ],
    commercial: [
      "buy {k}",
      "{k} price",
      "{k} cost",
      "{k} pricing",
      "cheap {k}",
      "{k} discount",
      "{k} deals",
      "{k} free trial",
      "{k} subscription",
      "{k} reviews",
      "{k} near me",
    ],
    comparisons: [
      "{k} alternatives",
      "best {k} alternatives",
      "free {k} alternatives",
      "{k} comparison",
      "{k} pros and cons",
      "free vs paid {k}",
      "{k} competitors",
      "top 10 {k}",
      "{k} review {year}",
      "{k} ranking",
    ],
  },
};

export default content;
