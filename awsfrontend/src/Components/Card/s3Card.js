import {Card,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const S3Card = (props) => {
    const navigate = useNavigate()
    const onDeleteHandler = () => {
        navigate('/s3/delete', { replace: true });
    }
    return ( 
        <>
        <Card style={{ width: '200rem' , display:'inline' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.message}
                </Card.Text>
                {props.link && <Link to={props.link}   >  <Button>   {props.action}  </Button> </Link>}

                {!props.link && <Button onClick={onDeleteHandler} >   {props.action}  </Button>}

            </Card.Body>
        </Card>
        </>
     );
}
 
export default S3Card;