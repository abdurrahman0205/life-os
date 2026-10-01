'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import React from 'react';

const SignUpPage = () => {
  return (
    <section className='min-h-screen flex justify-center items-center'>
      <div>
        <div className='border border-[#b6b6b6d1] rounded-md px-8 py-8'>

          <div className='mb-10'>
            <h1 className='black text-3xl text-center font-bold text-blue-950 font-sans'>Sign Up</h1>
          </div>

          <Form
            className="flex w-96 flex-col gap-4"
            render={(props) => <form {...props} data-custom="foo" />}
          // onSubmit={onSubmit}
          >
            <TextField
              name="name"
              type="text"
              validate={(value) => {
                if (value.length < 3) {
                  return "Please enter a valid name.";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="Your Name" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
              <FieldError />
            </TextField>
            <div className="flex gap-2">
              <Button type="submit">
                <Check />
                Submit
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;