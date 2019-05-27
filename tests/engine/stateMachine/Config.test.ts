import { Config } from '../../../src/engine/stateMachine/Config'

test('new Config', () => {
  const config = new Config({
    init: 'green',
    transitions: [
      { name: 'warn',  from: 'green',  to: 'yellow' },
      { name: 'panic', from: 'yellow', to: 'red'    },
      { name: 'calm',  from: 'red',    to: 'yellow' },
      { name: 'clear', from: 'yellow', to: 'green'  }
    ]
  })

  expect(fsm.state).toBe('green')
  fsm.warn()
  expect(fsm.state).toBe('yellow')
  fsm.panic()
  expect(fsm.state).toBe('red')
  fsm.calm()
  expect(fsm.state).toBe('yellow')
  fsm.clear()
  expect(fsm.state).toBe('green')
})
