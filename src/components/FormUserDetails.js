import React from 'react';

import '../FormUserDetails.css';

const FormUserDetails = ({ nextStep, form, handleInput }) => {
  return (
    <div className='form-wrapper'>
      <form>
        <div className='w-100'>
          <label htmlFor='companyName'>Agency Name</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            placeholder='Company Name'
            value={form.companyName}
            onChange={handleInput}
          />
        </div>
        <div className='w-50-wrapper'>
          <div className='w-50'>
            <label htmlFor='companyEmail'>Email Address</label>
            <input
              type='text'
              id='companyEmail'
              name='companyEmail'
              placeholder='john@doe.com'
              value={form.companyEmail}
              onChange={handleInput}
            />
          </div>
          <div className='w-50'>
            <label htmlFor='companyPhone'>Phone Number</label>
            <input
              type='text'
              id='companyPhone'
              name='companyPhone'
              placeholder='Phone Number'
              value={form.companyPhone}
              onChange={handleInput}
            />
          </div>
        </div>
        <button onClick={() => nextStep()}>Proceed To Billing</button>
      </form>
    </div>
  );
};

export default FormUserDetails;
