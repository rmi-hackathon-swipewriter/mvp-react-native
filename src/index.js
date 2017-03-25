import React, { Component } from 'react';
import { Navigator } from 'react-native';
import moment from 'moment'

moment.locale('en-GB')

import routes from './routes'

export default class SwipeWriter extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes.main}
        renderScene={renderScene} />
    )
  }
}

function renderScene (route, navigator) {
  const { ViewComponent, props } = route
  return <ViewComponent
    {...props}
    {...{ route, navigator }}
    onBack={() => navigator.pop()}
    />
}
