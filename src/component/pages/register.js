import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, CheckBox, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { signup } from '../api/auth';
import Toast, { DURATION } from 'react-native-easy-toast';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            secondpw: '',
            agreement: false,

        }

        this.userSignup = this.userSignup.bind(this);

    }

    userSignup(e) {
        if(this.state.name === ''){
            this.refs.toast.show('Full Name is required');
        }else if (this.state.password === '' || this.state.secondpw === '') {
            this.refs.toast.show('Passwords cannot be empty!');
        } else if (this.state.password !== this.state.secondpw) {
            this.refs.toast.show('Passwords do not match!');
        } else if (!this.state.agreement) {
            this.refs.toast.show('You must accept terms and conditions');
        } else {
            this.props.onSignup(this.state);
            console.log('got here');
            e.preventDefault();
        }
    }

    render() {

        return (
            <ScrollView style={{ padding: 20 }}>
                <View style={{ margin: 7 }} />
                <Text style={[styles.red ]}>All Fields are Required</Text>
                <View style={{ margin: 7 }} />
                <Text>Full Name</Text>
                <TextInput
                    placeholder='Full Name'
                    autoCapitalize='none'
                    autoCorrect={true}
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={(text) => this.setState({ name: text })}
                    style={[styles.margin]}
                />
                <Text>Email</Text>
                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={(text) => this.setState({ email: text })}
                    style={[styles.margin]}
                />
                <Text>Password</Text>
                <TextInput
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })}
                    style={[styles.margin]}
                />
                <Text>Confirm Password</Text>
                <TextInput
                    placeholder='Confirm Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={this.state.secondpw}
                    onChangeText={(text) => this.setState({ secondpw: text })}
                    style={[styles.margin]}
                />
                <View style={{ margin: 7 }} />
                <CheckBox
                    title='I agree to Terms and Conditions'
                    value={this.state.agreement}
                    onChange={() => {
                        this.setState({ agreement: !this.state.agreement });
                        //console.log('checked ', this.state.agreement);
                    }
                    }
                />
                <Text>I agree to Terms and Conditions</Text>

                <View style={{ margin: 7 }} />
                <Button onPress={(e) => this.userSignup(e)} title="Signup" />

                <Toast
                    ref='toast'
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        route: 'register'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignup: (userData) => { dispatch(signup(userData)); },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);