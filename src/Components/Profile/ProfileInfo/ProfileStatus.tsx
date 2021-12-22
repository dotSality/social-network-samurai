import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string)=> void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
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