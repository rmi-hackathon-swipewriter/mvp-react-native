import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Pie from 'react-native-pie'
import { colors } from '../styles'

export default function PieChart ({ program, style }) {
  const styles = getStyles(style)
  const { signedLine } = program
  return (
    <View style={styles.piechart}>
      <View style={{ alignSelf: 'center' }}>
        <Pie
          radius={100}
          series={[signedLine * 100, (1 - signedLine) * 100]}
          colors={[colors.blue, colors.yellow]} />
      </View>
      <View style={styles.legend}>
        <View>
          <View style={styles.legendBarOurs} />
          <Text style={styles.legendTitle}>Our share: {signedLine * 100}%</Text>
        </View>
        <View>
          <View style={styles.legendBarOthers} />
          <Text style={styles.legendTitle}>Co-Insurers:  {(1 - signedLine) * 100}%</Text>
        </View>
      </View>
    </View>
  )
}

const legendBar = {
  height: 12,
  width: 70
}

const getStyles = (style) => StyleSheet.create({
  piechart: {
    ...style,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  legendTitle: {
    color: '#999999'
  },
  legendBarOurs: {
    ...legendBar,
    backgroundColor: colors.blue
  },
  legendBarOthers: {
    ...legendBar,
    backgroundColor: colors.yellow
  }
})
