import Layout from "../components/Layout";
import { NextPageWithLayout } from "@/types/page";

const Home: NextPageWithLayout = () => {
  return <p>This is the home page.</p>;
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
