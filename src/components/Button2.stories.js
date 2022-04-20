import React, { useState } from 'react'
import Button2 from './Button2'
import { storiesOf } from '@storybook/react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

// data
const data = {
  itemsColor: '#1c3149',
  baseColor: '#bfbfbf',
  textColor: '#ffffff',
  items: [
    {label: "On", value: 0},
    {label: "Auto", value: 1},
    {label: "Arrêt", value: 2}
  ],
  fontSize: 14,
  padding: 20,
  margin: 5,
  minWidth: 130,
  fullWidth: false,
  disabled: false,
  radio: false
}

export default {
  title: 'Button2',
  component: Button2,
  parameters: {
    docs: {
      description: {
        // description
        component: '<b>Default: </b>Return [array] of <i>selected</i> values<br>' +
        '<b>Radio: </b>Return <i>selected</i> value'
      }
    },
  },
  // structure -> control Storybook
  argTypes: {
    itemsColor: {
      control: {
        type: 'color',
      },
    },
    baseColor: {
      control: {
        type: 'color',
      },
    },
    textColor: {
      control: {
        type: 'color',
      },
    },
    fontSize: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    },
    padding: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    margin: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    fullWidth: {
      control: 'boolean',
    },
    minWidth: {
      control: { type: 'range', min: 0, max: 400, step: 1 },
    },
    disabled: {
      control: 'boolean',
    },
    radio: {
      table: {
        disable: true,
      }
    }
  }
}

const Template = (args) => {
  const [value, setValue] = useState(data.radio ? null : [])
  const selectItem = (payload, radio) => {
    if (!radio) {
      if (value.includes(payload)) {
        var tempArr = value
        for (let i = 0; i < tempArr.length; i++) {
          if (tempArr[i] === payload) {
            tempArr.splice(i, 1)
            setValue([...tempArr])
          }
        }
      } else {
        setValue([...value, payload])
      }
    } else {
      setValue(payload)
    }
  }
  return <Button2 value={value} onClick={selectItem} {...args} />
}

export const Default = Template.bind({});
Default.args = {
  itemsColor: data.itemsColor,
  baseColor: data.baseColor,
  textColor: data.textColor,
  items: data.items,
  fontSize: data.fontSize,
  padding: data.padding,
  margin: data.margin,
  fullWidth: data.fullWidth,
  minWidth: data.minWidth,
  disabled: data.disabled,
  radio: false
}
//
export const Radio = Template.bind({});
Radio.args = {
  itemsColor: data.itemsColor,
  baseColor: data.baseColor,
  textColor: data.textColor,
  items: data.items,
  fontSize: data.fontSize,
  padding: data.padding,
  margin: data.margin,
  fullWidth: data.fullWidth,
  minWidth: data.minWidth,
  disabled: data.disabled,
  radio: true
}