import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults'

class Search extends Component {

    state={
        searchText:'',
        amount: 15,
        apiURL: "https://pixabay.com/api/",
        apiKey: "11717921-4dca0f928522377715bce4c49",
        images: []
    }

    onTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () =>
        {
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err))
        })
    }
    onAmountChange =(e, index, value) => this.setState({amount: value})

    render() {
        console.log(this.state.images)
        return (
        <div>
            <TextField 
                name = "searchText"
                value = {this.state.searchText}
                onChange = {this.onTextChange}
                label = "Search For Images"
                margin="normal"
            />
            <br/>
            <InputLabel>Amount</InputLabel>
            <Select
                name="amount"
                label="Amount of Images"
                value={this.state.amount}
                onChange={this.onAmountChange}
                margin="normal"
                fullWidth={true}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
            <br/>
            {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
        </div>
        )
    }
}

export default Search;