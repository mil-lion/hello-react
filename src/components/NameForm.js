import React, {Component} from 'react';

const selectOption = [
    {key: "grapefruit", value: "Грейпфрут"},
    {key: "lime", value: "Лайм"},
    {key: "orange", value: "Апельсин"},
    {key: "mango", value: "Манго"}
];

class NameForm extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            name: "",
            description: "",
            fruit: "orange",
            isGoing: false,
            numberOfGuest: 0
        };
        // Bind method to this object
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = name === 'isGoing' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        alert('Отправленно'
            + '\nИмя: ' + this.state.name
            + '\nОписание: ' + this.state.description
            + '\nВкус: ' + this.state.fruit
            + '\nПойдут: ' + this.state.isGoing
            + '\nГостей: ' + this.state.numberOfGuest
        );
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input
                        type="text"
                        name="name"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label>
                    Описание:
                    <textarea
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <label>
                    Выберите ваш любимый вкус:
                    <select
                        name="fruit"
                        value={this.state.fruit}
                        onChange={this.handleChange}
                    >
                        {selectOption.map((opt, idx) =>
                            <option key={"f" + idx} value={opt.key}>{opt.value}</option>
                        )}
                    </select>
                </label>
                <br/>
                <label>
                    Пойдут:
                    <input
                        type="checkbox"
                        name="isGoing"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                {   /* условный рендер элемента */
                    this.state.isGoing && (
                    <label>
                        Количество гостей:
                        <input
                            type="number"
                            name="numberOfGuest"
                            value={this.state.numberOfGuest}
                            onChange={this.handleChange}
                        />
                    </label>
                )}
                <br/>
                <input type="submit" value="Отправить"/>
            </form>
        );
    }
}

export default NameForm;