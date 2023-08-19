import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Container, Rating, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import {Send } from '@mui/icons-material'
import './review.css'
import { Link, useNavigate } from 'react-router-dom'
import { ReviewPost } from '../../API/Reviews'

const ReviewCard = () => {
  const [rating,setRating]=useState(0)
  const navigate=useNavigate()
  const {register,handleSubmit,watch,setValue,formState:{errors}}=useForm()
  useEffect(()=>{
    //setting rating value in form
    setValue('rating',rating)
  },[rating])
  
  const onSubmit=(data)=>{
    //review post method
    ReviewPost(data)
    //navigate to home
    navigate('/home')
    }
  return (
    <Container className='contact'>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
      <Card className='card' variant='outlined'>
      <TextField {...register("name",{required:"Enter Name"})} autoComplete='true' error={errors.Name?true:false} variant='standard'  label="Name" type='text'/>
      <TextField {...register("email",{required:"Enter Email"})} autoComplete='true' error={errors.Email?true:false} variant='standard'  label="Email" type='email'/>
      <Typography component='p' sx={{alignSelf:'start',paddingLeft:'10%'}}> <span>Rating :</span> <Rating onChange={e=>setRating(e.target.value)} precision={0.5}/></Typography>
      <input {...register("rating",{required:"Enter rating"})} value={rating} type="hidden" name="" />
      <TextField {...register("message",{required:"Enter message"})} multiline sx={{width:'350px',height:'150px'}}
          maxRows={4} error={errors.message?true:false} variant='standard'  label="Message" type='text'/>
      
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Link to='/home'>
      <Button variant='text'>Cancel</Button>
      </Link>
      <Button variant='outlined' color='error' type='submit' startIcon={<Send/>} >Send</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default ReviewCard