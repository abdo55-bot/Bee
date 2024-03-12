import React from "react";
import { AiOutlineClose } from "../helpers/icons";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { Field, Form, Formik } from "formik";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ReservationModal = ({ open, setOpen }) => {
  const { isLogged } = useAuth();

  return (
    <div className="modal absolute left-0 top-0 w-full h-1/2  flex justify-center items-center">
      <div className="modal-body bg-white rounded-md px-4 py-2 ">
        <AiOutlineClose
          className="text-black text-3xl mt-2 cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <div className="header text-2xl font-bold text-center text-black">
          طريقة حضور الايفينت
        </div>

        <div className=" max-w-md px-2 py-10 min-h-[300px] w-[500px] h-[300px] sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                    "ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                    selected ? "bg-white shadow" : "text-black "
                  )
                }
              >
                أونلاين
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                    "ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2",
                    selected ? "bg-white shadow" : "text-black "
                  )
                }
              >
                أوفلاين
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="flex justify-center items-center">
                  <Link
                    to="/reservation"
                    className="bg-primary px-4 py-2 text-white mx-auto rounded-full "
                  >
                    أحجز الان
                  </Link>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <Formik>
                  {({ isValid }) => (
                    <Form className="flex flex-col gap-2 justify-center items-center">
                      <Field
                        type="text"
                        className="w-full text-black text-right outline-none border-2 border-grey rounded-md py-2  px-1"
                        name="name"
                        placeholder="الاسم"
                        id="name"
                      />
                      <Field
                        type="email"
                        className="w-full text-black text-right outline-none border-2 border-grey rounded-md py-2  px-1"
                        name="email"
                        placeholder="الايميل"
                        id="email"
                      />
                      <Link
                        to="/reservation"
                        className="bg-primary px-4 py-2 text-white mx-auto rounded-full "
                      >
                        أحجز الان
                      </Link>
                    </Form>
                  )}
                </Formik>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
