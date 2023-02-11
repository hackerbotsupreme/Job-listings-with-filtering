/* eslint-disable react/button-has-type */
import React, { useContext } from 'react'
import { JobsContext } from '../../Context/Job-list'

// eslint-disable-next-line react/prop-types
function Button({ children, job }) {
  const { addFilterItem } = useContext(JobsContext)
  return (
    // eslint-disable-next-line react/no-unknown-property
    <button onClick={() => addFilterItem(job)} job={job}>
      {children}
    </button>
  )
}

export default Button
