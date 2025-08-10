export const config = {
  site: {
    title: "Nextjs Blog Template",
    name: "Nextjs Blog Template",
    description: "Nextjs Blog Template",
    keywords: ["Nextjs Blog Template", "AI", "Full Stack Developer"],
    url: "https://xxx.com",
    baseUrl: "https://xxx.com",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "Nextjs Blog Template",
      description: "Thoughts on Full-stack development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Your Name",
    email: "your.email@example.com",
    bio: "这是一个 Nextjs 博客模板",
  },
  social: {
    github: "https://github.com/Yin-Yanshu",
  },
  giscus: {
    repo: "Yin-Yanshu/personal-blog",
    repoId: "R_kgDOPbbSQw",
    categoryId: "DIC_kwDOPbbSQ84CuAm4",
  },
  navigation: {
    main: [
      {
        title: "文章",
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://xxx.com"),
    alternates: {
      canonical: "./",
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
