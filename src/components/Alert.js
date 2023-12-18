import React from 'react'
export default function Alert(props){
    return( 
props.obj && <div className={`alert alert-${props.obj.status} my-0`} role="alert">
 {props.obj.msg}
</div>
    );
}