import React from 'react'

export default function Validation(input) {
const errors={}
const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
if(input.message === "")
{
errors.message="Message is Required"  
}
if(input.email === "")
{
 errors.email="Email is Required" 
}
// else(!email_pattern.test(input.email))
// {
//  errors.email ="Email is not Correct"
// }
if(input.name === "")
{
errors.name="Name is Required"  
}
if(input.subject === "")
{
errors.subject="Subject is Required"  
}
return errors
}

