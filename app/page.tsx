import Dash from "../app/Header/Dashboard/Dash";
import DefaultLayout from "./Header/Layouts/DefaultLayout";


export default function Home() {
  return (
    <main className="">
      <DefaultLayout>
        <Dash />
      </DefaultLayout>
    </main>
  );
}
