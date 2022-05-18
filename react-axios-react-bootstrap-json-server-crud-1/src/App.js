import {useState, useEffect} from 'react';
import {Table, Container, Row, Col, Button, ButtonGroup, Form, FormGroup, Navbar } from 'react-bootstrap';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const api = "http://localhost:5000/users";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  });
  const [userId, setUserId] = useState(null);
  const [editMode, setEditMode] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name] : value }); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.contact || !formData.address) {
      toast.error('Please enter all the fields.')
    } else {
      if (!editMode) {
        axios.post(api, formData);
        toast.success('Added Successfully');
        setFormData({ name: "", email: "", contact: "", address: ""});
        setTimeout(() => loadUsers(), 500);
      } else {
        axios.put(`${api}/${userId}`, formData);
        toast.success('Updated Successfully.');
        setFormData({ name: "", email: "", contact: "", address: ""});
        setTimeout(() => loadUsers(), 500);
        setUserId(null);
        setEditMode(false);
      }
      
    }
  }

  const handleUpdate = (id) => {
    const singleUser = data.find(item => item.id === id);
    // console.log(singleUser);
    setFormData({...singleUser});
    setUserId(id);
    setEditMode(true);
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
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Contact</Form.Label>
                <Form.Control type='text' name='contact' placeholder='Enter your contact number' value={formData.contact} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' name='address' placeholder='Enter your address' value={formData.address} onChange={handleChange} />
              </FormGroup>
              <div className='d-grid gap-2 mt-2'>
                <Button type='submit' variant='primary' size='lg'>{editMode ? 'Update' : 'Submit'}</Button>
              </div>
            </Form>
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
                        <Button style={{marginRight: '5px'}} variant='secondary' onClick={() => handleUpdate(item.id)}>Update</Button>
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
