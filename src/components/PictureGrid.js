import React,{useEffect, useState} from 'react'
import { Container,Box,Grid,Avatar,Pagination } from '@mui/material'
import usePagination from '../utils/paginationActions';
import { CapsuleDetailsModal } from './CapsuleDetailsModal';

const PictureGrid = ({data}) => {
  const [page, setPage] = useState(1);
  const [viewData, setViewData] = useState([])
  const [detailModalOpen,setDetailModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const PER_PAGE = 10;
  const paginationCount = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  useEffect(() => {
    if(_DATA.currentData().length>0){
        setViewData(_DATA.currentData())
    }
  },[page,data])

  const handlepaginationchange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Container>
          <br/>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 1, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {viewData.map(( item, index) => (
                <Grid item xs={2} sm={4} md={3} key={index}>
                  <Avatar
                    variant='square'
                    style={{height:"300px",width:"300px", borderRadius:"15px"}}
                    src={`rocket${index}.jpg`}
                    onClick={() => {
                        setDetailModalOpen(true)
                        setModalData({...item,image:`rocket${index}.jpg`})
                    }}
                  />
                  {detailModalOpen ? (
                    <CapsuleDetailsModal open={detailModalOpen} data={modalData} setDetailModalOpen={setDetailModalOpen}/>
                    ) : ""}
                </Grid>
              ))}
          </Grid>
          </Box>
          
          <Pagination
            sx={{
              marginTop: 4,
              marginBottom: 4,
              transformOrigin: "center",
              display:"flex",
              justifyContent:"center"
            }}
            page={page}
            count={paginationCount}
            size="large"
            color="primary"
            onChange={handlepaginationchange}
          />
        </Container>
  )
}

export default PictureGrid