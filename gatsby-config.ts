import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `rick-and-morty-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
      "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI", // Arbitrary name for the remote schema Query type
        fieldName: "swapi", // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        url: "https://rickandmortyapi.com/graphql" // Url to query from
      }
    }
  ]
};

export default config;
