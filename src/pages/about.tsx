import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Container from "@/components/Container";
import components from "@/components/MDXcomponents";
import { allOtherPages } from ".contentlayer/data";
import type { OtherPage } from ".contentlayer/types";

function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <Container>
      <Component components={components as any} />
    </Container>
  );
}

export async function getStaticProps() {
  const uses = allOtherPages.find((page: any) => page.slug === "uses")!;

  return { props: uses };
}

export default Uses;
