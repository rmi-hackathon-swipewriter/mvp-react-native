import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import Pie from 'react-native-pie'

export default function Detail ({ program, onBack }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onBack}>
        <Text>Back</Text>
      </TouchableHighlight>
      <Text style={styles.h1}>
        {program.name}
      </Text>
      <Text>Alias: {program.alias}</Text>
      <Text>Renewal: {program.renewal}</Text>
      <Text>Client years: {program.clientYears}</Text>
      <Text>Broker: {program.broker}</Text>
      <Text>Boker years: {program.bokerYears}</Text>
      <Text>Gross sum insured: {program.grossSumInsured}</Text>
      <Text>Gross premium: {program.grossPremium}</Text>
      <Pie
        radius={100}
        series={[program.singedLine * 100, (1 - program.singedLine) * 100]}
        colors={['#36A2EB', '#FFCE56']} />
    </View>
  )
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
    margin: 20
  }
})
