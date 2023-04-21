import Script from "next/script"

import type { GroupedStudents } from "@/types"

import { ModalDialog } from "@/components/organisms/Modal/Dialog"
import { PanelContainer } from "@/components/organisms/PanelContainer"
import { Search } from "@/components/organisms/Search"
import { Footer } from "@/components/atoms/Footer"

type Props = {
  students: GroupedStudents
}

export const TopPage = ({ students }: Props) => {
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
