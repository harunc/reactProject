import react from "react";
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import { Breadcrumb,BreadcrumbItem } from 'reactstrap';
import Link from 'react-router-dom/Link';


function RenderMenuItem({dish,onClick}){
    return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });
    return (
        <div className="container">
                        <div className='row'>
                <div className='col-12 col-md-6'>
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='col-md-3 mr-auto'><h3>Menu</h3></div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;