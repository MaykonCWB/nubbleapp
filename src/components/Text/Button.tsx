import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from './Text'


interface ButtonProps {
    title: string
}
export default function Button({ title }: ButtonProps) {
    return (
        <TouchableOpacity
            style={{
                paddingHorizontal: 20,
                paddingVertical: 14,
                backgroundColor: '#074C4E',
                alignItems: 'center',
                borderRadius: 16,
            }}
        >
            <Text preset="paragraphMedium" bold style={{ color: '#FFF', fontFamily: 'Satoshi-Bold' }}>{title}</Text>
        </TouchableOpacity>
    )
}