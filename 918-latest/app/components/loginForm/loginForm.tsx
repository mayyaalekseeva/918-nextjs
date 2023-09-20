'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik'

interface Errors {
  email?: string
}

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: Errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col">
          <h4 className="px-4 py-2">Логин</h4>
          <Field type="email" name="email" className="mb-3 h-10 p-4 w-64" />
          <ErrorMessage name="email" component="div" />

          <h4 className="px-4 py-2">Пароль</h4>
          <Field
            type="password"
            name="password"
            className="mb-3 h-10 p-4 w-64"
          />
          <ErrorMessage name="password" component="div" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-lg bg-cyan-500 hover:bg-cyan-600 rounded-md text-white p-1 w-64"
          >
            Войти
          </button>
        </Form>
      )}
    </Formik>
  )
}
