import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, Text } from '@chakra-ui/react'

const ViewProduct = ({ isOpen, onClose, product }) => {
    return (

        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{product.title}</ModalHeader> {/* Display product title */}
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Image src={product.image} alt={product.title} pb={10}/>
                            <Text pb={10}>{product.description}</Text>
                            <Text>Price: ${product.price}</Text>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ViewProduct