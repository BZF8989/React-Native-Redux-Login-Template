import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from "react-native";
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';
import { logoutRequest } from '../action/auth';
import {
    Text,
    Container,
    Content,
} from "native-base";



class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    userLogout(e) {
        this.props.onLogout(()=>{Actions.login();});
        e.preventDefault();
    }

    render() {

        return (
            <Container style={{marginTop: 15}}>
                <Content>
                    <Grid style={{marginLeft: 10}}>
                        <Row>
                            <Text>Some text here</Text>
                        </Row>
                        <Row>
                            <View style={{ marginTop: 10 }}>
                                <Text>{this.props.auth.username}</Text>
                            </View>
                        </Row>
                        <Row>
                            <View>
                                <TouchableHighlight onPress={() => Actions.home()}>
                                    <Text>Home</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={(e) => this.userLogout(e)}>
                                    <Text>Logout</Text>
                                </TouchableHighlight>
                            </View>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );


    }



}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: (cb) => { dispatch(logoutRequest(cb)); }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
