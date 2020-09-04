import React, { useState } from 'react';

import FromUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormSuccess from './FormSuccess';

const initialState = {
  step: 1,
  companyName: '',
  companyEmail: '',
  companyPhone: '',

  cardholderName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  securityCode: '',
  address: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
};

const UserForm = () => {
  const [form, setForm] = useState(initialState);

  // Proceed to the next step
  const nextStep = (e) => {
    setForm({ ...form, step: form.step + 1 });
  };

  // Go back to previous step
  const previousStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };

  // Handle form values change
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  switch (form.step) {
    case 1:
      return (
        <FromUserDetails
          nextStep={nextStep}
          handleInput={handleInput}
          form={form}
        />
      );

    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          previousStep={previousStep}
          handleInput={handleInput}
          form={form}
        />
      );

    case 3:
      return <FormSuccess />;

    default:
      return;
  }
};

export default UserForm;
