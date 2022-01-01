module.exports = {
  siteUrl: "https://bulletproof-blog.com",
  changefreq: "weekly",
  priority: 0.4,
  generateRobotsTxt: true,
  //   exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy-policy", "/terms-and-conditions"],
      },
      //       {
      //         userAgent: "test-bot",
      //         allow: ["/path", "/path-2"],
      //       },
      //       {
      //         userAgent: "black-listed-bot",
      //         disallow: ["/sub-path-1", "/path-2"],
      //       },
    ],
    //     additionalSitemaps: [],
  },
};
