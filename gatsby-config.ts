import type {GatsbyConfig} from "gatsby";

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
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Permanent Marker`,
                        file: `https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap`,
                    },
                    {
                        name: `Roboto`,
                        file: `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap`,
                    },
                ],
            },
        },
    ]
};

export default config;
