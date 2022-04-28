import React, { useState } from 'react'
import ML_Button_Rounded from '../components/ML_Button_Rounded'
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
  multiple: true
}

export default {
  title: 'ML_Button_Rounded',
  component: ML_Button_Rounded,
  parameters: {
    docs: {
      description: {
        // description
        component: '<b>Default: </b>Return <i>selected</i> value<br>' +
        '<b>Multiple: </b>Return [array] of <i>selected</i> values'
        
      }
    },
  },
  // structure -> control Storybook
  argTypes: {
    itemsColor: {
      control: {
        type: 'color',
      },
      table: {
        type: { summary: 'Color' },
        defaultValue: { summary: '#1c3149' }
      }
    },
    baseColor: {
      control: {
        type: 'color',
      },
      table: {
        type: { summary: 'Color' },
        defaultValue: { summary: '#bfbfbf' }
      }
    },
    textColor: {
      control: {
        type: 'color',
      },
      table: {
        type: { summary: 'Color' },
        defaultValue: { summary: '#ffffff' }
      }
    },
    items: {
      control: 'object',
      table: {
        type: { summary: 'Array of Object' },
        defaultValue: { summary: '[{label: ..., value: ...}]' }
      }
    },
    fontSize: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
      table: {
        type: { summary: 'Int' },
        defaultValue: { summary: '14' }
      }
    },
    padding: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'Int' },
        defaultValue: { summary: '20' }
      }
    },
    margin: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'Int' },
        defaultValue: { summary: '5' }
      }
    },
    fullWidth: {
      control: 'boolean',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    minWidth: {
      control: { type: 'range', min: 0, max: 400, step: 1 },
      table: {
        type: { summary: 'Int' },
        defaultValue: { summary: '130' }
      }
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    multiple: {
      control: 'boolean',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'true' }
      }
    }
  }
}

const Template = (args) => {
  const [value, setValue] = useState(data.multiple ? [] : null)
  const selectItem = (payload, multiple) => {
    if (multiple) {
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
  return <ML_Button_Rounded value={value} onClick={selectItem} {...args} />
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
  multiple: data.multiple
}