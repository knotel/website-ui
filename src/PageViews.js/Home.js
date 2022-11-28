import React, { Suspense } from 'react'
import Layout from '../pages/Layout'
import Widget from '../pages/Widgets'

import { AppProvider } from '../Contexts/AppContext'

const Home = ({ widgets, headerProps, footerProps }) => {
  return (
    <Suspense fallback={<></>}>
      <AppProvider>
        <Layout headerProps={headerProps} footerProps={footerProps}>
          {widgets.map((data, index) => {
            return <Widget data={data} key={`widget_${index}`} />
          })}
        </Layout>
      </AppProvider>
    </Suspense>
  )
}

export default Home
