import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import male from '../../image/male.png';
import female from '../../image/female.png';
import iconFB from '../../icon/Facebook.png';
import iconTW from '../../icon/Twitter.png';
import iconYU from '../../icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTransgender,faFutbol , faFlag, faClock } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
    const { idLeague } = useParams();
  const [info, setInfo] = useState([]);
useEffect(()=> {
    const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
    .then( res => res.json())
    .then( data => setInfo(data.leagues[0]))
},[idLeague])
    
    const {strBadge,strLeague,intFormedYear,strCountry,strSport,strGender} =info;
    return (
        <div className="detailsBody">
            <div className="topIMG">
            <div>
                <div className="Badge"><img className="Badge_siz" src={strBadge} alt=""/></div>
                <h4 className="title_details">{strLeague}</h4>
            </div>
            </div>
            <br/><br/>
            <div className="container">
                <div className="detailsCard">
                    <div className="cardDetails">
                        <h4>{info.strLeague}</h4>
                        <p><FontAwesomeIcon icon={faClock} /> Founded: {intFormedYear} </p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faTransgender} /> Gender: {strGender}</p>
                    </div>
                    <div className="detailsCardRight">
                       {
                        info?.strGender?.toLowerCase() === "male" ? <img className="team" src={male} alt="img loading ..."/> : <img className="team" src={female} alt="img loading ..."/> } 
                    </div>
                </div>
<br/>
                <div className="details_text">
                    <p>{info.strDescriptionEN}</p>
                </div>
                <div className="sosialIcon">
                    <a href={`https://${info.strFacebook}`}><img className="icons" src={iconFB} alt=""/></a>
                    <a href={`https://${info.strTwitter}`}><img className="icons" src={iconTW} alt=""/></a>
                    <a href={`https://${info.strYoutube}`}><img className="icons" src={iconYU} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default Details;