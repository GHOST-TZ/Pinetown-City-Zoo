newFunction();
function newFunction() {
  const { defineConfig } = require('@playwright/test');

  module.exports = defineConfig({
    timeout: 30000,
    use: {
      browserName: 'chromium',
      headless: true,
    },
    projects: [
      {
        name: 'Chromium',
        use: { browserName: 'chromium' },
      },
      {
        name: 'Firefox',
        use: { browserName: 'firefox' },
      },
      {
        name: 'WebKit',
        use: { browserName: 'webkit' },
      },
    ],
  });

  console.log("Ensure styles.css is linked in your HTML file.");
  console.log("Ensure styles.css contains the #tabs-top styles.");
  console.log("Ensure styles.css contains the #tabs-top styles for hover and active states.");
  console.log("Ensure styles.css contains the #main styles for layout and images.");
  console.log("Ensure styles.css contains the info-grid and info-box styles.");
  console.log("Ensure styles.css contains the info-box styles for layout and images.");
  console.log("Ensure styles.css contains the info-box-full styles for layout and images.");
  console.log("Ensure styles.css contains the tabs-bottom styles for hover states.");
  console.log("Ensure styles.css contains the search-container styles for layout and input focus.");
  console.log("Ensure styles.css contains the fact-box styles for layout and headings.");
  console.log("Ensure styles.css contains responsive design styles for tabs, info-box, and info-grid.");
}
