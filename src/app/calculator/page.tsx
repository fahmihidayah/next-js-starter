'use client'
import InputField from "@/components/form/InputField";
import { Button, Card, CardBody, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";

export default function CalculatorPage() {
    const [numberInput, setNumberInput] = useState({
        angka1 : 0,
        angka2 : 0,
        hasil : 0
    })

    const onPlus = () => {
        setNumberInput({
            ... numberInput,
            hasil : (+numberInput.angka1) + (+numberInput.angka2)
        }) 
    }

    const onSub = () => {
        setNumberInput({
            ... numberInput,
            hasil : (+numberInput.angka1) - (+numberInput.angka2)
        }) 
    }

    const onMul = () => {
        setNumberInput({
            ... numberInput,
            hasil : (+numberInput.angka1) * (+numberInput.angka2)
        }) 
    }
    const onDiv= () => {
        setNumberInput({
            ... numberInput,
            hasil : (+numberInput.angka1) / (+numberInput.angka2)
        }) 
    }

    return <Container>
        <Card mt={10} shadow={"lg"} rounded={"lg"}>
            <CardBody >
                <Flex justify={"space-evenly"}>
                <InputField  w={"100%"} mr={1} label="angka 2" name="angka1" inputType="number" onChangeValue={e => {
                    setNumberInput({
                        ... numberInput,
                        [e.target.name] : e.target.value
                    }) 
                }}></InputField>
                <InputField w={"100%"} ml={1} label="angka 2" name="angka2" inputType="number" onChangeValue={e => {
                    setNumberInput({
                        ... numberInput,
                        [e.target.name] : e.target.value
                    }) 
                }}></InputField>
                </Flex>
                <Flex mt={10}>
                    <Button mr={2} onClick={onPlus}>+</Button>
                    <Button mr={2} onClick={onSub}>-</Button>
                    <Button mr={2} onClick={onDiv}>/</Button>
                    <Button mr={2} onClick={onMul}>x</Button>
                </Flex>
                <Heading mt={5}>Hasil {numberInput.hasil}</Heading>
            </CardBody>
        </Card>
    </Container>
}