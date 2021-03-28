import React, { useEffect, useState } from 'react'
import {
  MainWrapper,
  FilterWrapper,
  ContentWrapper
} from './VideoGames.element'
import Filter from '../../components/filter/filter'
import GameItem from '../../components/GameItem/GameItem'
import { getGames } from '../../services/apiService'
import { useCounter } from '../../context/storeApi'

const VideoGames = () => {
  const { showData, loadData,sortData } = useCounter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      firstLoad()
    }, 2000)
  }, [])

  const firstLoad = async () => {
    const gameData = await getGames()
    if (gameData.code == 200) {
      if (gameData.data != []) {
        loadData(gameData.data)
        sortData('first_release_date');
        setLoading(false)
      }
    } else {
      setLoading(true)
    }
  }

  return (
    <MainWrapper>
      <FilterWrapper>
        <Filter />
      </FilterWrapper>
      <ContentWrapper>
        {!loading && showData ? (
          showData.map((item, index) => (
            <GameItem
              key={index}
              name={item.name}
              first_release_date={new Date(item.first_release_date)}
              id={item.id}
              summary={item.summary}
              rating={item.rating}
            />
          ))
        ) : (
          <div className='loading-wrap'>
              <img className='loading' src='spinner.gif' />
             <span className='loading-text'>  Loading ...</span>
          </div>
        )}
      </ContentWrapper>
    </MainWrapper>
  )
}

export default VideoGames
