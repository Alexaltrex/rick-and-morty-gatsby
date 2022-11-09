import path from "path";

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

const locationsIds = (): number[] => {
    const ret = [] as number[];
    for (let i = 1; i <= counts.locations.count; i++) {
        ret.push(i);
    }
    return ret
}

interface ICreatePages {
    graphql: any
    actions: any
    reporter: any
}

export const createPages = async ({graphql, actions, reporter}: ICreatePages) => {

    for (let i = 1; i <= counts.characters.pages; i++) {
        actions.createPage({
            path: `/characters/${i}`,
            component: path.resolve("./src/templates/Characters/Characters.tsx"),
            context: {page: i}
        })
    }

    for (let i = 1; i <= counts.characters.count; i++) {
        actions.createPage({
            path: `/character/${i}`,
            component: path.resolve("./src/templates/CharacterItem/CharacterItem.tsx"),
            context: {id: i}
        })
    }

    actions.createPage({
        path: `/locations`,
        component: path.resolve("./src/templates/Locations/Locations.tsx"),
        context: {
            ids: locationsIds()
        }
    })

    for (let i = 1; i <= counts.locations.count; i++) {
        actions.createPage({
            path: `/location/${i}`,
            component: path.resolve("./src/templates/LocationItem/LocationItem.tsx"),
            context: {
                id: i
            }
        })
    }

}
