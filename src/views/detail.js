import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import { PieChart } from '../components'
import { colors } from '../styles'
import states from '../../data/states.json'

// mock data
import programs from '../../data/programs.json'

export default function Detail ({ program, onBack, onSelectHopOrTop }) {
  if (!program) {
    program = programs[0]
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.h1}>{program.name}</Text>
      </View>
      <ScrollView style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Alias</Text>
          <Text>{program.alias}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Renewal</Text>
          <Text>{program.renewal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Client years</Text>
          <Text>{program.clientYears}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Broker</Text>
          <Text>{program.broker}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Broker years</Text>
          <Text>{program.brokerYears}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Gross sum insured</Text>
          <Text>{program.grossSumInsured}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Gross premium</Text>
          <Text>{program.grossPremium}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Signed line</Text>
          <Text>{program.signedLine * 100}%</Text>
        </View>
        <PieChart program={program} style={{ margin: 20 }} />
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Net Premium</Text>
          <Text>{program.netPremium}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Brokerage</Text>
          <Text>{program.brokerage}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Claims YTD</Text>
          <Text>{program.claimsYTD}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Number of claims YTD</Text>
          <Text>{program.claimsYTDNum}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Claims Total</Text>
          <Text>{program.claimsTotal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Total number of claims</Text>
          <Text>{program.claimsTotalNum}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableHighlight
          onPress={() => onSelectHopOrTop(program, states.REVIEW)}
          underlayColor={'transparent'}
          activeOpacity={0.5}>
          <View style={styles.buttonHop}>
            <Text style={styles.buttonTitle}>Reject</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => onSelectHopOrTop(program, states.RENEW)}
          underlayColor={'transparent'}
          activeOpacity={0.5}>
          <View style={styles.buttonTop}>
            <Text style={styles.buttonTitle}>Accept</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const button = {
  justifyContent: 'center',
  alignItems: 'center',
  width: 50,
  height: 50,
  margin: 10,
  borderRadius: 10
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  },
  h1: {
    flex: 1,
    fontSize: 28,
    margin: 10,
    marginTop: 20,
    marginBottom: 20
  },
  details: {
    margin: 10
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey
  },
  rowTitle: {
    width: 180,
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.grey
  },
  buttonHop: {
    ...button,
    backgroundColor: colors.red
  },
  buttonTop: {
    ...button,
    backgroundColor: colors.green
  },
  buttonTitle: {
    color: colors.white
  }
})
