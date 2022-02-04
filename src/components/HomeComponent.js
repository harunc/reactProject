import react from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from "reactstrap";


function CreateCard({info}){
    return(
            <Card style={{ width: '18rem' }}>
                <CardImg variant="top" src={info.image} />
                <CardBody>
                    <CardTitle>{info.name}</CardTitle>
                    {info.designation ? <CardSubtitle>{info.designation}</CardSubtitle> : null }
                    <CardText>
                    {info.description}
                    </CardText>
                </CardBody>
            </Card>
    );
}

function Home(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1">
                    <CreateCard info={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <CreateCard info={props.promotions}/>
                </div>
                <div className="col-12 col-md m-1">
                    <CreateCard info={props.leaders}/>
                </div>
            </div>
        </div>
    );


}
export default Home;