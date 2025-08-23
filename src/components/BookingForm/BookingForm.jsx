import { Formik, Field, Form } from "formik";
import style from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import BookingDate from "./BookingDate.jsx";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name too short. Min 3 symbols!")
    .max(50, "Your name too long. Max 50 symbols!")
    .required("Name us required"),
  email: Yup.string().email().required("Email is required"),
  comment: Yup.string().max(200, "Your comment too long!"),
});

const BookingForm = () => {
  const [date, setDate] = useState(null);

  return (
    <div className={style.formWrapper}>
      <h3 className={style.title}>Book your campervan now</h3>
      <p className={style.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          comment: "",
        }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          if (!date) {
            toast.error("Please select a booking date!");
            return;
          }
          toast.success("Booking successful!");
          resetForm();
          setDate(null);
        }}
      >
        {({ validateForm }) => (
          <Form className={style.form}>
            <Field name="name" placeholder="Name*" className={style.field} />

            <Field
              name="email"
              placeholder="Email*"
              type="email"
              className={style.field}
            />

            <BookingDate />

            <Field
              name="comment"
              as="textarea"
              rows="4"
              placeholder="Comment"
              className={style.field}
            />

            <button
              type="submit"
              className={style.button}
              onClick={() =>
                validateForm().then((errors) => {
                  Object.values(errors).forEach((msg) => toast.error(msg));
                })
              }
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
