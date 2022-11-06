import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import { PersonCard } from "../../components/personcard";

export default function ResultsPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1>RESULTS</h1>
      {/* <PersonCard  /> */}
    </Layout>
  );
}
