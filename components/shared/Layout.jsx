import { Fragment } from 'react'
import {Footer} from '../Footer'

const Layout = ({children}) => {
  return (
    <Fragment>
        <main>{children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout
