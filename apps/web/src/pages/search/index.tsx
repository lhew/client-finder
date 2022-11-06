import { useRouter } from "next/router";
import { Layout } from "../../components/layout";

export default function ResultsPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1>RESULTS</h1>
    </Layout>
  );
}
