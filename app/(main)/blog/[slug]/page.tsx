import Link from "next/link";
import { getArticleData } from "@/lib/articles";

const Article = async ({params}: {params: Promise<{slug: string}>}) => {
    const articleData = await getArticleData((await params).slug)
    console.log("slug: " + (await params).slug)

    return(
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between">
                <Link href={"/blog"} className="flex flex-row gap-1 place-items-center">
                    <p>back to list</p>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <article dangerouslySetInnerHTML={{__html: articleData.contentHtml}} />
        </section>
    )
}

export default Article