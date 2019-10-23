import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: ["Obst kaufen", "Programieren lernen", "Lesen"]
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(){
        let todos = this.state.todos;
        todos.push("4. Todo");
        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div className="App">
                
                <h1>Todo-Liste</h1>
                <ul className="App-todo">
                    {this
                        .state
                        .todos
                        .map((todo) => {
                            return (
                                <li>{todo}</li>
                            )
                        })}
                </ul>
                <button onClick={this.addTodo}>Todo hinzufügen</button>
            </div>
        );
    }
}

export default App;
