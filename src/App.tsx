import {FC, Fragment} from 'react'

import Collection2018 from './components/Collection2018/Collection2018'
import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
import Hero from './components/Hero/Hero'
import NewCollection from './components/NewCollection/NewCollection'
import Products from './components/products/Products'

const App:FC = () => {
  return (
    <Fragment>

    <div className='container'>
      <Header/>
      <Hero/>
      <NewCollection/>
      <Collection2018/>
      <Products/>
      <Footer/>
      </div>
    </Fragment>
  )
}

export default App