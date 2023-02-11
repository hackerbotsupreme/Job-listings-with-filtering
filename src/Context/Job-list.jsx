import { createContext, useEffect, useState } from "react";
import data from '../../data.json'

//function to add filter options
const addFilterOption = (filterJobs, optionToAdd) => {
    //check if option is already in the list 
    const exits = filterJobs.find(option => option === optionToAdd)
    //if it is do nothing
    if (exits) {
        return filterJobs.map(option => option === optionToAdd ? option : option)
    }
    //default, add option to the list
    return [...filterJobs, optionToAdd]
}

//function to remove a filter term
const removeItems = (filterJobs, itemToRemove) => filterJobs.filter(itm => itm !== itemToRemove)

//function to clear all search terms
const clear = (filterJobs) => filterJobs.filter(itm => itm === -1)


export const JobsContext = createContext({
    filterJobs: [],
    setFilterJobs: () => { },
    addFilterItem: () => { },
    mappedJobs: [],
    setMappedJobs: () => { },
    removeItem: () => { },
    clearAll: () => { },
    finalMap: [],
    setFinalMap: () => { }
})


export const JobsProvider = ({ children }) => {
    const [filterJobs, setFilterJobs] = useState([])
    const [mappedJobs, setMappedJobs] = useState(data)
    const [finalMap, setFinalMap] = useState(mappedJobs)


    const addFilterItem = (optionToAdd) => {
        setFilterJobs(addFilterOption(filterJobs, optionToAdd))
    }

    useEffect(() => {
        const abeg = () => {
            filterJobs.forEach(e => {
                console.log(e)
                const filtered = mappedJobs.filter(jobPosts => {
                    return Object.keys(jobPosts)
                        .some(result => { return jobPosts[result].toString().includes(e) })
                })
              return  setMappedJobs(filtered)
            })
        }
        abeg()

    }, [filterJobs])
    const removeItem = (itemToRemove) => {
        setFilterJobs(removeItems(filterJobs, itemToRemove))
    }

    const clearAll = () => {
        setFilterJobs(clear(filterJobs))
    }
   

    const value = { addFilterItem, mappedJobs, setMappedJobs, filterJobs, removeItem, clearAll, finalMap, setFinalMap }
    return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>
}