import React, { useEffect,useState } from 'react';
import './Home.css';
import CardInfo from '../CardInfo/CardInfo';
import Header from '../Heaer/Header';


const Home = () => {

    const [footballData , setFootballData] =useState([]);
    useEffect(()=> {
        fetch (`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
        .then(res => res.json())
        .then(data => setFootballData(data.leagues) )
        //  console.log(footballData.length);

    },[])
    return (
        <div className="HomeBody">   
        <Header></Header>
        <div className="cards  container">
        {
            footballData.map(datas => <CardInfo data={datas}> {datas.strLeague} </CardInfo>)
        }
        </div>
        </div>
    );
};

export default Home;