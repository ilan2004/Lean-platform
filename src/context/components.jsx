import React, { useState, createContext } from 'react';

export const SelectedValuesContext = createContext();

export function SelectedValuesProvider({ children }) {
    const [selectedValues, setSelectedValues] = useState({
        issue: true,
        feedback: true,
        suggestion: true,
        contact: true
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedValues({
            ...selectedValues,
            [name]: checked
        });
    };

    return (
        <SelectedValuesContext.Provider value={{ selectedValues, setSelectedValues, handleCheckboxChange }}>
            {children}
        </SelectedValuesContext.Provider>
    );
}