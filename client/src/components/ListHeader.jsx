import React from 'react';

function ListHeader( { listName }) {
    const singOut = () => {
        console.log('sign out')
    }

    
  return (
    <div className="list-header">
        <h1>{listName}</h1>
        <div className='button-container'></div>
            <button className='create'>Add new</button>
            <button className='signout' onClick={singOut}>SIGN OUT</button>
    </div>
  );
}

export default ListHeader;
