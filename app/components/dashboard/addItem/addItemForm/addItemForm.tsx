'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik'

interface Item {
  category?: string
  name?: string
  ingredients?: string
  price?: string
  weight?: string
  kcal?: string
}

export default function AddItemForm() {
  const initialItem: Item = {
    category: '',
    name: '',
    ingredients: '',
    price: '',
    weight: '',
    kcal: '',
  }

  return (
    <Formik
      initialValues={initialItem}
      validate={(values) => {}}
      onSubmit={async (values, { setSubmitting }) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2))
        //   setSubmitting(false)
        // }, 400)
        console.log({ values })

        try {
          const response = await fetch('/api/item', {
            method: 'POST',
            body: JSON.stringify(values),
          })

          console.log({ response })
        } catch (e) {
          console.log(e)
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col text-xl w-5/12">
          <h4 className="px-4 py-2">Название блюда</h4>
          <Field
            name="name"
            className="mb-3 h-16 p-4 w-full border-2 rounded-lg text-xl"
          />
          <ErrorMessage name="name" component="div" />

          <h4 className="px-4 py-2">Категория</h4>
          <Field
            name="category"
            className="mb-3 h-16 p-4 w-full border-2 rounded-lg text-xl"
          />
          <ErrorMessage name="category" component="div" />

          <h4 className="px-4 py-2">Ингредиенты</h4>
          <Field
            as="textarea"
            name="ingredients"
            className="mb-3 h-20 p-4 w-full border-2 rounded-lg text-xl"
          />
          <ErrorMessage name="ingredients" component="div" />

          <h4 className="px-4 py-2">Цена</h4>
          <Field
            name="price"
            className="mb-3 h-16 p-4 w-full border-2 rounded-lg text-xl"
          />
          <ErrorMessage name="price" component="div" />

          <h4 className="px-4 py-2">Вес</h4>
          <Field
            name="weight"
            className="mb-3 h-16 p-4 w-full border-2 rounded-lg text-xl"
          />
          <ErrorMessage name="weight" component="div" />

          <h4 className="px-4 py-2">Калорийность</h4>
          <Field
            name="kcal"
            className="mb-10 h-16 p-4 w-full border-2 rounded-lg text-xl"
          />
          <ErrorMessage name="kcal" component="div" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-2xl bg-cyan-500 hover:bg-cyan-600 rounded-md text-white p-1 w-full h-16"
          >
            Добавить
          </button>
        </Form>
      )}
    </Formik>
  )
}
