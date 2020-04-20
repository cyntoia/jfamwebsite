module.exports = {
  siteMetadata: {
    title: 'The JFAM Foundation',
    author: 'Cyntoia Brown Long',
    description: 'The JFAM Foundation is dedicated to supporting and amplifying often silenced narratives relating to social and criminal justice. We believe that every testimony is one worth telling and inside every journey is a lesson to be shared.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'the-jfam-foundation',
        short_name: 'jfam',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
