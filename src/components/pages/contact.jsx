import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Style from './contact.styled';


    const schema = yup
      .object({
        fullName: yup
          .string()
          .min(3, 'Your full name must contain at least 3 characters')
          .required('Please fill out this field')
          .typeError('Please fill in your full name'),
        subject: yup
          .string()
          .min(3, 'The subject must contain at least 3 characters')
          .required('Please fill out this field')
          .typeError('Please fill in your subject'),
          email: yup
          .string()
          .email('Enter your email')
          .required('Please enter a valid email')
          .typeError('Please enter a valid email'),
          body: yup
          .string()
          .min(3, 'This field must contain more than 3 characters')
          .required('Please fill out this field')
          .typeError('Please fill out your message here')
      })
      .required();

      
    export default function ContactPage(){
      const { register, handleSubmit, formState: { errors } , reset} = useForm({
        resolver: yupResolver(schema),
      });
    
      function onSubmit(data) {
        console.log(data);
        reset ();
        ;
      }
    
      return (
      <Style.FormContainer>
        <Style.FormWrapper>
        <Style.Title>Contact form</Style.Title>
        <Style.Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Style.Label htmlFor='fullName'>Full name</Style.Label>
                <Style.Input {...register('fullName')} />
                <p>{errors.firstName?.message}</p>
            </div>
            <div>
                <Style.Label htmlFor='subject'>Subject</Style.Label>
                <Style.Input {...register('subject')} />
                <p>{errors.subject?.message}</p>
            </div>
            <div>
                <Style.Label htmlFor='email'>Email</Style.Label>
                <Style.Input {...register('email')} />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <Style.Label htmlFor='body'>Message</Style.Label>
                <Style.Input {...register('body')} />
                <p>{errors.body?.message}</p>
            </div>
          <Style.SubmitButton type="submit"/>
        </Style.Form>
        </Style.FormWrapper>
    </Style.FormContainer>
      );
    }

