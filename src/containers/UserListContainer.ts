import {connect} from 'react-redux'
import {IUserListProps} from "../Interface";
import UserList from "../components/UserList";
import {ComponentType} from "react";

const mapStateToProps = (state: IUserListProps) => {
    return {
        users: state.users
    }
}


export default connect(
    mapStateToProps
)(UserList as ComponentType)