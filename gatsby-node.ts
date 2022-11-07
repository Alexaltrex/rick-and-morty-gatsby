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

    // for (let i = 1; i <= 42; i++) {
    //     actions.createPage({
    //         path: `/characters/${i}`,
    //         component: path.resolve("./src/components/characterItem.tsx"),
    //         context: {id: i}
    //     })
    // }

}
