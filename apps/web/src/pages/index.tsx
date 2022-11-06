import { useRouter } from "next/router";
import { Layout } from "../components/layout";
import { SearchBlock } from "../components/searchblock";

export default function Web() {
  const router = useRouter();

  return (
    <Layout type="splash" withNavbar={false}>
      <div className="mt-[45vh] h-[5em] self-center">
        <h1>
          <span className="text-2xl">People finder</span>
          <small className="ml-1 inline-block text-xs text-gray-500">
            v. 0.0.0
          </small>
        </h1>
        <SearchBlock showError autofocus />
      </div>
    </Layout>
  );
}
