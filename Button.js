import React from 'react';
import { Button } from 'react-native';

const ActionButton = (props) => {

    const { title, action, isDisabled } = props;

    return (
        <Button
            title={title}
            disabled={isDisabled}
            onPress={action}
        />
    )
}

export default ActionButton