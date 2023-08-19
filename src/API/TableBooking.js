import axios from 'axios'
import { AddOrder, RemoveOrder } from '../Store/OrderSlice'

//Table Booking Post Api
export const BookingPost=(data)=>{
    return (dispatch)=>{
    axios.post("http://127.0.0.1:3000/api/booking",{
    headers:{"Content-type": "application/json; charset=UTF-8",}},
    {data:data})
        .then(res=>{
            if(res.status==200){
                //calling Table Booking reducer
                dispatch(AddOrder(data))
            }
        }) 
        .catch(err=>console.log(err))
}}


// Table Booking Delete Api
export const BookingDelete=(data)=>{
    return (dispatch)=>{
    axios.delete("http://127.0.0.1:3000/api/booking/"+data,{
    headers:{"Content-type": "application/json; charset=UTF-8",}})
        .then(res=>{
            if(res.status==200){
                //calling Table reducer
                dispatch(RemoveOrder({Table:data}))
            }
        }) 
        .catch(err=>console.log(err))
}}