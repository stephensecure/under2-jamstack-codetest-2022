import Head from 'next/head'
import { FeaturedBenefits } from '../components/sections/FeaturedBenefits'
import { FeaturedPartners } from '../components/sections/FeaturedPartners/FeaturedPartners'
import { GlobalFooter } from '../components/sections/GlobalFooter'
import { GlobalNavigation } from '../components/sections/GlobalNavigation'
import { HomeHero } from '../components/sections/HomeHero'
import { LatestArticle } from '../components/sections/LatestArticle'
import { FeatureForm } from '../components/sections/FeatureForm'
import featuredPartnersJSON from "../content/featured-partners.json"
import articlesJSON from "../content/latest-articles.json"


export function getStaticProps() {
  return {
    props: {},
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Mula | The reporting tools taking the fintech world by storm</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <GlobalNavigation />
      <div className="grow">
      <LatestArticle latestArticles={articlesJSON} />
      <FeatureForm />
        <HomeHero />
        <FeaturedBenefits padding="mdTopOnly"  />
        <FeaturedPartners partners={featuredPartnersJSON} />
       
      </div>
      <GlobalFooter />
    </>
  )
}
