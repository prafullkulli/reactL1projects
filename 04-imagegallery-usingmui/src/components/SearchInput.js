import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ImageResults from './Imageresults'
import axios from 'axios';

export default function SearchInput() {

  const [state, setState] = useState({
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '47012971-903468d2c49d8a0965fad0fd7',
    images: []
  });

  //const[searchedData, setSearchedData] = useState({})

  // api calling

  const searchImage = (e) =>{
    const val = e.target.value
    if(val === ''){
      console.log('if-----',val)
      setState({...state, searchText: '', images:[]})
    }else{
        axios.get(`${state.apiUrl}/?key=${state.apiKey}&q=${e.target.value}&image_type=photo&per_page=${state.amount}`)
      .then( res => {
          //console.log('data: ', res.data) 
          console.log('else-----',val)
        setState({...state, searchText: val, images: res.data.hits})
      }
      ).catch(err => console.error(err))
    }
    

     
    
    
  } 

  const onAmountChange = (e) =>{
    setState({...state, amount: e.target.value})
  }


  return (
    <div>
      <TextField
      name='searchText'
      label="Search Image"
        value={state.searchText}
        onChange={(e) => searchImage(e)}
        variant="standard"
        fullWidth={true}
      />
      
      <Select
      name='amount'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.amount}
          onChange={(e)=> onAmountChange(e)}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
        {state.images.length > 0 ? (<ImageResults images={state.images} />) : null}
    </div>
  )
}
