import React, { Component } from 'react';
import {connect} from "react-redux";
import { ScrollView, Text } from 'react-native';


class Home extends Component {

    constructor(props){
        super(props);

    }


    render(){
        return(
            <ScrollView>
                <Text>
                    Welcome {{this.props.username}}
                </Text>
            </ScrollView>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    return {
        username: state.auth.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);