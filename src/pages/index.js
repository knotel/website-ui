// import React from 'react'
// import { useLocation } from 'react-router-dom'
// import { data } from '../helpers/mock'
// import NoMatch from './NoMatch'
// import Widget from './Widgets'

// const Page = () => {
//   let { pathname } = useLocation()
//   pathname = pathname.replaceAll('/', '') || 'home'

//   const widgets = data[pathname]
//   if (widgets && widgets.length > 0) {
//     return (
//       <>
//         {widgets.map((data, index) => {
//           return <Widget data={data} key={`widget_${index}`} />
//         })}
//       </>
//     )
//   }
//   return <NoMatch />
// }

// export default Page
