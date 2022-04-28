import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ML_TimeSlots = (props) => {
  for (let i = 0; i < props.dates.length; i++) {
    if (parseInt(props.dates[i].from) > parseInt(props.dates[i].to)) {
      props.dates.push({from: '0h00', to: props.dates[i].to})
      props.dates[i].to = '24h00'
    }
  }
  var timeSlots = props.dates.map((x, index) =>
    <View
    style={[
      styles.timeSlots,
      {
        borderLeftColor: props.baseColor,borderRightColor: props.baseColor,
        backgroundColor: props.mainColor,
        width: ((((parseInt(x.to.split('h')[0])*60) + parseInt(x.to.split('h')[1]))*100)/1440) -
        ((((parseInt(x.from.split('h')[0])*60) + parseInt(x.from.split('h')[1]))*100)/1440) + '%',
        marginLeft: ((((parseInt(x.from.split('h')[0])*60) + parseInt(x.from.split('h')[1]))*100)/1440) + '%'
      }
    ]}/>
  )
  return (
    <View style={styles.main}>
      <View style={styles.textFrame}>
        <Text style={styles.text}>0h</Text>
        <Text style={styles.text}>6h</Text>
        <Text style={styles.text}>12h</Text>
        <Text style={styles.text}>18h</Text>
        <Text style={styles.text}>0h</Text>
      </View>
      <View style={[styles.bar, {backgroundColor: props.baseColor, height: props.height}]}>
        {timeSlots}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {

  },
  textFrame: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 11,
    marginBottom: 5
  },
  bar: {

  },
  timeSlots: {
    height: '100%',
    position: 'absolute'
  }
})

export default ML_TimeSlots

