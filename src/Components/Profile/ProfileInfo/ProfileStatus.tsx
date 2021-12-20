import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    state = {
        editMode: false
    }

    onEditMode() {
        debugger
        this.setState({ editMode: true })
    }

    offEditMode() {
        debugger
        this.setState({ editMode: false })
    }

    render() {
        return <div>
            {!this.state.editMode ?
                (<div>
                    <span onClick={this.onEditMode.bind(this)}>{this.props.status}</span>
                </div>) : (
                <div>
                    <input autoFocus onBlur={this.offEditMode.bind(this)} value={this.props.status}/>
                </div>)
            }
        </div>
    }
}