import {useState, useEffect} from 'react';
import {Table, Container, Row, Col, Button, ButtonGroup, Form, Navbar, Toast} from 'react-bootstrap';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const api = "http://localhost:5000/users";

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await axios.get(api);
    setData(response.data);
  }

  const handleDelete = (id) => {
    if(window.confirm('Are you sure to delete?')) {
      axios.delete(`${api}/${id}`);
      toast.error('Deleted Successfully');
      setTimeout(() => loadUsers(), 500);
    }
  }
  
  return (
    <>
      <ToastContainer />
      <Navbar bg='primary' variant='dark' className='justify-content-center'>
        <Navbar.Brand>
          Build React App with JSON Server and Deploy in Heroku
        </Navbar.Brand>
      </Navbar>
      <Container style={{marginTop: '70px'}}>
        <Row>
          <Col md={4}>
            <h2>Form</h2>
          </Col>
          <Col md={8}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>
                      <ButtonGroup>
                        <Button style={{marginRight: '5px'}} variant='secondary'>Update</Button>
                        <Button style={{marginLeft: '5px'}} variant='danger' onClick={() => handleDelete(item.id)}>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
