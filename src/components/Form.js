import React from 'react';
import {Form, Text, RadioGroup, Radio} from 'informed';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.setFormApi = this.setFormApi.bind(this);

        this.newUser = {
            firstName: '',
            lastName: '',
            phone: '',
            gender: 'male',
            age: ''
        };
    }

    submitForm(user) {
        console.log(user);
        this.props.addUser(user);
        this.formApi.reset();
        console.log(this.formApi.getState());
    }

    setFormApi(formApi){
        this.formApi = formApi;
    }

    render() {
        return (
            <div className="form">
                <h2 className="subtitle">Add New User</h2>
                <Form
                    getApi={this.setFormApi}
                    initialValues={this.newUser}
                    onSubmit={ this.submitForm }
                >
                    <div className="field">
                        <label className="label">
                            First name:
                        </label>
                        <div className="control">
                            <Text
                                field="firstName"
                                className="input"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            Last name:
                        </label>
                        <div className="control">
                            <Text
                                field="lastName"
                                className="input"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            Phone:
                        </label>
                        <div className="control">
                            <Text
                                field="phone"
                                className="input"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">
                                Gender:
                            </label>
                            <RadioGroup field="gender">
                                <label className="radio">
                                    <Radio
                                        style={{marginRight: '5px'}}
                                        value="male"
                                    />
                                    Male
                                </label>
                                <label className="radio">
                                    <Radio
                                        style={{marginRight: '5px'}}
                                        value="female"
                                    />
                                    Female
                                </label>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            Age:
                        </label>

                        <div className="control">
                            <Text
                                field="age"
                                className="input"
                                type="number"
                                required
                            />
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className="button is-link"
                                type="submit"
                            >
                                Add New User
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default FormComponent;
