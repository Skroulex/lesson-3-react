import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./RickAndMorty.css";
import {Rating} from "@mui/material";

const RickAndMorty = () => {
    const API = 'https://rickandmortyapi.com/api/character'
    const [data,setData] = useState([]);
    const [value,setValue] = useState()
    async function getData(){
        let res = await axios(API)
        console.log(res)
        setData(res.data.results)
    }
    useEffect(() =>{
        getData()
    }, [])
    return (
        <div>
            <h2>Rick And Morty</h2>
            <div className="list">{data.map((item) => <div className="card" key={item.id}>
                <h4>{item.name}</h4>
                <img src={item.image} alt="" width="300px"/>
                <div>{item.species}</div>
                <div>{item.status}</div>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>)}</div>
        </div>
    );
};

export default RickAndMorty;
