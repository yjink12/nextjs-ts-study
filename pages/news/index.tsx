import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>THE NEWS</h1>
      <ul>
        <li>
          {/* this is not SPA, reload page => request backend everytime */}
          {/* <a href="/news/nextjs-is-a-great-framework">
            NEXTJS IS A GREAT FRAMEWORK!
          </a> */}
        </li>
        <li>
            {/* this is SPA, use Link from next/link */}
          <Link href="/news/you-can-try">Now You can try it!</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default NewsPage;
