import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../styles'

const SEVERITIES = {
  GREEN: 0,
  AMBER: 1,
  RED: 2
}

const colorMapping = [ 'green', 'amber', 'red' ]

export default function Indicator ({ program }) {
  const { clientYears, claimsYTDNum, claimsTotalNum } = program
  let severity = SEVERITIES.GREEN
  if (claimsYTDNum >= claimsTotalNum / clientYears) {
    severity = SEVERITIES.AMBER
  }
  if (claimsYTDNum > (claimsTotalNum / clientYears) * 1.5) {
    severity = SEVERITIES.RED
  }
  return <View style={styles[colorMapping[severity]]} />
}

const indicator = {
  borderRadius: 15,
  width: 30,
  height: 30
}

const styles = StyleSheet.create({
  red: {
    ...indicator,
    backgroundColor: colors.red
  },
  amber: {
    ...indicator,
    backgroundColor: colors.amber
  },
  green: {
    ...indicator,
    backgroundColor: colors.green
  }
})
