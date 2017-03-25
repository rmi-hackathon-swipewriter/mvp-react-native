import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import moment from 'moment'
import {
  ProgramListItem,
  ListSeparator
} from './components'

moment.locale('en-GB')

import programs from '../data/programs.json'

export default class SwipeWriter extends Component {
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = ds.cloneWithRows(programs)
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Programs
        </Text>
        <ListView
          style={styles.list}
          dataSource={dataSource}
          renderRow={(program) => <ProgramListItem program={program} />}
          renderSeparator={renderSeperator}>
        </ListView>
      </View>
    );
  }
}

function renderSeperator (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
  return <ListSeparator key={`${sectionID}-${rowID}`} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  h1: {
    fontSize: 28,
    textAlign: 'center',
    margin: 20,
  },
  list: {
    margin: 10
  }
});
