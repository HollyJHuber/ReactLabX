# React Lab X
from Day 1 of React Instruction (week 4 Facebook Bootcamp GR)
see 07-react-1.pdf slides 96 - 102

### Things to Do
- App Component: Wraps the whole app, includes the voting buttons. This is where all the state lives--one number for each vote count
- Graph Component: With a property for each bar.
e.g. props: vanillaVoteCount, chocolateVoteCount, stawberryVoteCount
- GraphBar Component: Just one of the bars on the graph, with a property for value, indicating how large it should be, and a prop for label.

### App Component
- Wraps the whole app
- Includes one Graph component
- Includes the voting buttons. 
- Has the state with a separate value for each bar. e.g. vanillaVoteCount, chocolateVoteCount, stawberryVoteCount.
 
### Graph Component
- The whole graph
- Includes 2 or 3 GraphBar components
- Has properties for values of each bar. e.g. vanillaVoteCount, chocolateVoteCount, stawberryVoteCount.

### GraphBar Component
- A single bar in the graph.
- Displays the label for the bar.
- Changes size based on the value.
- Also displays the value as a number.
- Has two properties: label (a String) and value (a Number).