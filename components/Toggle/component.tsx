import * as React from 'react'

interface IProps {
  initSwitchPosition?: boolean,
  initText?: string,
  hook?: () => void
}

const ToggleComponent = ({ ...props }: IProps) => render(stateLayer(props))

const stateLayer = ({ initSwitchPosition = false, initText = '', hook = () => null }: IProps) => {
  const [ switchPosition , setSwitch ] = React.useState(initSwitchPosition)
  const [ text, setText ] = React.useState(initText)

  const setRevertSwitch = ({ switchPosition, setSwitch }) => (
    setSwitch(!switchPosition)
  )

  const changePosition = ({ switchPosition, setSwitch, setRevertSwitch, setText, hook }): void => (
    switchPosition
      ? [
        setRevertSwitch,
        
      ].forEach()
  )

  return ({

  })
}

const render = () => (
  <div>11231</div>
)
