import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import contactLottie from '../lottie/envelop.json';
import Lottie from 'lottie-react';
import { Toaster, toast } from 'sonner';


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(10, 'Message should be at least 10 characters').required('Message is required'),
});

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-100 py-20 px-4">
      <Toaster position="bottom-right" richColors />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image & Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-green-800">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-lg">
            Reach out to us for partnership opportunities, inquiries, or to learn more about how ACCR is helping shape a sustainable future for Sierra Leone.
          </p>

          <div className="space-y-4 text-gray-600 ">
            {/* <p className="flex items-center gap-3">
              <MapPinIcon className="w-6 h-6 text-green-600" />
              12 Lumley Road, Freetown, Sierra Leone
            </p>
            <p className="flex items-center gap-3">
              <PhoneIcon className="w-6 h-6 text-green-600" />
              +232 79 000 000
            </p> */}
            <p className="flex items-center gap-3">
              <EnvelopeIcon className="w-6 h-6 text-green-600" />
              theaccr.sl@gmail.com
            </p>
          </div>

          <Lottie
            animationData={contactLottie}
            loop={true}
            className="rounded-xl mt-6 w-full max-w-md mx-auto"
            />

        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 p-8 rounded-xl shadow-lg"
        >
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              try {
              toast.success('Message sent successfully!');
                  resetForm();
                } catch (error) {
                  toast.error('Failed to send message. Please try again.');
                }
              resetForm();
            }}
          >
            <Form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <Field
                  name="name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Your Message</label>
                <Field
                  name="message"
                  as="textarea"
                  rows="5"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-semibold py-3 rounded-md hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
