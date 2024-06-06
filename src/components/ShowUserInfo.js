'use client'
 import { useSearchParams } from 'next/navigation'

export default function ShowUserInfo() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id');
    const username = searchParams.get('username');

    return <>
        <div>Hi! {username}</div>
        <div>Thank you for authenticating. Will populate this space based on your id - {id}</div>
    </>

}