import React from 'react';
import { useField } from 'formik';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const MyCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormControlLabel
      {...field}
      control={<Checkbox />}
      label={label}
      error={!!errorText}
    />
  );
};

export default MyCheckbox;
