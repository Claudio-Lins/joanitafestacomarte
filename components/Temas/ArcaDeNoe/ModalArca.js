import React from 'react'


export const ModalArca = ({showModal, setShowModal}) => {
    return (
        <>
          {showModal ?  <div>Modal Arca</div> : null}
        </>
    )
}