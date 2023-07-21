import { useEffect } from 'react';

const InputHiddenUrl = (props) => {
    const { input } = props;

    useEffect(() => {
        input.onChange(window.location.href);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null;
}

export default InputHiddenUrl;