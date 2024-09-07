import RegisterForm from '@/components/forms/RegisterForm'
import { getPatient, getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Register = async ({params : {userId}}: SearchParamProps) => {

  const user = await getUser(userId)
  
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">

    {/* TODO: OTP verification | PasskeyModal */}
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex flex-col py-10">
        <Image
          src="/assets/icons/fulllogo_HealthSync.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-14 w-fit"
        />

                  {/* <PatientForm /> */}
                  <RegisterForm user={ user } />
          <p className="copyright py-12">
          © 2024 HealthSync
          </p>
        
      </div>
    </section>

    <Image
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[390px]"
    />
  </div>
  )
}

export default Register