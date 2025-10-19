import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "@/types" // import ArticleItem type

const articlesDirectory = path.join(process.cwd(), "articles") // get absolute path of articles directory using path.join()

const getSortedArticles = (): ArticleItem[] => { // this function will return a list of articles sorted by date
    const fileNames = fs.readdirSync(articlesDirectory) // read contents of folder using fs.readdirSync()

    const allArticlesData = fileNames.map((fileName) => { // loop through 
        const id = fileName.replace(/\.md$/, "") // remove markdown extenstion frome each file name to get the Id
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8") // use fo.readFileSync to get the content of each article

        const matterResult = matter(fileContents) // process metadata using gray-matter.matter()

        return{
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
        }
    })

    return allArticlesData.sort((a, b) => { // loop through each article and sort by date
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        if(dateOne.isBefore(dateTwo)) {
            return -1
        }
        else if(dateTwo.isAfter(dateOne)){
            return 1
        }
        else{
            return 0
        }
    })
}
export const getCategoriedArticles = (): Record<string, ArticleItem[]> => { // loop through articles and place them in arrays based off of categories
    const sortedArticles = getSortedArticles()
    const categorisedArticles: Record<string, ArticleItem[]> = {}

    sortedArticles.forEach((article) => {
        if(!categorisedArticles[article.category]){
            categorisedArticles[article.category] = []
        }
        categorisedArticles[article.category].push(article)
    })

    return categorisedArticles // return object containing articles in an array based off of categories organized with their respective key

}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`) // get path of article
    const fileContents = fs.readFileSync(fullPath, "utf-8") // get content of article from path
    const matterResult = matter(fileContents) // get data and content of article using matter
    const processedContent = await remark() // process data as html
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString() // process html to string

    return{ // return object containing relevant information of the article where id is the article file name
        id,
        contentHtml,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    }
}