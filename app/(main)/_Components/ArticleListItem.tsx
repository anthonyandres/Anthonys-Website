import Link from "next/link";
import type { ArticleItem } from "@/types";
import localFont from "next/font/local";

const gelica = localFont({
    src: '../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

const gelicaBold = localFont({
    src: '../../../public/Fonts/Gelica/Gelica-Bold.otf',
})

const gelicaLight = localFont({
    src: '../../../public/Fonts/Gelica/Gelica-Light.otf',
})
interface Props{
    category: string
    articles: ArticleItem[]
}

const ArticleListItem = ({category, articles}: Props) => {

    return(
        <div className={`border-1 blog-colors flex items-center flex-col gap-5 ${gelica.className} `}>
            <h2 className="text-4xl">{category}</h2>
                <div className="flex flex-col gap-2.5 text-lg">
                    {articles.map((article, id) => 
                        <Link href={`blog/${article.id}`} key={id} className={`window-colors hover:text-amber transition duration-150 ${gelicaBold.className}`}>
                            {article.title}
                        </Link>
                    )}
                </div>

        </div>
    )
}

export default ArticleListItem