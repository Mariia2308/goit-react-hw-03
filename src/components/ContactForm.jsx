import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './ContactStyles.module.css';

const MAXCHAR = 10;
const MINCHAR = 1;

const contactboxSchema = Yup.object({
    name: Yup.string().required("Name confirm").email("You must enter a valid email"),
    number: Yup.string().required("Number confirm").min(MINCHAR, `${MINCHAR} digits`).max(MAXCHAR, `${MAXCHAR} digits`),
    favColor: Yup.string().required("Fav col").oneOf(["red", "green", "blue", "yellow"], "Fav color one of following")
});

const FORM_INITIAL_VALUES = {
    name: "",
    number: "",
    favColor: ""
};

const ContactForm = ({ onAddUser }) => {
    const handleSubmit = (values, actions) => {
        onAddUser(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={FORM_INITIAL_VALUES}
            validationSchema={contactboxSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.border}>
                <label className={css.labelwrap}>
                    <p>Name</p>
                    <Field type="email" name="name" className={css.input } />
                    <ErrorMessage component="p" name="name" />
                </label>
                <label className={css.labelwrap}>
                    <p>Number</p>
                    <Field type="text" name="number" className={css.input}  />
                    <ErrorMessage component="p" name="number" />
                </label>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
