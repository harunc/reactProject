import { Card, CardImg, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import Link from 'react-router-dom/Link';

function RenderDish({dish}){
    
    if(dish!=null)
    
            return(
                <Card>
                    {console.log("Menu renderDish2 has invoked")}
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div>{console.log("Menu renderDish3 has invoked")}</div>
            );
}
function RenderComments({comments}){
    
if(comments!=null)
    return(
        <div>
            {console.log("Menu renderComments2 has invoked")}
            <h4>Comments</h4>    
            <ul className= "list-unstyled">
                    <li>{comments[0].comment}</li>
                    <li>{comments[0].author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[0].date)))}</li>
                    <li>{comments[1].comment}</li>
                    <li>{comments[1].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[1].date)))}</li>
                    <li>{comments[2].comment}</li>
                    <li>{comments[2].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[2].date)))}</li>
                    <li>{comments[3].comment}</li>
                    <li>{comments[3].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[3].date)))}</li>
                    <li>{comments[4].comment}</li>
                    <li>{comments[4].author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[4].date)))}</li>
                </ul>
        </div>
    );
else
    return(<div>{console.log("Menu renderComments3 has invoked")}</div>);

}

const DishDetail = (props) =>{
    
    if(props.dish!=null)
        return(
            <div className="container">
                <div className='row'>
                <div className='col-12 col-md-6'>
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='col-md-3 mr-auto'><h3>{props.dish.name}</h3></div>
            </div>
                <div className="row">
                    {console.log("Menu Component Rendersss1 has invoked")}
                    <div className="col-12 col-md-5 m-1"><RenderDish dish={props.dish}/> </div>
                    <div className="col-12 col-md-5 m-1"><RenderComments comments={props.comments} /> </div>
                </div>
            </div>
            );
    else
        return(<div></div>);
}



export default DishDetail