import * as React from "react"
import type { HeadFC } from "gatsby"
import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Seo} from "../components/Seo/Seo";

const HomePage = () => {
  return (
    <MainLayout //headTitle="Home page"
    >
        Home page
    </MainLayout>
  )
}

export default HomePage

export const Head: HeadFC = () => <Seo title="Home Page"/>
