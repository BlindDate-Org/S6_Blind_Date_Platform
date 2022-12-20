import { Home, Blog, Chat, QandA } from ".."
import { render, screen } from '@testing-library/react';



describe(' ----- Home page-----', () => {
  test('Home page reder correctly', () => {
    render(<Home />)
    const pageElement = screen.getByText('Home')
    expect(pageElement).toBeInTheDocument()
  })
})



describe(' ----- Blog page-----', () => {
  test('Blog page reder correctly', () => {
    render(<Blog />)
    const pageElement = screen.getByText('Blog')
    expect(pageElement).toBeInTheDocument()
  })
})


describe(' ----- Chat page-----', () => {
  test('Chat page reder correctly', () => {
    render(<Chat />)
    const pageElement = screen.getByText('Chat')
    expect(pageElement).toBeInTheDocument()
  })
})




// describe(' ----- QandA page-----', () => {
//   test('Chat page reder correctly', () => {
//     render(<QandA />)
//     // const pageElement = screen.getByText('QandA')
//     // expect(pageElement).toBeInTheDocument()
//   })
// })


