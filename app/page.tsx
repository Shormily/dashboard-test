// import Dash from "../app/Header/Dashboard/Dash";
// import DefaultLayout from "./Header/Layouts/DefaultLayout";

import dynamic from "next/dynamic";

const Dash = dynamic(() => import('../app/Header/Dashboard/Dash'),{
  ssr:false,
})

const DefaultLayout = dynamic(() => import('./Header/Layouts/DefaultLayout'),{
  ssr:false,
})

export default function Home() {
  return (
    <main className="">
      <DefaultLayout>
        <Dash />
      </DefaultLayout>
    </main>
  );
}
