import Link from "next/link";
import type { ArticleItem } from "@/types";
import { getArticleData } from "@/lib/articles";

interface Props{
    category: string
    articles: ArticleItem[]
}

const ArticleListItem = ({category, articles}: Props) => {

    return(
        <div className={`z-1 border-4 rounded-2xl p-10 blog-colors flex items-center flex-col gap-5 article-list-colors`}>
            <h2 className="text-4xl">{category}</h2>
                <div className="border-0 w-full items-center flex flex-col gap-2.5 text-lg">
                    {articles.map(async (article, id) => 
                        <Link href={`blog/${article.id}`} key={id} className={`flex transition duration-150 hover:text-(--secondary-text-color)`}>
                            <p>{article.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p className="gelicaLight italic">{await (await getArticleData(article.id)).date.toString()}</p>
                        </Link>
                    )}
                </div>

        </div>
    )
}

export default ArticleListItem