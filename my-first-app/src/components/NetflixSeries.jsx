import React from 'react'
import seriesData from "../api/seriesData.json"
import SeriesLists from './SeriesLists'

export default function NetflixSeries() {
  return (
    <ul className='flex flex-wrap justify-center mt-5'>
      {
        seriesData.map((currElem) => {
          return (
              <SeriesLists key={currElem.id} data = {currElem} />
          )
          
        }) 
      }
      
    </ul>
  )
}
