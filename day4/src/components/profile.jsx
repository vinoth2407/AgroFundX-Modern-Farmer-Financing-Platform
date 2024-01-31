import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
// import '../assets/css/profile.css'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Avatar,
} from '@chakra-ui/react';

const Profilepage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: 'Vinoth kanna',
    lastName: 'J',
    email: 'vinoth57.com',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  );

  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
       className='yog22'>
        Profile
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Avatar name={user.firstName} size="xl" />
              <br />
              <FormLabel fontSize="lg">
                First name : <b>{user.firstName}</b>
              </FormLabel>
              
              <FormLabel>
                Last name : <b>{user.lastName}</b>{' '}
              </FormLabel>
              <FormLabel>
                Email : <b>{user.email}</b>{' '}
              </FormLabel>
              
            </FormControl>
            {isEditing ? (
              <div className="edit-form">
                <br />
                <label>
                  First Name:
                  <br />
                  <Input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Last Name:
                  <br />
                  <Input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Email:
                  <br />
                  <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                
                <Button onClick={handleSaveClick}>Save</Button>
              </div>
            ) : (
              <Button onClick={handleEditClick}>Edit</Button>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Profilepage;