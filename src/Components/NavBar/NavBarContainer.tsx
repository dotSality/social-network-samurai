import NavBar from './NavBar';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {FriendsItemType} from '../../redux/sidebar-reducer';

type MapStateToPropsType = {
    friends: FriendsItemType[]
}

const mapStateToProps = (props: AppStateType): MapStateToPropsType => {
    return {
        friends: props.sidebar.friends
    }
}

type MapDispatchToPropsType = {

}

export type NavBarPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapDispatchToProps = (): MapDispatchToPropsType => {
    return {

    }
}

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)