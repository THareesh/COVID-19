import React from 'react';
import './App.css';
import Cards from './components/Cards/card';
import Chart from './components/Chart/chart';
import CountPicker from './components/Count Picker/countPicker'
import styles from './App.module.css';
import {fetchData} from './api'
import coronaImage from './Images/corona.png'


class App extends React.Component{
  state =  {
    data : {},
    country:''
  }
async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({data:fetchedData})
}
handleCountryChange = async(country)=>{
  const fetchedData = await fetchData(country)
  this.setState({data:fetchedData, country:country})
}

  render(){
    const {data,country} = this.state
    return(
      <div className={styles.container}>
        <img className = {styles.image} src={coronaImage} alt="COVID-19"/>
      <Cards data = {data}/>
      <CountPicker handleCountryChange= {this.handleCountryChange}/>
       <Chart data={data} country={country}/>  
     </div>
    )
  }
}

export default App;
