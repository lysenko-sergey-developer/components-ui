import * as React from 'react'
import { Button } from 'antd'

type Props = {
  children?: String,
  onClick?: ((event: any) => void)
}

class ButtonComponent extends React.Component<Props, {}> {
  public render() {
    const { children, onClick } = this.props;
    return (
      <Button onClick={onClick}>{children}</Button>
    )
  }
}

export { ButtonComponent }
