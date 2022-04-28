import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const ML_LastAlarm = (props) => {
  return (
    <Pressable style={[styles.button, {borderLeftColor: props.warnColor, padding: props.padding}]} onPress={() => {props.onClick('string')}}>
      <Text style={[styles.date, {color: props.textColor}]}>{props.date}</Text>
      <Text style={[styles.name, {color: props.textColor}]}>{props.name}</Text>
      <Text style={[styles.description, {color: props.warnColor}]}>{props.description}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderLeftWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    fontWeight: '400',
    fontSize: 11,
    minWidth: 'fit-content'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: '2%',
    minWidth: 'fit-content'
  },
  description: {
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: '2%',
  }
})

export default ML_LastAlarm

