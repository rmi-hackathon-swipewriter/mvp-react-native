import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
import states from '../../data/states.json'
import { colors } from '../styles'
import { Indicator } from './'

export default function ProgramListItem ({ program, onSelect }) {
  const { status } = program
  return (
    <TouchableHighlight onPress={onSelect}
      underlayColor={'transparent'}
      activeOpacity={0.5}>
      <View style={styles.program}>
        <View style={styles.info}>
          <Text style={styles.name}>{program.name}</Text>
          <Text style={styles.details}>
            Renewal: {moment(program.renewal).format('DD-MMM-YYYY')}
          </Text>
          <Text style={styles.details}>
            Broker: {program.broker}
          </Text>
        </View>
        <View style={styles.indicator}>
          <Indicator program={program} />
          <View style={{ height: 20 }}>
            {status === states.REVIEW &&
              <Text style={styles.indicatorTitle}>needs review</Text>
            }
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  program: {
    flexDirection: 'row',
    height: 90,
    marginTop: 5
  },
  info: {
    flex: 1
  },
  indicator: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  indicatorTitle: {
    color: colors.lightGrey,
    marginTop: 10,
    fontSize: 10
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
