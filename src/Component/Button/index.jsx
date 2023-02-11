import React, { useContext } from 'react'
import { JobsContext } from '../../Context/Job-list'



const Button = ({ children, job }) => {
    const { addFilterItem } = useContext(JobsContext)
    return (
        <button onClick={() => addFilterItem(job)} job={job}>{children}</button>
    )
}

export default Button