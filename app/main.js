'use strict';

// let fruits = ['苹果', '香蕉'],
//  foods = [...fruits, '橙子'];

// document.body.innerHTML = foods.toString();

// console.log(foods);

// export default {};
// 

import "semantic-ui/semantic.min.css!";
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';

ReactDOM.render(
    <CommentBox />,
    document.getElementById('app')
);