import Layout from "../components/MyLayout.js";
import Link from "next/link";
import PostLink from "../components/PostLink.js";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

export default () => (
  <Layout>
    <h1>Home</h1>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Montserrat";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);
