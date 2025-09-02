/*
folders with square brackets (eg. [slug]) creates a 'Dynamic Route Segment' (DRS).

DRS are used when you don't know the exact route segment names ahead of time
and want to create routes from dynamic data that are filled in at request time or prerendered
at build time.

Dynamic Segments are passed as the `params` prop to `layout', `page`, `route`, and
`generateMetadata` functions.

in this project I have the following directory:
`app/(main)/blog/[slug]/page.tsx`

the url can change depending on the value that params takes:
URL: /blog/a
params: { slug: 'a' }

what's nice about this, is that the route remains the same but the URL can change depending
on the params:
the route is `app/(main)/blog/[slug]/page.tsx`


*/

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>
            My Post: {slug}
        </div>
}

/*
explanation of above:



since the `params` prop is a promise. You must use `async`/`await` or React's `use` function to
access the values.

*/
