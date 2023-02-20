import PlayerCard from "../playercard/PlayerCard"
import {data} from "../helper/data"
import { Col, Container, Row } from "react-bootstrap"


const CardContainer = ({search}) => {
  return (
    <Container  className="rounded-4 mt-4 p-4 bcg">
   

    <Row >

      {data.filter((e)=>{
        return(e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))})
      .map((props)=>{
        return(
          <Col  sm={6} md={4} lg={3} className="p-4 ">
          <PlayerCard className="bg-secondary "{...props}/>
          </Col>)
      })}
        
      
      </Row>    

  

     </Container>  
  )
}

export default CardContainer



