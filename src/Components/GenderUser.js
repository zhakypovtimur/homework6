import React, { Component } from 'react'
class GenderUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            lastName:'',
            gender: '',
            status: ''

        };
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
    return (
        <div>
            <form>
                
                <input type="text" name="userName" placeholder='Введите имя' onChange={this.onChangeHandler} />
                <input type="text" name="lastName" placeholder='Введите фамилию' onChange={this.onChangeHandler} />
                <p>
                    <label>Мужчина:</label>
                <input type="checkbox" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.onChangeHandler} />
                <label>Женщина:</label>
                <input type="checkbox" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.onChangeHandler} />
                </p>
                
                <p>
                    <label>Холост:
                    <input type="checkbox" name="status" value="alone" checked={this.state.status === "alone"} onChange={this.onChangeHandler}/>
                </label>
                <label>Семейный:
                    <input type="checkbox" name="status" value="married" checked={this.state.status === "married"} onChange={this.onChangeHandler}/>
                </label>
                </p>
                
            
            </form>
            <hr />
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
        
    )
}
}


export default GenderUser