import path from "path";
import {createArrayOfIds} from "./src/helpers/helpers";

const counts = {
    characters: {
        pages: 42,
        count: 826
    },
    locations: {
        pages: 7,
        count: 126
    },
    episodes: {
        pages: 3,
        count: 51
    },
}

interface ICreatePages {
    graphql: any
    actions: any
    reporter: any
}

export const createPages = async ({graphql, actions, reporter}: ICreatePages) => {

    // CHARACTERS PAGES
    for (let i = 1; i <= counts.characters.pages; i++) {
        actions.createPage({
            path: `/characters/${i}`,
            component: path.resolve("./src/templates/Characters/Characters.tsx"),
            context: {page: i}
        })
    }

    // CHARACTER ITEM PAGES
    for (let i = 1; i <= counts.characters.count; i++) {
        actions.createPage({
            path: `/character/${i}`,
            component: path.resolve("./src/templates/CharacterItem/CharacterItem.tsx"),
            context: {id: i}
        })
    }

    // LOCATIONS PAGE
    actions.createPage({
        path: `/locations`,
        component: path.resolve("./src/templates/Locations/Locations.tsx"),
        context: {
            ids: createArrayOfIds(counts.locations.count)
        }
    })

    // LOCATION ITEM PAGE
    for (let i = 1; i <= counts.locations.count; i++) {
        actions.createPage({
            path: `/location/${i}`,
            component: path.resolve("./src/templates/LocationItem/LocationItem.tsx"),
            context: {
                id: i
            }
        })
    }

    // EPISODES PAGE
    actions.createPage({
        path: `/episodes`,
        component: path.resolve("./src/templates/Episodes/Episodes.tsx"),
        context: {
            ids: createArrayOfIds(counts.episodes.count)
        }
    })

    // EPISODE ITEM PAGE
    for (let i = 1; i <= counts.episodes.count; i++) {
        actions.createPage({
            path: `/episode/${i}`,
            component: path.resolve("./src/templates/EpisodeItem/EpisodeItem.tsx"),
            context: {
                id: i
            }
        })
    }

}
