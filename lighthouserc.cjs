/** @type {import('@lhci/cli').LHConfig} */
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      isSinglePageApplication: true,
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.5 }],
        "categories:accessibility": ["warn", { minScore: 0.8 }],
        "categories:best-practices": ["warn", { minScore: 0.8 }],
        "categories:seo": ["warn", { minScore: 0.7 }],
      },
    },
  },
};
