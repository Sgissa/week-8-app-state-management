import pageStyles from './page.module.css'
import ShowcaseImage from "@/components/ShowcaseImage"

export default function Home(){
  return (
      <main   >
        <h1>The Squigly Zebra</h1>
        <section className={pageStyles.zebraShowcaseImages}>
            <ShowcaseImage title='On The Beach!' shortDesc='Summer 2023'/>
            <ShowcaseImage title='Snowboarding' shortDesc='Spring 2023'/>
            <ShowcaseImage title='Rockcliming!' shortDesc='Summer 2023'/>
        </section>
    </main>
  )
}