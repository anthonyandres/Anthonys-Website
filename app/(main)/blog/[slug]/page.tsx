import Link from "next/link";
import { getArticleData, getArticleSlugs } from "@/lib/articles";
import DarkMuteVolumeComponents from "../../_Components/DarkMuteVolumeComponents";
import ShowDrawingsButton from "../../_Components/ShowDrawingsButton";
import { IoArrowUndo } from "react-icons/io5";

export async function generateStaticParams(){
    const articles = getArticleSlugs()
    return articles
}

export default async function Article({params}: {params: Promise<{slug: string}>}){
    const articleData = await getArticleData((await params).slug) // get article data based off of the url which is the id/name of the article file
    // console.log("array of articles: " + getArticleSlugs())
    // console.log("slug: " + (await params).slug)

    return(
        <div className="border-0 h-full w-full">
            <DarkMuteVolumeComponents>
            <section className="font-noto mx-auto w-10/12 md:w-1/2 pt-20 flex flex-col gap-5 blog-colors gelicaItalic">
                <div className="flex justify-between">
                    <Link href={"/blog"} className="flex flex-row gap-1 place-items-center">
                        <IoArrowUndo />
                        <p>back to list</p>
                    </Link>
                    <p>{articleData.date.toString()}</p>
                </div>
                <article className="article" dangerouslySetInnerHTML={{__html: articleData.contentHtml}} />
            </section>
            </DarkMuteVolumeComponents>
        </div>
    )
}

//TODO: fix styling, also add the dark/light mode, mute, and drawing buttons on the top right

//export default Article
//const Article = async ({params}: {params: Promise<{slug: string}>}) => 
