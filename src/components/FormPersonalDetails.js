import React from 'react';

const FormPersonalDetails = ({
  nextStep,
  previousStep,
  form,
  handleInput,
}) => {
  return (
    <div className='form-wrapper'>
      <form>
        <div className='form-split'>
          <div className='w-50'>
            <label htmlFor='cardholderName'>Cardholder's Name</label>
            <input
              type='text'
              id='cardholderName'
              name='cardholderName'
              placeholder='John A Doe'
              value={form.cardholderName}
              onChange={handleInput}
            />
            <label htmlFor='cardNumber'>Card Number</label>
            <input
              type='text'
              id='cardNumber'
              name='cardNumber'
              placeholder='XXXX-XXXX-XXXX-6920'
              value={form.cardNumber}
              onChange={handleInput}
            />

            <div className='split'>
              <div>
                <label htmlFor='expMonth'>Exp. Month</label>
                <input
                  type='text'
                  id='expMonth'
                  name='expMonth'
                  placeholder='02'
                  value={form.expMonth}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor='expYear'>Exp. Year</label>
                <input
                  type='text'
                  id='expYear'
                  name='expYear'
                  placeholder='23'
                  value={form.expYear}
                  onChange={handleInput}
                />
              </div>
            </div>
            <label htmlFor='securityCode'>Security Code</label>
            <input
              type='text'
              id='securityCode'
              name='securityCode'
              placeholder='02/23'
              value={form.securityCode}
              onChange={handleInput}
            />
          </div>

          <div className='w-50'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='4152 Rhode Island Avenue'
              value={form.address}
              onChange={handleInput}
            />
            <label htmlFor='address2'>Address 2</label>
            <input
              type='text'
              id='address2'
              name='address2'
              placeholder='Apt 12H'
              value={form.address2}
              onChange={handleInput}
            />
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='Washington'
              value={form.city}
              onChange={handleInput}
            />

            <div className='split'>
              <div>
                <label htmlFor='state'>State</label>
                <input
                  type='text'
                  id='state'
                  name='state'
                  placeholder='DC'
                  value={form.state}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor='zip'>Zip</label>
                <input
                  type='text'
                  id='zip'
                  name='zip'
                  placeholder='22020'
                  value={form.zip}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => nextStep()}>Proceed to Checkout</button>
        <button className='back' onClick={() => previousStep()}>
          Back
        </button>
      </form>
    </div>
  );
};

export default FormPersonalDetails;
