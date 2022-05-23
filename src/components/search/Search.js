import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image/ImageResults';
import '../css/bootstrap.css';

import { blue100 } from 'material-ui/styles/colors';
import { yellow200 } from 'material-ui/styles/colors';


class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '27206472-f5685c235804e6e1637252f5c',
    images: []
  };
  

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    const styles = {
      border: '20px solid rgba(0, 0, 1, 0.05)', 
    };
    console.log(this.state.images);
    return (
      <div className='cell' style={styles}>
        <div style={{backgroundColor: blue100}}>
        <TextField
          name="searchText"
          className = "textfield"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
       
          fullWidth={true}

          variant="outlined"
          rows = "5"
          sx={{ input: { color: 'red' } }}
        />
        <br />
        <SelectField
          fullWidth={true}
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          labelStyle={{ color: 'blue' }}
         
       
        
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
        </div>
      </div>
    );
  }
}

export default Search;
