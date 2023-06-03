import React from "react";
import './App.css';
import First from "./First";
import Second from "./Second";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            formValid: false,
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    }

    validateField = (fieldName) => {
        const errors = { ...this.state.errors };

        if ((fieldName === 'lastName') || (fieldName === 'firstName')) {
            const onlyLetters = /^[a-zA-Z]+$/;

            if (this.state[fieldName].length <= 2 || !onlyLetters.test(this.state[fieldName])) {
                errors[fieldName] = 'At least 2 characters long and should not contain numbers.';
            } else {
                errors[fieldName] = '';
            }
        }

        if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(this.state[fieldName])) {
                errors[fieldName] = 'Invalid email address.';
            } else {
                errors[fieldName] = '';
            }
        }

        if (fieldName === 'password') {
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/;

            if (!passwordRegex.test(this.state[fieldName])) {
                errors[fieldName] = 'Password should contain at least 1 uppercase letter, 1 digit, and be 6-10 characters long.';
            } else {
                errors[fieldName] = '';
            }
        }

        this.setState({ errors }, this.validateForm);
    }

    validateForm = () => {
        const errors = { ...this.state.errors };
        const formValid = this.state.firstName && this.state.lastName && this.state.email && this.state.password && Object.values(errors).every(error => !error);
        this.setState({ formValid });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.validateField(event.target.name);
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('form sent');
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            formValid: false,
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <First
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            handleChange={this.handleChange}
                            errorFirstName={this.state.errors.firstName}
                            errorLastName={this.state.errors.lastName}
                        />
                        <Second
                            email={this.state.email}
                            password={this.state.password}
                            errorEmail={this.state.errors.email}
                            errorPassword={this.state.errors.password}
                            handleChange={this.handleChange}
                        />
                        <button type='submit' className="submit-button" disabled={!this.state.formValid}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
