import {connect} from 'react-redux'
import {IMessageListState} from "../Interface";
import MessageList from "../components/MessageList";
import {ComponentType} from "react";

const mapStateToProps = (state: IMessageListState) => {
    return {
        messages: state.messages
    }
}


export default connect(
    mapStateToProps
)(MessageList as ComponentType)