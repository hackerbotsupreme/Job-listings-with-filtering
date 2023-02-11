import React, { createContext, useEffect, useState } from 'react'
import data from '../../data.json'

// function to add filter options
const addFilterOption = (filterJobs, optionToAdd) => {
  // check if option is already in the list
  const exits = filterJobs.find((option) => option === optionToAdd)
  // if it is do nothing
  if (exits) {
    return filterJobs.map((option) =>
      option === optionToAdd ? option : option
    )
  }
  // default, add option to the list
  return [...filterJobs, optionToAdd]
}

// function to remove a filter term
const removeItems = (filterJobs, itemToRemove) =>
  filterJobs.filter((itm) => itm !== itemToRemove)

// function to clear all search terms
const clear = (filterJobs) => filterJobs.filter((itm) => itm === 'All')

export const JobsContext = createContext({
  filterJobs: [],
  setFilterJobs: () => {},
  addFilterItem: () => {},
  mappedJobs: [],
  setMappedJobs: () => {},
  removeItem: () => {},
  clearAll: () => {},
  finalMap: [],
  setFinalMap: () => {},
})

// eslint-disable-next-line react/prop-types
export function JobsProvider({ children }) {
  const [filterJobs, setFilterJobs] = useState([])
  const [mappedJobs, setMappedJobs] = useState(data)
  const [finalMap, setFinalMap] = useState(mappedJobs)

  const addFilterItem = (optionToAdd) => {
    setFilterJobs(addFilterOption(filterJobs, optionToAdd))
  }

  useEffect(() => {
    /**
     * filter job postings forEach of the words in the array of potential words.
     * get the keys of each job posting object.
     * return postings which values matches the words in filterJobs array
     */
    filterJobs.forEach((e) => {
      const filtered = mappedJobs.filter((jobPosts) =>
        Object.keys(jobPosts).some((result) => {
          return jobPosts[result].toString().includes(e)
        })
      )
      setFinalMap(filtered)
    })
  }, [filterJobs, mappedJobs])
  const removeItem = (itemToRemove) => {
    setFilterJobs(removeItems(filterJobs, itemToRemove))
  }

  const clearAll = () => {
    setFilterJobs(clear(filterJobs))
    setFinalMap(mappedJobs)
  }

  useEffect(() => {
    if (filterJobs.length < 1) setFinalMap(mappedJobs)
  }, [filterJobs.length, mappedJobs])

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    addFilterItem,
    mappedJobs,
    setMappedJobs,
    filterJobs,
    removeItem,
    clearAll,
    finalMap,
    setFinalMap,
  }
  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>
}
