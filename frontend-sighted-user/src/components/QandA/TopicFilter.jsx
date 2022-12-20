import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { topics } from '../../contexts/QandAContext'
import { useContext } from 'react'
import { QandAContext } from '../../contexts/QandAContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PostQuestion from './PostQuestion'

const MySwal = withReactContent(Swal)

const openPostForm = (onPost) => {
  MySwal.fire({
    title: <p>Post a Question</p>,
    html: <PostQuestion onPost={onPost} />,
    showCloseButton: true,
    showConfirmButton: false
  });
}


const TopicFilter = () => {
  const { selectedTopics, setSelectedTopics, PostQuestion } = useContext(QandAContext);
  const [query, setQuery] = useState('')

  const filteredtopics =
    query === ''
      ? topics
      : topics.filter((topic) =>
        topic.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )
  return <div className="w-full mt-2" >
    <button onClick={() => openPostForm(PostQuestion)} className='btn mb-2 flex items-center h-10 w-fit'><PlusCircleIcon className='w-5' />New Question</button>
    <Combobox value={selectedTopics} onChange={setSelectedTopics} multiple >
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <div className="flex absolute inset-y-0 left-0 items-center pl-1.5 pointer-events-none">
            <MagnifyingGlassIcon className='text-cyan-800 w-8' />
          </div>
          <Combobox.Input
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='Finder your favorite topics '
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {
              filteredtopics.map((topic => {
                let active = selectedTopics.includes(topic)
                return <Combobox.Option
                  key={topic.id}
                  className={`relative cursor-default select-none py-2 pl-2 pr-4 text-gray-900 ${active ? 'bg-cyan-600 text-white' : 'text-gray-900'}`}
                  value={topic}
                >
                  <>
                    <span className={`block truncate font-medium ${active ? 'font-medium' : 'font-normal'}`}>
                      <>{active ? < CheckIcon className="mr-2 h-5 w-5 inline-block" aria-hidden="true" /> : <PlusCircleIcon className="mr-2 h-5 w-5 inline-block" />}</>
                      {topic.name}
                    </span>
                  </>
                </Combobox.Option>
              }))
            }
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
    <div className='pt-1'>
      <p className='p-1'>Your faviorites topics:</p>
      {selectedTopics
        .map((topic) =>
          <div
            className='topicTag hover:bg-slate-300'
            onClick={() => setSelectedTopics(prev => [...prev.filter(t => t.id !== topic.id)])}
            key={topic.id} >
            {topic.name}
          </div>)}
    </div>

  </div>
}



export default TopicFilter





