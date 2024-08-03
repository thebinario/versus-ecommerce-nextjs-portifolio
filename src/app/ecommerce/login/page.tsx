'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Esquema de validação do Yup
const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Page = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-primary-dark rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-primary-dark dark:text-text-dark">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark">Email Address</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="email"
                                    type="email"
                                    className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-secondary-dark' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light dark:bg-primary-dark dark:text-text-dark`}
                                />
                            )}
                        />
                        {errors.email && <p className="mt-2 text-sm text-secondary-dark dark:text-secondary-light">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-text-light dark:text-text-dark">Password</label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <input
                                    {...field}
                                    id="password"
                                    type="password"
                                    className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-secondary-dark' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light dark:bg-primary-dark dark:text-text-dark`}
                                />
                            )}
                        />
                        {errors.password && <p className="mt-2 text-sm text-secondary-dark dark:text-secondary-light">{errors.password.message}</p>}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-primary-light rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
