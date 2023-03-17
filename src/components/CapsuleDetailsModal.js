import React from 'react'

import { Modal,Box,Avatar  } from '@mui/material';

export const CapsuleDetailsModal = ({open,data,setDetailModalOpen}) => {
  const [openUp, setOpenUp] = React.useState(open);

  const handleClose = () => {
    setOpenUp(false)
    setDetailModalOpen(false)
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    background : "whitesmoke",
    textAlign : "center",
    maxHeight : "80vh",
    overflowY : "scroll",
    maxWidth : "90%"
  };

  return (
    <div>
        <Modal
            open={openUp}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box style={{display:"flex",justifyContent:"center"}}>
                    <Avatar
                        variant='square'
                        style={{height:"300px",width:"300px", borderRadius:"15px"}}
                        src={data.image}
                    />
                </Box>
                <Box style={{fontFamily:"serif",fontSize:"small"}}>
                    <h3>ID : {data.capsule_id}</h3>
                    <h3>Serial Number : {data.capsule_serial}</h3>
                    <h3>Landings : {data.landings}</h3>
                    <h3>Original Launch : {data.original_launch}</h3>
                    <h3>Reused : {data.reuse_count}</h3>
                    <h3>Current Status : {data.status}</h3>
                    <h3>Capsule Type : {data.type}</h3>
                    <h3>Details : {data.details ? data.details : "No Details Found"}</h3>
                </Box>
            </Box>
        </Modal>
    </div>
  )
}
