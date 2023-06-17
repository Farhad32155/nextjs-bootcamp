"use client"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(5, 'Name must be at least 5 characters'),
    username: yup.string().required('Username is required').min(5, 'Username must be at least 5 characters'),
    age: yup.number().required('Age is required'),
});

const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data): any => {
        console.log('Form-Data--->', data);
    };

    console.log('errors-->', errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextField
                    label="Name"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField sx={{ ml: 2 }}
                    label="Username"
                    {...register('username')}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
                <TextField sx={{ ml: 2 }}
                    label="Age"
                    type='number'
                    {...register('age')}
                    error={!!errors.age}
                    helperText={errors.age?.message}
                />

                <Button sx={{ ml: 2 }} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </form >
    );
};

export default FormComponent;
