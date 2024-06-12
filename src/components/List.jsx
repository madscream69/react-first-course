import React from 'react';

const List = (props) => {
    return <div>
        {props.text}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        {/*{props.children}*/}
    </div>
}
export default List;