import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    example: string
    exampleRequired: string
}

type Props = {
    onClickSubmit: () => void
}

function RegisterForm({ onClickSubmit }: Props) {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const [isLogin, setIsLogin] = useState<Inputs | null>(null)

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setIsLogin(data);

        setTimeout(() => {
            onClickSubmit();
        }, 2000);
    }

    const handleReset = () => {
        reset();
    };

    return (
        <div className="card w-96 bg-neutral text-neutral-content">

            {isLogin && Alert(watch("example"), watch("exampleRequired"))}

            <div className="card-body items-center text-center">
                <h2 className="card-title">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("example")} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input {...register("exampleRequired", { required: true })} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <div className='m-2'>
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="card-actions justify-center content-center align-center">
                        <input className="btn btn-primary" type="submit"></input>
                        {isLogin && <span className="loading loading-spinner text-primary"></span>}
                        <button type="button" className="btn btn-ghost" onClick={handleReset}>clear</button>
                    </div>
                </form>

            </div>
        </div>
    )
}




export default RegisterForm

function Alert(userName: string, password: string) {
    return <div className="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{`user ${userName} has been logged into the system !`}</span>
    </div>
}
