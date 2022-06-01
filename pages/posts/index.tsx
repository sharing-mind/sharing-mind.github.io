import Link from "next/link";
import React from "react";
import DisqusEmbaded from "../../src/components/DisqusEmbaded";

export default function Posts() {
  return (
    <div>
      Posts Page
      <Link href="/">Home Page</Link>
      <div style={{ margin: "50px 300px" }}>
        <DisqusEmbaded />
      </div>
    </div>
  );
}
