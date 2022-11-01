import { useState, useContext } from 'react'
import { Tab } from '@headlessui/react'
import { QandAContext, Tabs } from '../../contexts/QandAContext';

const QandAsubTab = () => {
  const [selectedTab, SetSelectedTab] = useState(Tabs[0]);
  const { SwitchTabsTo } = useContext(QandAContext);
  const switchTabHandler = (name) => {
    SetSelectedTab(name);
    SwitchTabsTo(name);
  }
  return (
    <div className="w-full pt-2">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-cyan-500 p-1 bg-opacity-10">
          {Tabs.map((tab, _) => {
            return <Tab
              onClick={() => switchTabHandler(tab)}
              key={_}
              className={selectedTab === tab ?
                'bg-white  w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 '
                :
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2  hover:bg-white/[0.12] hover:text-cyan-600'}
            >
              {tab}
            </Tab>
          })}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
export default QandAsubTab


