import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

// Redux: Actions
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};

// Redux: Reducer
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

const store = createStore(todoReducer);

// React Native Component: TodoList
const TodoList = ({ todos, toggleTodo }) => {
  return (
    <View>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <Text
            onPress={() => toggleTodo(todo.id)}
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

// React Native Component: AddTodo
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        placeholder="Add a new task"
        value={text}
        onChangeText={(value) => setText(value)}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  todos: state.todos,
});

// Connect Redux actions to component props
const ConnectedTodoList = connect(mapStateToProps, { toggleTodo })(TodoList);
const ConnectedAddTodo = connect(null, { addTodo })(AddTodo);

// App component
function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <ConnectedAddTodo />
        <ConnectedTodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    padding: 5,
  },
  todoItem: {
    marginVertical: 5,
  },
});

export default App;
