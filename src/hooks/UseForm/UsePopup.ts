import React, {useMemo, useState} from 'react';

export function UsePopup() {
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return { message, setMessage, isOpen, setIsOpen, isLoading, setIsLoading }
}

