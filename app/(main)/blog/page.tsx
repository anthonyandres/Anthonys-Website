import ArticleListItem from "../_Components/ArticleListItem";
import { getCategoriedArticles } from "@/lib/articles";
import DarkMuteVolumeComponents from "../_Components/DarkMuteVolumeComponents";
import ShowDrawingsButton from "../_Components/ShowDrawingsButton";
import { IoArrowUndo } from "react-icons/io5";
import Link from "next/link";

const BlogPage = () => {
    const articles = getCategoriedArticles()
    // const articlesID = getArticleSlugs()
    // //console.log(articles)
    // console.log(articlesID)
    return(
        <div className="border-0 h-full w-full">
            <DarkMuteVolumeComponents>
            <ShowDrawingsButton />
            <section className={`border-0 h-full mx-auto w-7/12 blog-colors pt-20 mb-20 gelicaBold blog-colors transition duration-150`}>
                <div className="border-0 h-full w-full">
                    <div className="border-0 translate-x-40 gelicaItalic">
                        <Link href={"/home"} className=" place-items-center flex">
                            <IoArrowUndo />
                            <p>back to home</p>
                        </Link>
                    </div>
                    <p className="text-[1000px]"></p>
                    <header className="border-0 text-9xl text-center mb-10">
                        <h1>my blog</h1>
                    </header>
                <section className="border-0 md:grid md:grid-cols-2 gap-10">
                    {articles !== null && 
                        Object.keys(articles).map((article) => (
                        <ArticleListItem 
                            category={article}
                            articles={articles[article]}
                            key={article}
                        />
                    ))}
                </section>
                </div>
            </section>
            </DarkMuteVolumeComponents>
        </div>
    )
}

export default BlogPage