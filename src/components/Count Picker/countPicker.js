import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'
import styles from './countPicker.module.css'

const CountPicker = ({handleCountryChange})=>{
    const [fetchedCountries,setFetchedCountries]=useState([])

    useEffect(()=>{
        const fetchAPI = async()=>{
            setFetchedCountries(await(fetchCountries()))
        }
        fetchAPI()
    },[setFetchedCountries])
    

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country,i)=><option key={i}>{country}</option> )}
                </NativeSelect>
    
            </FormControl>
        </div>
    )
}
export default CountPicker