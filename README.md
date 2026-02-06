# Description
[This](https://anthonyandres.github.io/Anthonys-Website/) is my personal website. It's a straightforward project that uses Next.js and React. I've created various [compoenents](https://github.com/anthonyandres/Anthonys-Website/tree/master/app/(main)/_Components) for React's component based architecture that allow me to better organize my actual web pages. For instance, on the [home](https://github.com/anthonyandres/Anthonys-Website/blob/master/app/(main)/home/page.tsx) page, a majority of the HTML are just the imported components. Webpages are organized using next.js' [file-system based routing](https://nextjs.org/docs/app/getting-started/layouts-and-pages); Folders and files are used to define url routes.

![websiteDemo](./websiteDemo.gif)

### Features
* Interactable "windows" and pictures you can drag or minimize
* Haptic feedback through the use of perspective shifts or sound cues
* Toggleable sounds, light/dark mode, and "graffiti" (drawn by me!)
* About page, relevant links, project/skills, blog, and contact "windows"
* Scalability to fit most screens (mobile layout WIP!)

### Resources
The following are the libraries I used to achieve the aesthetic of a desktop themed website (inspied heavily by [Shar's](https://www.sharyap.com/) website):
* [howler.js](https://github.com/goldfire/howler.js): Used for sounds
* [framer-motion](https://motion.dev/): Used for motion based animations

The following are the libraries I used to achieve the technical functionality of the blog:
* [fs](https://github.com/nodejs/node/blob/v20.13.1/lib/fs.js): Used to get the content of each markdown blog page
* [gray-matter](https://github.com/jonschlinkert/gray-matter): Used to parse metadata of each markdown blog page
* [moment](https://github.com/moment/moment): Used to format dates written in markdown blog pages
* [remark](https://github.com/remarkjs/remark): Used to process markdown text into html
