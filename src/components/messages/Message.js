import React from 'react'

const Message = ({ message, idx, messageSelected, toggleStar }) => {
    const label = message.labels.map( (label, idx) => 
        <span key={ idx } className="label label-warning">{ label }</span> 
    )
    return (
        <div className="container">
            <div className={ 
                `row message ${ message.read ? "read" : "unread" }
                ${ message.selected ? "selected" : "" }`}>
                <div className="col-sx-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" checked={ message.selected } onClick={ () => messageSelected( message.id )} />
                        </div>
                        <div className="col-xs-2">
                            <i
                            onClick={ () => toggleStar( message.id ) }
                            className={ `star fa fa-star${ message.starred ? "" : "-o" }`}>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    { label }
                    { message.subject }
                </div>
            </div>
        </div>
    )
}

export default Message
