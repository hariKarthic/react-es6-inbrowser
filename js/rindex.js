const React = window.React;
const ReactDOM = window.ReactDOM;

class Home2 extends React.Component {
    render() {
        return (<h1>Hello There ... Packed with Webpack !!</h1>)
    }
}

const render = () => {
    ReactDOM.render(<Home2/>, document.getElementById('roottwo'))
};

render();