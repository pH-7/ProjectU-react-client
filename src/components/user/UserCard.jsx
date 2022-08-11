import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        {user.city && user.country && (
          <p>
            {user.city} - {user.country}
          </p>
        )}
        <Button variant="secondary" as={NavLink} to={`/edit/${user.id}`}>
          Edit User
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
