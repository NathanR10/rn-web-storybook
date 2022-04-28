import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const ML_Button_Type = (props) => {
  if (!props.disabled) {
    var items = props.items.map((x, index) =>
      <Pressable
        key={index}
        onPress={() => {props.onClick(x.value)}}
        style={[
          styles.button,
          { border: 'solid 1px' + props.itemsColor, padding: props.padding, minWidth: props.fullWidth ? (100/props.items.length + '%') : (props.minWidth) },
          props.value === x.value ? { backgroundColor: props.itemsColor } : { backgroundColor: props.baseColor }
        ]}
      >
        <Text
          style={[
            styles.text,
            { fontSize: props.fontSize, color: props.itemsColor },
            props.value === x.value ? { color: props.baseColor } : { color: props.itemsColor }
          ]}
        >{x.label}</Text>
      </Pressable>
    )
  } else {
    var items = props.items.map((x, index) =>
      <View
        key={index}
        style={[
          styles.buttonDisabled,
          { padding: props.padding, minWidth: props.fullWidth ? (100/props.items.length + '%') : (props.minWidth) }
        ]}
      >
        <Text
          style={[
            styles.textDisabled,
            { fontSize: props.fontSize }
          ]}
        >{x.label}</Text>
      </View>
    )
  }
  return (
    <View style={[
        styles.frame,
        props.disabled ? { border: 'solid 1px #ccc' } : { border: 'solid 1px ' + props.itemsColor },
        props.fullWidth ? { width: '100%' } : { width: 'fit-content' }
      ]}
    >{items}</View>
  )
}

const styles = StyleSheet.create({
  frame: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 3
  },
  button: {
    textAlign: 'center'
  },
  label: {
    opacity: .75,
    paddingBottom: 20
  },
  text: {
    fontWeight: 'bold'
  },
  buttonDisabled: {
    textAlign: 'center',
    border: 'solid 1px #bfbfbf'
  },
  textDisabled: {
    fontWeight: 'bold',
    color: '#bfbfbf'
  },
})

export default ML_Button_Type;

