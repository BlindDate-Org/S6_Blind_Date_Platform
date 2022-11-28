import { render, screen } from "@testing-library/react"
import AnswerItem from "../AnswerItem"
import { MemoryRouter } from 'react-router-dom';

import FeedQuestionItem from "../FeedQuestionItem"


describe('QandA', () => {
  test('answer item rendering correctly', () => {
    const answer = {
      username: 'test user',
      description: 'testing content !!!!!!!!'
    }
    render(<AnswerItem answer={answer} />)
    const testUserName = screen.getByText(answer.username)
    const testContent = screen.getByText(answer.description)
    expect(testUserName).toBeInTheDocument()
    expect(testContent).toBeInTheDocument()
  })

  test('Feed question item rendering correctly', () => {
    const feedQuestion = {
      id: 'test-Id',
      title: 'test-question-title',
    }
    render(<FeedQuestionItem title={feedQuestion.title} />, { wrapper: MemoryRouter })
    const testFeedQuestionTitle = screen.getByText(feedQuestion.title)
    expect(testFeedQuestionTitle).toBeInTheDocument()
  })
})



