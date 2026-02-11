# Description
[This](https://anthonyandres.github.io/Anthonys-Website/) is my personal website. It's a straightforward project that uses Next.js and React. I've created various [components](https://github.com/anthonyandres/Anthonys-Website/tree/master/app/(main)/_Components) for React's component based architecture that allow me to better organize my actual web pages. For instance, on the [home](https://github.com/anthonyandres/Anthonys-Website/blob/master/app/(main)/home/page.tsx) page, a majority of the HTML are just the imported components. Webpages are organized using next.js' [file-system based routing](https://nextjs.org/docs/app/getting-started/layouts-and-pages); Folders and files are used to define url routes.

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

# Code Breakdown
In this section I will explain the various relevant files that contribute to the overall functionality of the project. The code snippets in this section are highly simplified just to showcase the parts that matter in my explanations. This is because my code is pretty dense at times even though I do go out of my way to format things nicely.

## [Components](https://github.com/anthonyandres/Anthonys-Website/tree/master/app/(main)/_Components)
_Excerpt from [W3 Schools' page](https://www.w3schools.com/react/react_components.asp) on React Components:_
> Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
> Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components


### [Card.tsx](https://github.com/anthonyandres/Anthonys-Website/blob/master/app/(main)/_Components/Card.tsx)
These components are the cards or pictures I used to display images of my face on the home screen. These were the first things I implemented and were what originally prompted me to work on this website. I wanted them to have the following features:
- Draggable
  - must not be dragged off screen
  - fun card physics like in the video game _Balatro_

What allowed me to do these things was the \<motion /> component from the [framer-motion](https://motion.dev/) library. In fact, the returned HTML of this component is just a \<motion.div /> component.

---

In order for the Card.tsx component to not be dragged off screen, it must be passed the ref of the component that defines its bounding box. In this case, the <Card /> element is nested inside some other element, <div />, with which its ref is passed to the Card component

    <div ref={boundingRef}>
        <Card boundingRef={boundingRef} />
    </div>

In the above code, the Card component is bounded by the div with ref _boundingRef_. In my implementation, I make sure the sorrounding div element has the dimensions of the current screen (this is done using the ReactJS className attribute which allows applying CSS classes to elements).

    interface Props {
        boundingRef: RefObject<null> | undefined;
        imgSrc: string
    }
    
    function Card({boundingRef, imgSrc}: PropsWithChildren<Props>) { ... }

    export default Card

The above code showcases the Card.tsx component's main function which takes a ref and an image source path (string) as input parameters.

    return(
      <main style={{perspective: 800}}>
        <motion.div 
          className='z-1 drag-elements flex flex-col overflow-hidden group'
            drag                                                                        // enable drag
            dragSnapToOrigin={false}
            dragConstraints={boundingRef}                                               // set bounding area
            whileDrag={{boxShadow: "12px 16px 2px rgba(0, 0, 0, 0.466)"}}               // while drag enable boxshadow: offset x, y, blur radius
            whileHover={{scale: 1.04, boxShadow: "7px 7px 1px rgba(0, 0, 0, 0.466)"}}   // while hovering, scale and enable boxshadow
            whileTap={{ scale: 1.14, boxShadow: "12px 16px 2px rgba(0, 0, 0, 0.466)" }} // while clicking on, scale increase and box shadow enable
            dragElastic={0.25}                                                          // effects resistance to being outside bounding box, lower is more resistance
            dragMomentum={false}                                                        // effects movement after drag ends
            transition={{duration: 0.1, type: 'spring'}}                                // for all i know, all animations will follow this directive
            onMouseMove={handleMouseMove}                                               // when mouse moves on element, call this function
            onMouseLeave={handleMouseLeave}                                             // when mouse leaves element, call this function
            onTapStart={handleDrag}                                                     // when mouse is clicked on element, call this function (play card pickup sound) 
            onDragEnd={handleDragEnd}                                                   // when mouse is released on element after being clicked, call this function (play card drop sound)
            style={{
                    rotateX, 
                    rotateY, 
                    x, 
                    scale: springScale, 
                    rotate, 
                    transformOrigin: "50% 25%"}} // set rotation point to upper middle area
        >
          <img src={imgSrc}>
          </img>
        </motion.div>
      </main>  
    )

The above code showcases the returned HTML of the Card component. notable attributes of the motion.div element include: whileDrag, whileHover, whileTap, onMouseMove, and onMouseLeave. These attributes dictate how the Card component acts when a user clicks down then moves the mouse (drag), has the mouse over the component (hover), clicks down without moving the mouse (tap), as well as what happens when the mouse moves over the component (mouse move and mouse leave).

Another important attribute of the <motion.div /> element is the _style_ attribute. Specifically, the rotateX, rotateY, x, and rotate properties. These are [_MotionValues_](https://motion.dev/docs/react-motion-value) that would usually be automatically generated when used, but I manually created these in order for me to dictate how they function.

    const x = useMotionValue(0)
    const xVelocity = useVelocity(x) // calculate the change in position of the x axis
    const xVelSpring = useSpring(xVelocity, {stiffness: 1000, damping: 30}) // dampen any acceleration

    const rotate = useTransform( // use the dampened speed values and map them to workable values for rotation (I don't want the card to rotate 16000 degrees if I move it so I map it to 70 degrees in either direction)
        xVelSpring,
        [-6000, 0, 6000],
        [-60, 0, 60],
        {clamp: true} // the upper and lower maximums for rotation values are -70 and 70 degrees rather than rotation -70 and 70 perpetually
    )

    const x2 = useSpring(0, {stiffness: 400})
    const y2 = useSpring(0, {stiffness: 400})
    const rotateX = useTransform(y2, [-0.5, 0.5], [`${angle}deg`, `-${angle}deg`]) //handleMouseMove() determines x2 and y2, which are used here to calculate tilt
    const rotateY = useTransform(x2, [-0.5, 0.5], [`-${angle}deg`, `${angle}deg`])

In the above code, I manually create the motion value _x_ which is passed to the motion.div element via the Style attribute. This means any further use of the x variable is referencing the x position of the motion.div element. I can then calculate the velocity of the motion.div element using useVelocity(x). This velocity is mapped to a 'spring animation' using useSpring(xVelocity, ... ). This essentially makes the integer value oscillate as a spring with damping would. 

Then, the now 'spring' velocity of the card is mapped to its rotation; The faster the card moves, the more it will rotate in response. This is done using the useTransform( ... ) function. Any velocity values between -6000 and 6000 are turned into -60 and 60 (in this case degress of rotation) respectively. These values are assigned to the variable _rotate_, then it is passed to the motion.div element via the Style attribute which will allow the Card component to-- well... rotate.

    
_**todo: explain more of the Card component: x2, y2, rotateX and rotateY**_




