import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { login } from '../../api/auth';
import { Actions } from 'react-native-router-flux';



const styles = StyleSheet.create({
    margin: {
        height: 40,
    },
});


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    userLogin (e) {
        this.props.onLogin(this.state, ()=>{
            Actions.home();
        });
    }

    render () {
        return (
            <ScrollView style={{padding: 20}}>
                <Text>Username</Text>
                <TextInput
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={false}
                    keyboardType='text'
                    value={this.state.username}
                    onChangeText={(text) => this.setState({ username: text })}
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
                <View style={{margin: 7}}/>
                <Button onPress={(e)=>this.userLogin(e)} title="Login"/>

                <Button style={{fontSize: 16, color: 'blue'}} onPress={Actions.register}>Signup</Button>
            </ScrollView>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userData, cb) => { dispatch(login(userData, cb)); },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);