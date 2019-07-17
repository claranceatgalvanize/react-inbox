import React, { Component } from 'react'

class Toolbar extends Component {
    render () {
        const selectedIcon = this.props.selectStatus();
        const selectDisabled = selectedIcon === "square" ? "disabled" : "";
        const unreadMessagesCount = this.props.messages.filter( message => !message.read ).length;
        return (
            <div className="container">
            <div className="row toolbar">
                <div className="col-md-12">
                    <p className="pull-right">
                        <span className="badge badge">{ unreadMessagesCount }</span>
                        { unreadMessagesCount === 1 ? "unread message" : "unread messages" }
                    </p>

                    {/* <a className="btn btn-danger">
                    <i className="fa fa-plus"></i>
                    </a>                         */}

                    <button onClick={ this.props.toggleAll } className="btn btn-default">
                    <i className={`fa fa-${selectedIcon}-o`}></i>
                    </button>

                    <button onClick={ this.props.markRead(true) } className="btn btn-default" disabled={ selectDisabled }>
                    Mark As Read
                    </button>

                    <button onClick={ this.props.markRead(false) } className="btn btn-default" disabled={ selectDisabled }>
                    Mark As Unread
                    </button>

                    <select onClick={ this.props.applyLabel } className="form-control label-select" disabled={ selectDisabled }>
                        <option>Apply label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>

                    <select onClick={ this.props.removeLabel } className="form-control label-select" disabled={ selectDisabled }>
                        <option>Remove label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>

                    <button onClick={ this.props.deleteMessage } className="btn btn-default" disabled={ selectDisabled }>
                    <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
            </div>
        )
    }
}

export default Toolbar;