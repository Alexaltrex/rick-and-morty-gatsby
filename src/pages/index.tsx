import * as React from "react"
import type { HeadFC } from "gatsby"
import {Seo} from "../components/Seo/Seo";
import * as style from "./Index.module.scss"
import {links} from "../components/Header/links";
import {Link} from "gatsby";

const HomePage = () => {
  return (
      <div className={style.homePage}>
          {
              links.map(({label, to, src}, index) => (
                  <Link to={to}
                        key={index}
                        className={style.link}
                  >
                      <div className={style.imageWrapper}>
                          <img src={src} alt=""/>
                          {/*<Image src={src}*/}
                          {/*       layout="fill"*/}
                          {/*       objectFit="fill"*/}
                          {/*       width={400}*/}
                          {/*       height={400}*/}
                          {/*       alt={label}*/}
                          {/*/>*/}
                      </div>
                      <p>{label}</p>
                  </Link>
              ))
          }
      </div>
  )
}

export default HomePage

export const Head: HeadFC = () => <Seo title="Home Page"/>
