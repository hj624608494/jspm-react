'use strict';

import React from 'react';

class CommentForm extends React.Component{
    render(){
        return(
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div className="field">
                    <label>Content</label>
                    <textarea></textarea>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export { CommentForm as default };