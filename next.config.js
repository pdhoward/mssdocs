const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/
  
})

 // Allow mdx and md files to be pages

module.exports = withMDX({ 
  pageExtensions: ['jsx', 'js', 'mdx', 'md'],
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  }

})
