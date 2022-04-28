import React, { useState } from 'react'
import ML_LastAlarm from '../components/ML_LastAlarm'
import { storiesOf } from '@storybook/react'

export default {
  title: 'ML_LastAlarm',
  component: ML_LastAlarm,
  argTypes: {
    textColor: {
      control: {
        type: 'color',
      },
      table: {
        type: { summary: 'Color' },
        defaultValue: { summary: '#1c3149' }
      }
    },
    warnColor: {
      control: {
        type: 'color',
      },
      table: {
        type: { summary: 'Color' },
        defaultValue: { summary: '#DC143C' }
      }
    },
    padding: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      table: {
        type: { summary: 'Int' },
        defaultValue: { summary: '10' }
      }
    },
    date: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'Text' },
        defaultValue: { summary: 'dd/mm - 0h00' }
      }
    },
    name: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'Text' },
        defaultValue: { summary: 'Jhon Doe' }
      }
    },
    description: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'Text' },
        defaultValue: { summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." }
      }
    },
    
  },
}

const Template = (args) => {
  const [value, setValue] = useState(null)
  const selectItem = (payload) => {
    setValue(payload)
  }
  return <ML_LastAlarm value={value} onClick={selectItem} {...args} />
}

export const Default = Template.bind({})
Default.args = {
  warnColor: '#DC143C',
  textColor: '#1c3149',
  padding: 10,
  date: '28/04 - 9h46',
  name: 'ducatel test6',
  description: 'Pas de communication avec la carte de traitement'
}