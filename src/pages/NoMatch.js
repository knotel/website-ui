import React from 'react'

import { Button } from '../components/Field'

import buttonStyle from '../components/Field/style.module.css'
import style from './style.module.css'

const NoMatch = () => {
  return (
    <>
      <div className='viewport noPad'>
        <div className='content'>
          <div className='c'>
            <div className={`${style.notFound}`}>
              <h1>404</h1>
              <h2>Oops! We can’t find that page...</h2>
              <p>
                The page you are looking for might have been removed, had its
                name changed or is temporaily unavailable.
              </p>
              <Button
                label='Go to Home'
                link='/'
                rectBtn={`${buttonStyle.icon} ${buttonStyle.arrowRight}`}
                classes={`${buttonStyle.rectButton}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoMatch
