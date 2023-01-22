import { Fragment } from 'react'
import {Footer} from '../Footer'
import Navbar from '../Navbar'

export const Layout = ({children}) => {
  return (
    <Fragment>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </Fragment>
  )
}
