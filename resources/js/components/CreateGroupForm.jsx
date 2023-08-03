import React from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import Input from "@components/Input";
import { useForm, usePage } from "@inertiajs/react";
import ContactSelect from "@components/ContactSelect";
import { Icon } from "@iconify/react";

function CreateGroupForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data, setData, post, processing, errors } = useForm({
        groupName: "",
        participants: [],
    });

    const { contacts } = usePage().props;

    function handleChange(event, id) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox" && id) {
            setData(
                name,
                checked
                    ? [...new Set([...data.participants, id])]
                    : [
                          ...new Set(
                              data.participants.filter(
                                  (contactId) => contactId !== id
                              )
                          ),
                      ]
            );
        } else {
            setData(name, value);
        }
    }
    function handleSubmit(event) {
        event.preventDefault();

        post("/create-group", {
            onSuccess: () => onClose(),
        });
    }

    return (
        <>
            <Button
                color="white"
                borderRadius="2.4px"
                padding="4px 8px"
                minWidth="28px"
                height="28px"
                backgroundColor="green.300"
                colorScheme="green"
                title="Create group"
                onClick={onOpen}
            >
                <Icon icon="bx:bx-plus" width="0.766rem" height="0.766rem" />
            </Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                borderRadius="5.4px"
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit}>
                    <ModalHeader
                        color="white"
                        backgroundImage="linear-gradient(to top,rgba(185,102,193,1),rgba(97,83,204,1))"
                        textTransform="capitalize"
                        borderTopRadius="5.4px"
                    >
                        <Heading as="h5" fontWeight="500" fontSize="16px">
                            create new group
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton color="white" />
                    <ModalBody padding="24px">
                        <Input
                            width="full"
                            onChange={handleChange}
                            value={data.groupName}
                            label="group name"
                            type="text"
                            name="groupName"
                        />
                        <FormControl
                            paddingBlockStart="26px"
                            textTransform="capitalize"
                        >
                            <FormLabel fontSize="sm">Group Members</FormLabel>
                            <ContactSelect
                                options={contacts}
                                name="participants"
                                onChange={handleChange}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            textTransform="capitalize"
                            backgroundColor="#6153cce6"
                            color="white"
                            fontWeight="400"
                            fontSize="sm"
                            type="submit"
                            _hover={{ backgroundColor: "#6153cc" }}
                        >
                            create group
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateGroupForm;
