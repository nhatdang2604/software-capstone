import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { RootPaths } from 'constant'

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">
        <Link to={RootPaths.DASHBOARD}>Back Home</Link>
      </Button>
    }
  />
)

export default NotFound
