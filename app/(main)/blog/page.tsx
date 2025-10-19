import localFont from "next/font/local";
import ArticleListItem from "../_Components/ArticleListItem";
import { getCategoriedArticles } from "@/lib/articles";

const gelica = localFont({
    src: '../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

const gelicaBold = localFont({
    src: '../../../public/Fonts/Gelica/Gelica-Bold.otf',
})

const gelicaLight = localFont({
    src: '../../../public/Fonts/Gelica/Gelica-Light.otf',
})

const BlogPage = () => {
    const articles = getCategoriedArticles()

    console.log(articles)
    return(
        <section className={`blog-colors mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 ${gelicaBold.className}`}>
            <header className="text-6xl text-center">
                <h1>my blog</h1>
            </header>
            <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
                {articles !== null && 
                    Object.keys(articles).map((article) => (
                    <ArticleListItem 
                        category={article}
                        articles={articles[article]}
                        key={article}
                    />
                ))}
            </section>
        </section>
    )
}

export default BlogPage