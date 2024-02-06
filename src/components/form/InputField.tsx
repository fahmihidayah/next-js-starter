'use client'
import { Box, BoxProps, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export type ChangeValueEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>

export interface OptionItem {
    label: string;
    value: string;
}

interface InputFieldProps extends BoxProps {
    name: string;
    label: string;
    inputType: "email" | "text" | "password" | "number";
    value?: string;
    inputAs?: "textarea" | undefined;
    options?: OptionItem[];
    selectedOption?: OptionItem;
    error?: string,
    onChangeValue?: (event: ChangeValueEvent) => void;
}

export default function InputField({ name, label, inputType, value, inputAs, height, width, onChangeValue, options, selectedOption, error, ...rest }: InputFieldProps) {

    const [inputValue, setInputValue] = useState(value);

    return <Box {...rest}>
        <FormLabel>{label}</FormLabel>
        {
            options ?
                <Select name={name} placeholder="Select option" value={inputValue} onChange={e => {
                    onChangeValue?.(e)
                    setInputValue(
                        e.target.value
                    );
                }}>
                    {
                        options.map(e => <option key={e.value} value={e.value}>{e.label}</option>)
                    }

                    isInvalid={error !== undefined}
                </Select>
                :
                <Input
                    name={name}
                    type={inputType}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        onChangeValue?.(e);
                        setInputValue(
                            e.target.value
                        );

                    }} value={inputValue}
                    as={inputAs}
                    height={height}
                    width={width}
                    isInvalid={error !== undefined}
                >
                </Input>
        }
        {error && <Text textColor={"red"}>{error}</Text>}
    </Box>
}