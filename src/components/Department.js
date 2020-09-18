import React from 'react';

function Department(props) {
    const {deptno} = props.match.params;
    return (
        <div>
            <h1>Department #{deptno}</h1>
        </div>
    );
}

export default Department;
