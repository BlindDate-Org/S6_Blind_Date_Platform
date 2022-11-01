
import React, { useContext } from 'react'
import QandAsubTab from '../../components/QandA/QandAsubTab'
import FeedQuestionsList from '../../components/QandA/FeedQuestionsList'
import Search from '../../components/QandA/Search'
import { QandAContext, Tabs } from '../../contexts/QandAContext'


const QandA = () => {
  const { selectedTab } = useContext(QandAContext);
  return (
    <div className='flex w-11/12 flex-col'>
      <Search />
      <QandAsubTab />
      {selectedTab === Tabs[0] && <FeedQuestionsList />}
      {selectedTab === Tabs[1] && 'My Question Section'}
      {selectedTab === Tabs[2] && 'Book Mark Section'}
    </div>
  )
}

export default QandA