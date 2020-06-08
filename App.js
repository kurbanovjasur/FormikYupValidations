import React from 'react';
import {SafeAreaView, TextInput, Button, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';

export default () => {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{name: ''}}
        onSubmit={(values, action) => {
          alert(JSON.stringify(values));
          setTimeout(() => {
            action.setSubmitting(false);
          }, 1000);
        }}>
        {forProps => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                marginBottom: 10,
              }}
              onChangeText={forProps.handleChange('name')}
            />
            {forProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button title={'Submit'} onPress={forProps.handleSubmit} />
            )}
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};
