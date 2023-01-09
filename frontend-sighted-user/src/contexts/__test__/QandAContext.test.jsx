import QandAContextProvider, { QandAContext, Tabs as DefaultTab } from '../QandAContext'
import { render, screen } from '@testing-library/react'
import { useContext } from 'react';


const MockWrapper = ({ children }) => {
  return <QandAContextProvider>
    {children}
  </QandAContextProvider>
}

const MockComponent = () => {
  const { selectedTab } = useContext(QandAContext);
  return <>
    <h1>{selectedTab}</h1>
  </>
}

describe('----- QandAContext ------', () => {
  test('QandAContextProvider loaded', async () => {
    render(
      <MockWrapper>
        <MockComponent />
      </MockWrapper>
    )
  })
  test('Default selected Tab', async () => {
    render(
      <MockWrapper>
        <MockComponent />
      </MockWrapper>
    )
    const defaultTabs = screen.getByText(DefaultTab[0])
    expect(defaultTabs).toBeInTheDocument()
  })

})

