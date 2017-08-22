const React = window.React;
const ReactDOM = window.ReactDOM;

class Home extends React.Component {
    render() {
        return (<h1>Hello There ... Packed with Gulp !!</h1>)
    }
}

const render = () => {
    ReactDOM.render(<Home/>, document.getElementById('rootone'))
};

render();