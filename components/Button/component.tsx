import * as React from 'react'
import { Button } from 'antd'

interface IProps {
  children?: string,
  onClick?: ((event: any) => void),
}

const ButtonComponent = ({ children, onClick }: IProps) => (
  <Button onClick={onClick}>{children}</Button>
)

export { ButtonComponent }
