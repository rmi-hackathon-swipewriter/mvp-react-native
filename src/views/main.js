import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native'
import {
  ProgramListItem,
  ListSeparator
} from '../components'

import routes from '../routes'
import programs from '../../data/programs.json'
import states from '../../data/states.json'
import { colors } from '../styles'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.status !== r2.status
    })
    this.state = {
      programs: programs.map((program, index) => ({
        ...program,
        id: index,
        status: states.INIT
      }))
    }
    this.onSelect = this.onSelect.bind(this)
    this.onSelectHopOrTop = this.onSelectHopOrTop.bind(this)
  }

  render () {
    const { route, detailRoute, navigator } = this.props
    const { programs } = this.state
    const dataSource = this.ds.cloneWithRows(programs)
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>SwypeWriter</Text>
        <Text style={styles.subtitle}>Programs up for renewal</Text>
        <ListView
          style={styles.list}
          dataSource={dataSource}
          enableEmptySections={true}
          renderRow={(program) => <ProgramListItem
              program={program}
              onSelect={this.onSelect(program, navigator)} />}
          renderSeparator={renderSeperator}>
        </ListView>
      </View>
    )
  }

  onSelect (program, navigator) {
    return () =>
      navigator.push({
        ...routes.detail,
        props: {
          program,
          onSelectHopOrTop: this.onSelectHopOrTop(navigator, program)
        }
      })
  }

  onSelectHopOrTop (navigator) {
    return (selectedProgram, status) => {
      const programs = this.state.programs
      .map(program => program.id === selectedProgram.id
        ? { ...program, status }
        : program
      )
      .filter(program => [states.INIT, states.REVIEW].includes(program.status))
      this.setState({ programs }, () => navigator.pop(routes.detail))
    }
  }

}

function renderSeperator (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
  return <ListSeparator key={`${sectionID}-${rowID}`} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    backgroundColor: colors.white
  },
  h1: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  subtitle: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#999999',
    marginBottom: 10
  },
  list: {
    margin: 10
  }
})
