import React, {Component} from 'react';

// Компонент обертка для страницы
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Обновим состояние с тем, чтобы следующий раз показал запасной UI
        this.setState({hasError: true});
    }

    componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в службу ошибок через API
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI компонент
            return <h1>Что то пошло не так...</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;