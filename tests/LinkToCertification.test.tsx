import LinkToCertifications from '@/app/components/LinkToCertifications'
import { render } from '@testing-library/react'

describe.only('<LinkToCertifications />', () => {
  // create an array of 50 elements
  test('should render the component', () => {
    const username = 'test-test-test'
    const component = render(<LinkToCertifications username={username} />)
    expect(component.getByText('test-test-test')).toBeDefined()
  })
})
