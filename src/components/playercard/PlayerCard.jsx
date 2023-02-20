
import { useState } from "react";
// import { Container, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const PlayerCard = (props) => {
  const [showStatistics, setShowStatistics] = useState(true)
  const { name, img, statistics } = props;

  return (
      <Card style={{  height:"350px" }} onClick={()=>{setShowStatistics(!showStatistics)}}>
        {showStatistics && (
          <Card.Img variant="top" src={img} height={"300px"}/>
        )}
        {!showStatistics&&(
          <ul style={{height:"300px"}}>
          {statistics.map((item)=>{
            return(
              <li className="itemLi" >{item}</li>
            )})}
          </ul>
        )}
        {/* <Card.Img variant="top" src={img} height={"350px"}/> */}
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    
  );
};

export default PlayerCard;

