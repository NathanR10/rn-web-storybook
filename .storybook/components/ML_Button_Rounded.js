import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const ML_Button_Rounded = (props) => {
  if (!props.disabled) {
    var items = props.items.map((x, index) =>
      <Pressable
        key={index}
        onPress={() => {props.onClick(x.value, props.multiple)}}
        style={[
          styles.button,
          { padding: props.padding, minWidth: props.fullWidth ? (100/props.items.length + '%') : (props.minWidth) },
          { margin: props.margin },
          Array.isArray(props.value) ?
            props.value.includes(x.value) ? { backgroundColor: props.itemsColor } : { backgroundColor: props.baseColor }
          :
            props.value === x.value ? { backgroundColor: props.itemsColor } : { backgroundColor: props.baseColor }
        ]}
      >
        <Text style={[
            styles.text,
            { color: props.textColor },
            { fontSize: props.fontSize }
          ]}
        >{x.label}</Text>
      </Pressable>
    )
  } else {
    var items = props.items.map((x, index) =>
      <Pressable
        key={index}
        style={[
          styles.button,
          { padding: props.padding, minWidth: props.fullWidth ? (100/props.items.length + '%') : (props.minWidth) },
          { backgroundColor: '#cccccc' },
          { margin: props.margin }
        ]}
      >
        <Text style={[
            styles.text,
            { color: '#ffffff' },
            { fontSize: props.fontSize }
          ]}
        >{x.label}</Text>
      </Pressable>
    )
  }
  return (
    <View style={[
        styles.frame,
        props.fullWidth ? { width: ('calc(100% - ' + (props.margin * 2) * props.items.length + 'px)') } : { width: 'fit-content' }
      ]}
    >{items}</View>
  )
}

const styles = StyleSheet.create({
  frame: {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 5,
    textAlign: 'center'
  },
  text: {
    fontWeight: 'bold'
  },
})

export default ML_Button_Rounded

