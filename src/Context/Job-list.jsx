import { createContext, useEffect, useState } from "react";
import data from '../../data.json'

//function to add filter options
const addFilterOption = (filterJobs, optionToAdd) => {
    //check if option is already in the list 
    const exits = filterJobs.find(option => option === optionToAdd)
    //if it is do nothing
    if (exits) {
        return filterJobs.map(option => option === optionToAdd ? option : '')
    }
    //default, add option to the list
    return [...filterJobs, optionToAdd]
}

export const JobsContext = createContext({
    filterJobs: [],
    setFilterJobs: () => { },
    addFilterItem: () => { },
    mappedJobs: [],
    setMappedJobs: () => { }
})


export const JobsProvider = ({ children }) => {
    const [filterJobs, setFilterJobs] = useState([])
    const [mappedJobs, setMappedJobs] = useState(data)

    const addFilterItem = (optionToAdd) => {
        setFilterJobs(addFilterOption(filterJobs, optionToAdd))
    }

    const value = { addFilterItem, mappedJobs, setMappedJobs, filterJobs }
    return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>
}