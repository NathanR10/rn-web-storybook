module.exports = {
  // stories: ["../src/**/*.stories.@(tsx|jsx)"],
  stories: ['./components/**/*.stories.mdx', './stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs'
  ],
};