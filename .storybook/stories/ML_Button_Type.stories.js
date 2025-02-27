import React, { useState } from 'react'
import ML_Button_Type from '../components/ML_Button_Type'
import { storiesOf } from '@storybook/react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

// data
const data = {
  itemsColor: '#283454',
  baseColor: '#ffffff',
  items: [
    {label: "M.", value: 0},
    {label: "Mme", value: 1},
    {label: "M. et Mme", value: 2},
    {label: "Société", value: 3}
  ],
  fontSize: 14,
  padding: 20,
  minWidth: 100,
  fullWidth: false,
  disabled: false
}

export default {
  title: 'ML_Button_Type',
  component: ML_Button_Type,
  parameters: {
    docs: {
      description: {
        component: '<b>Radio: </b>Return <i>selected</i> value' // description
      }
    },
  },
  // structure -> control Storybook
  argTypes: {
    itemsColor: {
      control: { type: 'color' },
    },
    baseColor: {
      control: { type: 'color' },
    },
    fontSize: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
    },
    padding: {
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
    }
  }
}

const Template = (args) => {
  const [value, setValue] = useState(null)
  const selectItem = (payload) => {
    setValue(payload)
  }
  return <ML_Button_Type value={value} onClick={selectItem} {...args} />
}

export const Default = Template.bind({});
Default.args = {
  itemsColor: data.itemsColor,
  baseColor: data.baseColor,
  items: data.items,
  fontSize: data.fontSize,
  padding: data.padding,
  fullWidth: data.fullWidth,
  minWidth: data.minWidth,
  disabled: data.disabled
}