import Layout from "components/MyLayout";

export default function withLayout(Component) {
  return props => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
