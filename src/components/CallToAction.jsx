import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import partner from '../lottie/partner.json';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { XMarkIcon } from '@heroicons/react/24/solid';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
});

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full py-5 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white overflow-hidden mt-10">
      <div className="max-w-[90rem] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Right Column: Text + Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[70%] text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Be Part of the Climate Solution
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Whether you're an investor, community leader, or environmental advocate, there's a place for you in
            Sierra Leone's carbon transformation. Let’s restore ecosystems, empower livelihoods,
            and build a climate-resilient future together.
          </p>

          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-green-800 hover:bg-green-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Join ACCR
            </button>
          </div>
        </motion.div>

        {/* Left Column: Lottie Animation */}
        <div className="w-full lg:w-[30%]">
          <Lottie animationData={partner} loop={true} className="w-full max-w-md mx-auto" />
        </div>
      </div>

      {/* Decorative radial glow */}
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-green-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative"
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
              <XMarkIcon className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Join ACCR</h3>

            <Formik
              initialValues={{ name: '', email: '', phone: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                alert('Form submitted!');
                resetForm();
                setIsModalOpen(false);
              }}
            >
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <Field name="name" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md" />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <Field name="email" type="email" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <Field name="phone" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md" />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
                >
                  Submit
                </button>

                <div className="text-center mt-4">
                  <a
                    href="https://wa.me/23279000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.373 0 12c0 2.11.547 4.104 1.57 5.875L0 24l6.29-1.65A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.146 17.085c-.208.586-1.21 1.148-1.674 1.22-.447.07-1.01.101-1.626-.108-.376-.125-.857-.285-1.483-.561-2.61-1.13-4.292-3.714-4.42-3.89-.128-.175-1.056-1.402-1.056-2.676 0-1.275.666-1.9.903-2.144.208-.22.556-.32.893-.32.11 0 .207.007.297.012.26.012.396.026.57.442.22.534.746 1.86.81 1.993.064.132.106.285.019.46-.087.175-.13.283-.26.44-.13.156-.27.35-.386.472-.13.14-.27.293-.115.575.156.282.693 1.14 1.484 1.848 1.02.94 1.88 1.23 2.162 1.37.282.14.446.117.612-.07.165-.185.704-.825.894-1.11.19-.283.38-.23.64-.13.26.1 1.64.773 1.92.913.28.14.47.21.54.326.07.117.07.68-.14 1.266z" />
                    </svg>
                    Join Our WhatsApp Channel
                  </a>
                </div>
              </Form>
            </Formik>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
