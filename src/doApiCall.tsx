import React from "react";


export class DoApiCall extends React.Component {
    state = {
        message: '',
        loading: true,
        error: false
    }

     componentDidMount() {

        fetch('http://34.239.105.155:3001/api/get-test-response')
            .then(res => res.json())
            .then((data) => {
                console.log(data.message);
                this.setState({ message: data.message })
            })
            .catch(console.log)
    }


    render() {
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
};



