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

### Implementing bounds so the card is not dragged off screen

In order for the Card.tsx component to not be dragged off screen, it must be passed the ref of the component that defines its bounding box. In this case, the \<Card /> element is nested inside some other element, \<div />, with which its ref is passed to the Card component.

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

### Implementing Mouse & Card Interaction: Preface

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

Another important attribute of the \<motion.div /> element is the _style_ attribute. Specifically, the [rotateX](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/rotateX), [rotateY](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/rotateY), x, and [rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/rotate) properties. These are [_<transform-function>_](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function) data types that are used for rotation along various axis.

### Implementing Mouse & Card Interaction: Drag Animation

    const x = useMotionValue(0)
    const xVelocity = useVelocity(x) // calculate the change in position of the x axis
    const xVelSpring = useSpring(xVelocity, {stiffness: 1000, damping: 30}) // dampen any acceleration

    const rotate = useTransform( // use the dampened speed values and map them to workable values for rotation (I don't want the card to rotate 16000 degrees if I move it so I map it to 70 degrees in either direction)
        xVelSpring,
        [-6000, 0, 6000],
        [-60, 0, 60],
        {clamp: true} // the upper and lower maximums for rotation values are -70 and 70 degrees rather than rotation -70 and 70 perpetually
    )

In the above code, I manually create the motion value _x_ which is passed to the motion.div element via the Style attribute. This means any further use of the x variable is referencing the x position of the motion.div element. I can then calculate the velocity of the motion.div element using useVelocity(x). This velocity is mapped to a 'spring animation' using useSpring(xVelocity, ... ). This essentially makes the integer value oscillate as a spring with damping would. 

Then, the now 'spring' velocity of the card is mapped to its rotation; The faster the card moves, the more it will rotate in response. This is done using the useTransform( ... ) function. Any velocity values between -6000 and 6000 are turned into -60 and 60 (in this case degress of rotation) respectively. These values are assigned to the variable _rotate_, then it is passed to the motion.div element via the Style attribute. The rotate property, having already existed and now being "overwritten" by this new calculation, will allow the Card component to rotate in proportion to its x velocity with a dampened spring effect.

### Implementing Card Dragging Animation: Mouse Hover Tilt Animation

    const angle = 10 // set the "angle" of tilt, higher is more crazy

    const x2 = useSpring(0, {stiffness: 400})
    const y2 = useSpring(0, {stiffness: 400})
    const rotateX = useTransform(y2, [-0.5, 0.5], [`${angle}deg`, `-${angle}deg`]) //handleMouseMove() determines x2 and y2, which are used here to calculate tilt
    const rotateY = useTransform(x2, [-0.5, 0.5], [`-${angle}deg`, `${angle}deg`])

    const handleMouseMove = (e: any) => {// calculate various measurements in order to obtain the x/y rotational values for tilting
        //console.log('mouse move!')
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPercent = mouseX / width - 0.5; // calculate mouse position as a percentage of where it is on the card element
        const yPercent = mouseY / height - 0.5;

        x2.set(xPercent);
        y2.set(yPercent);
    }

    
    const handleMouseLeave = () => {// set rotation values back to 0, in other words, reset tilt
        x2.set(0);
        y2.set(0);
        //cardDown.play()
    }

The above code showcases the two functions that are called when the mouse moves over and leaves the Card component. First I define the variables x2, y2, rotateX, and rotateY. The former half are MotionValues that are will have a spring animation like _rotate_, they are later assigned percentage values of where the mouse is on the Card component. The latter half are pre-existing MotionValues that dictate the pan and tilt of a \<Motion.div /> element. These take the values of x2 and y2 and map them from values of -0.5 and 0.5 to _-angle_ degrees and _angle_ degrees (in this case angle == 10). _angle_ is a variable I have predefined so I can change it a little bit easier, the higher the value, the more the Card component will tilt in response to the mouse hovering over it. 

The _handleMouseMove()_ function is where the position of the mouse on the Card component is calculated. First, the width and height of the component is found using the [_getBoundingClientRect()_](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) method which returns the _DOMRect_ object. This object is the smallest rectangle that contains the entire element. Then, the width and height are obtained by accessing the _width_ and _height_ properties of the DOMRect. The variables _mouseX_ and _mouseY_ contain the mouse position relative to the Card component itself rather than relative to the entire screen. To do this, the coordinates of the DOMRect left side and top side are subtraced from the mouse's x and y position relative to the screen (these are obtained through the _DOMRect_ properties [clientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) and [clientY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY)). This can be a bit tricky to wrap your head around so consider this example: if the Card component's top left coordinates relative to the screen are (320, 155) (_rect.left_ will return 320 and _rect.top_ will return 155), then the top left corner should have coordinates (0, 0) since we want the mouse position relative to the card. To do this, we simply subtract (320, 155) from the mouse's position relative to the screen. This will allow for the mouse's position at the top left corner of the Card component to be (320 - 320 = 0, 155 - 155 = 0). We don't have to worry about the mouse's position when the mouse is beyond the Card component's coordinates since this function is only called when the mouse is on the Card component. The reason why we want the mouse position relative to the component is so that we can calculate the percentage of where the mouse is on the card from -%50 to %50 with which we can map to the pan and tilt of the component using _rotateX_ and _rotateY_.

When the mouse leaves the area of the Card component, _x2_ and _y2_ are set to 0, effectively resetting the tilt of the card (_x2_ and _y2_ are motion values with a spring animation, so "resetting" the tilt will have a "boing" effect animation).

That covers everything for the technical aspect of the Card.tsx component, the rest of the code is just CSS styling and formatting so that it looks and interacts with the page/screen as I would want it to.





