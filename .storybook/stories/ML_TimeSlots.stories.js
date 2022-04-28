import React, { useState } from 'react'
import ML_TimeSlots from '../components/ML_TimeSlots'
import { storiesOf } from '@storybook/react'

export default {
  title: 'ML_TimeSlots',
  component: ML_TimeSlots,
  argTypes: {
    baseColor: {
      control: {
        type: 'color',
      },
      table: {
        type: { summary: 'Color' },
        defaultValue: { summary: '#bfbfbf' }
      }
    },
    mainColor: {
      control: {
        type: 'color',
      },
      table: {
        type: { summary: 'Color' },
        defaultValue: { summary: '#1c3149' }
      }
    },
    height: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: {
        type: { summary: 'Int' },
        defaultValue: { summary: '20' }
      }
    },
    dates: {
      control: 'object',
      table: {
        type: { summary: 'Array of Object' },
        defaultValue: { summary: '[{from: 0h00, to: 0h00}]' }
      }
    }
  },
}

const Template = (args) => {
  const [value, setValue] = useState(null)
  const selectItem = (payload) => {
    setValue(payload)
  }
  return <ML_TimeSlots value={value} onClick={selectItem} {...args} />
}

export const Default = Template.bind({})
Default.args = {
  baseColor: '#bfbfbf',
  mainColor: '#1c3149',
  height: 20,
  dates: [
    {from: '6h00', to: '12h00'},
    {from: '2h45', to: '5h15'},
    {from: '13h30', to: '14h45'},
    {from: '18h00', to: '24h00'}
  ]
}