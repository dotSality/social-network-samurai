import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string)=> void
}

type StatePropsType = {
    editMode: boolean,
    status: string,
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, StatePropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => this.setState({ editMode: true })

    offEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ status: e.currentTarget.value })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: StatePropsType) {
        if (prevProps.status !== this.state.status) this.setState({ status: this.props.status })
    }

    render() {
        return <div>
            {!this.state.editMode ?
                (<div>
                    <span onClick={this.onEditMode}>{this.props.status ? this.props.status : 'no status'}</span>
                </div>) : (
                <div>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.offEditMode} value={this.state.status}/>
                </div>)
            }
        </div>
    }
}