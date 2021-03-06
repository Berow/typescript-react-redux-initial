// Core
import React from 'react';

// Components
import { RegistrationForm } from '../RegistrationForm';

export const Registration : React.FC = () => {
    const handleSubmit = (values) => {
        window.alert(JSON.stringify(values, null, 4));
    };

    const getInitialValues = () => ({
            preference: 'spaces',
            newsletter: true,
        });

    return (
      <RegistrationForm
        onSubmit={handleSubmit}
        initialValues={getInitialValues()}
      />
    );
};
