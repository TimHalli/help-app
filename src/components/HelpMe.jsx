import React, { useState } from 'react'
import Request from './Request';
import {Router} from 'react-router-dom'

const HelpMe = () => {
   
  // const [ state, setState ] = useState({

  //   color: 'red',
  //   flag: true,

  // })



  // function func() {
  //   setState({
  //     ...state,
  //     flag: !state.flag,
  //     // path: e
  //   })
  
  // }

   return (
     <div>
       {/* <button style={{color: 'red'}} value='A' onClick={func}>A</button>
       <button style={{color: 'red'}} value='P' onClick={func}>P</button>
       <button style={{color: 'red'}} value='F' onClick={func}>F</button> */}
       <button>Menu</button>
       <hr/>
       <button style={{ background: 'red', color: 'white' }}>Help</button>
       <br />
       
       HELP ME!
       
      {/* <Router path={`/Request`} component={() =><Request />} /> */}
       {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
     </div>
   );
}
export default HelpMe;