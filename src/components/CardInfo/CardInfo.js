import React, { useEffect, useState } from 'react';
import './cardInfo.css';
import { Card, Container,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './cardInfo.css';



const CardInfo = (props) => {
    // destructure
    const {strLeagueAlternate,strSport,idLeague,strGender} = props.data;




    const [logo, setLogo] = useState([]);
    useEffect(()=> {
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then( res => res.json())
        .then( data => setLogo(data.leagues[0]))
    },[])

    return (
        <div>
        <Container>
            <Card className="card_design" style={{ width: '18rem', display:'flex' }}>
                <Card.Img className="leagues_Badge" variant="top" src={logo.strLogo} alt="Loading Continue..."/> 
                <Card.Body>
                    <Card.Title><h4 className="text_color">{strLeagueAlternate}</h4></Card.Title>
                    {/* <Card.Text className="text_color">Sport Type: {strSport}</Card.Text> */}
                    <Card.Text className="text_color">Gender:{logo.strGender}</Card.Text>
                    <Link to={`/Details/${idLeague}`}>
                         <Button variant="primary">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /> </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
};

export default CardInfo;