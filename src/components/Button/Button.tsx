import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { buttonPresets } from './ButtonPresets';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';
interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
}

export function Button({ title, loading, preset = 'primary', ...TouchableOpacityBoxProps }: ButtonProps) {
    const buttonPreset = buttonPresets[preset];
    return (
        <TouchableOpacityBox
            paddingHorizontal='s20'
            height={50}
            alignItems='center'
            justifyContent='center'
            borderRadius='s16'
            {...buttonPreset.container}
            {...TouchableOpacityBoxProps}
        >
            {loading ? <ActivityIndicator /> :
                <Text preset="paragraphMedium" bold color={buttonPreset.content}>
                    {title}
                </Text>
            }
        </TouchableOpacityBox>
    )
}