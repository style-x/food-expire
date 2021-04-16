// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
      <Button color='green' text='sort' />
      <Button color='blue' text='ADD' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Food Expire',
}

export default Header
