import Header from './Header'

const layoutStyle = {
  margin: 0,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout

// other methods of creating a Layout component:

/* 1.
  import withLayout from '../lib/layout'

  const Page = () => (
    <p>This is the about page</p>
)

export default withLayout(Page)
*/

/* 2.
  const Page = () => (
    <p>This is the about page</p>
  )

  export default () => (<Layout page={Page}/>)
*/

/* 3.
  const content = (<p>This is the about page</p>)

  export default () => (<Layout content={content}/>)
*/
