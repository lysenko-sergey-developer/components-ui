import * as React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css'

const StoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px #c5c5c5 dashed;
  width: 600px;
  padding: 10px;
  flex-direction: column;
`

const withStoryStyles = (story: any) => (
  <StoryContainer>
    {story()}
  </StoryContainer>
)

export {
  withStoryStyles,
  StoryWrapper,
}
