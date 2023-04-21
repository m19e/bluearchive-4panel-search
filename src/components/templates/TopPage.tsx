import Head from "next/head"
import Script from "next/script"

import type { GroupedStudents } from "@/types"

import { useLocale } from "@/hooks/useLocale"
import { ModalDialog } from "@/components/organisms/Modal/Dialog"
import { PanelContainer } from "@/components/organisms/PanelContainer"
import { Search } from "@/components/organisms/Search"
import { Footer } from "@/components/atoms/Footer"

type Props = {
  students: GroupedStudents
}

export const TopPage = ({ students }: Props) => {
  const { t } = useLocale()

  return (
    <>
      <Script id="load-twitter-wjs" strategy="lazyOnload">
        {`
        window.twttr = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));
        `}
      </Script>
      <Header
        title={t.META_TITLE}
        description={t.META_DESCRIPTION}
        ogImage={process.env.NEXT_PUBLIC_SITE_ROOT_URL + "hoshino.png"}
        ogTitle={t.OG_TITLE}
        twUrl={process.env.NEXT_PUBLIC_SITE_ROOT_URL ?? ""}
        twCard="summary"
      />
      <div className="flex flex-col min-h-screen font-rounded bg-triangle">
        <div className="flex-1">
          <PanelContainer />
          <Search data={students} />
        </div>
        <Footer />
      </div>
      <ModalDialog />
    </>
  )
}

type HeaderProps = {
  title: string
  description: string
  ogImage: string
  ogTitle: string
  twUrl?: string
  twCard: "summary"
}

const Header = ({
  title,
  description,
  ogTitle,
  ogImage,
  twUrl,
  twCard,
}: HeaderProps) => (
  <Head>
    <title>{title}</title>
    <link
      rel="icon alternate"
      type="image/png"
      href="https://cdn.jsdelivr.net/gh/twitter/twemoji@v14.0.2/assets/72x72/1f50d.png"
    />
    <meta name="description" content={description} />
    <meta property="og:title" content={ogTitle} />
    {/* <meta property="og:description" content={description} /> */}
    <meta property="og:image" content={ogImage} />
    <meta property="og:type" content="article" />
    <meta property="twitter:title" content={ogTitle} />
    {/* <meta property="twitter:description" content={description} /> */}
    <meta property="twitter:image" content={ogImage} />
    {/* <meta property="twitter:url" content={twUrl} /> */}
    <meta property="twitter:card" content={twCard} />
  </Head>
)
