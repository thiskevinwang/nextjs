/** A */
// import Layout from "components/MyLayout.js";
//
// export default () => (
//   <Layout>
//     <h1>About</h1>
//     <p>Layout component</p>
//   </Layout>
// );

/** B */
import withLayout from "lib/withLayout";

export default withLayout(() => (
  <>
    <h1>About</h1>
    <p>withLayout Higher Order Component</p>
  </>
));
