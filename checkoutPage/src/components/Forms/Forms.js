import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { Button, MenuItem, Select, TextField } from '@material-ui/core';
import * as yup from 'yup';

import {
  EmailRounded,
  PhoneRounded,
  PersonRounded,
  HouseRounded,
  MarkunreadMailboxRounded,
} from '@material-ui/icons';

import { ProductContext } from '../../context/ProductProvider';
import MyCheckbox from '../MyFields/MyCheckbox';
import { regexGetBasedOnCountry } from '../../utils/index';
import MyTextField2 from '../MyFields/MyTextField2';
import './Forms.css';
import Dropdown from '../MyFields/Dropdown';
import MyButton from '../MyFields/MyButton/MyButton';

const phoneRegex = /^\s*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})/;

function Forms() {
  const { countries, products } = useContext(ProductContext);
  const getZipCodesForCountry = (countryName) => {
    let selectedCountry = countries.filter((country) => {
      return country.name === countryName;
    });

    console.log(selectedCountry);

    const zipCodesURL = `https://app.zipcodebase.com/api/v1/search?apikey=${
      process.env.REACT_APP_API_KEY
    }&codes=7000&country=${selectedCountry[0].alpha2Code.toLowerCase()}`;

    fetch(zipCodesURL)
      .then((response) => response.json())
      .then((values) => {
        console.log(values);
        // setZipCodes(values);
      });
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required()
      .email('It must be a valid email!')
      .label('Email'),
    phoneNumber: yup
      .string()
      .required()
      .matches(phoneRegex, 'Phone number is not valid')
      .label('Phone'),
    fullName: yup.string().required().label('Full name'),
    address: yup.string().required().label('Adress'),
    country: yup.string().required().label('Country'),
    postalCode: yup
      .string()
      .required()
      .label('Postal Code')
      .when('country', (country, schema) => {
        let result = regexGetBasedOnCountry(country);

        return schema.matches(result, `Postal code doesnt match ${country}.`);
      }),
  });

  return (
    <div className="forms">
      <Formik
        initialValues={{
          products: [...products],
          email: '',
          phoneNumber: undefined,
          fullName: '',
          adress: '',
          isSaved: false,
          country: '',
          postalCode: '',
          address: '',
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // do async
          console.log(data);
          setSubmitting(false);
        }}
        validateOnBlur
        validationSchema={validationSchema}
      >
        {({ dirty, isValid }) => (
          <Form>
            <div className="inputField">
              <MyTextField2
                placeholder="Enter your e-mail..."
                name="email"
                type="email"
                id="E-mail"
              >
                <EmailRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="inputField">
              {/* <PhoneRounded /> */}
              <MyTextField2
                placeholder="Enter your phone number..."
                name="phoneNumber"
                type="tel"
                id="Phone"
              >
                <PhoneRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="inputField">
              <MyTextField2
                placeholder="Enter your full name..."
                name="fullName"
                type="input"
                id="Full name"
              >
                <PersonRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="inputField">
              <MyTextField2
                placeholder="Enter your address..."
                name="address"
                type="input"
                id="Address"
              >
                <HouseRounded style={{ fill: '#828282' }} />
              </MyTextField2>
            </div>

            <div className="location">
              <div className="inputField">
                <Dropdown
                  name="country"
                  options={countries}
                  prompt="Select country..."
                />
              </div>
              <div className="inputField">
                <MyTextField2 placeholder="your postal code" name="postalCode">
                  <MarkunreadMailboxRounded style={{ fill: '#828282' }} />
                </MyTextField2>
              </div>
            </div>
            <MyCheckbox
              name="isSaved"
              type="checkbox"
              label="Save this information for next time"
            />

            <MyButton disabled={!dirty || !isValid} type="submit" />

            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Forms;
