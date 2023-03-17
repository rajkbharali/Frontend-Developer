import * as React from 'react';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCapsules, getCapsulesById, getCapsulesByStatus, getCapsulesByType } from './actions/getActions';
import { imageArr } from './utils/imageHelper';
import PictureGrid from './components/PictureGrid';

import { AppBar,Box,Avatar, Grid,MenuItem,TextField,Skeleton,Toolbar } from '@mui/material';
import { Container} from '@mui/system';

export default function App() {
  const {all_capsules} = useSelector(state=>state.capsuleDetails)

  const dispatch = useDispatch()
  
  const [presentImage, setPresentImage] = React.useState("")
  const [imageId, setImageId] = React.useState(1)
  const [capsuleStatus,setCapsuleStatus] = useState("")
  const [capsuleId,setCapsuleId] = useState("")
  const [capsuleType, setCapsuleType] = useState("")
  const [showData,setShowData] = useState([])
  
  useEffect(() => {
    if(all_capsules.length===0) dispatch(getAllCapsules())
  },[])
  
  
  useEffect(() => {
    if(all_capsules.length>0){
      setShowData(all_capsules)
  }},[all_capsules])

  useEffect(() => {
    const interval = setInterval(() => {
      const toBeDisplayed = imageArr.filter(x => x.id === String(imageId))
      if(imageArr.length !== imageId){
        setPresentImage(toBeDisplayed[0].image_name)
        setImageId(imageId+1)
      }else if(imageArr.length === imageId){
        setPresentImage(toBeDisplayed[0].image_name)
        setImageId(1)
      }else{
        setPresentImage("space_x_banner_1.jpg")
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [presentImage]);

  useEffect(() => {
    if(capsuleStatus !== ""){
      setCapsuleId("")
      setCapsuleType("")
      dispatch(getCapsulesByStatus(capsuleStatus))
      setShowData([])
    }
  },[capsuleStatus])

  useEffect(() => {
    if(capsuleId !== ""){
      setCapsuleStatus("")
      setCapsuleType("")
      dispatch(getCapsulesById(capsuleId))
      setShowData([])
    }
  },[capsuleId])

  useEffect(() => {
    if(capsuleType !== ""){
      setCapsuleStatus("")
      setCapsuleId("")
      dispatch(getCapsulesByType(capsuleType))
      setShowData([])
    }
  },[capsuleType])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black",height:"70px"}}>
        <Toolbar>
          <Avatar
            src='space_x_logo.jpg'
            variant='square'
            sx={{
              height:"50px",
              width:"200px"
            }}
          />
        </Toolbar>
        <Box sx={{bgcolor:"beige", height: '80vh',maxWidth:"auto" }}>
          <Avatar
            variant='square'
            src={presentImage}
            style={{width:"inherit",height:"inherit"}}
          />
        </Box>
        <br/>
        <Container style={{display:"flex",justifyContent:"center"}}>
          <TextField
              select
              label="Status"
              value={capsuleStatus}
              onChange={(e) => {
                  setCapsuleStatus(e.target.value)
              }}
              variant="outlined"
              className="select"
              style={{width:"230px"}}
              size="small"
              >
              {[
                  {option:"active",label:"Active"},
                  {option:"retired",label:"Retired"},
                  {option:"destroyed",label:"Destroyed"},
                  {option:"unknown",label:"Unknown"},
                ].map((x) => (
                  <MenuItem key={x.option} value={x.option}>
                  {x.label}
                  </MenuItem>
              ))}
          </TextField>
          <TextField
              select
              label="Id"
              value={capsuleId}
              onChange={(e) => {
                  setCapsuleId(e.target.value)
              }}
              variant="outlined"
              className="select"
              style={{width:"230px"}}
              size="small"
              >
              {[
                {option:"dragon1",label:"Dragon 1"},
                {option:"dragon2",label:"Dragon 2"}
              ].map((x) => (
                  <MenuItem key={x.option} value={x.option}>
                  {x.label}
                  </MenuItem>
              ))}
          </TextField>
          <TextField
              select
              label="Type"
              value={capsuleType}
              onChange={(e) => {
                  setCapsuleType(e.target.value)
              }}
              variant="outlined"
              className="select"
              style={{width:"230px"}}
              size="small"
              >
              {["Dragon 1.0","Dragon 1.1","Dragon 2.0"].map((option) => (
                  <MenuItem key={option} value={option}>
                  {option}
                  </MenuItem>
              ))}
          </TextField>
        </Container>
        <br/>
        {showData.length>0 ? (
          <PictureGrid data={showData}/>

        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 1, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={3} key={index}>
                  <Skeleton animation="wave" variant="rounded" width={300} height={300} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </AppBar>
    </Box>
  );
}
