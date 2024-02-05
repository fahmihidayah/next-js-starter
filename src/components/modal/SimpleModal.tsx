import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

interface SimpleModalProps {
    message: string;
    negativeText?: string;
    positiveText: string;
}

export default function SimpleModal(props: SimpleModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{props.message}</Text>
                    </ModalBody>

                    <ModalFooter>
                        {
                            props.negativeText &&
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        }
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}