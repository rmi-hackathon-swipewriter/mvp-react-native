import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'

export default function ProgramListItem ({ program, onSelect }) {
  return (
    <TouchableHighlight onPress={onSelect}>
      <View style={styles.program}>
        <Text style={styles.name}>{program.name}</Text>
        <Text style={styles.details}>
          Renewal: {moment(program.renewal).format('DD-MMM-YYYY')}
        </Text>
        <Text style={styles.details}>
          Broker: {program.broker}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  program: {
    height: 100,
    marginTop: 10
  },
  name: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },
  details: {
    fontSize: 14
  }
})
