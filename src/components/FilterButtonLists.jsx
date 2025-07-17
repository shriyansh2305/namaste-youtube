import React from 'react'
import Button from './Button'

const FilterButtonLists = () => {
  const buttonList = ["All", "Gaming", "Songs", "Live", "Cricket", "Soccer", "News", "Cooking", "Dance", "Love Songs", "Motivation"];
  return (
    <div className='flex'>
      {buttonList.map((button, idx) => <Button key={idx} name={button} />)}
      {/* try to build the scroller using css */}
    </div>
  )
}

export default FilterButtonLists