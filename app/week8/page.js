"use client";

import { useUserAuth } from "./_utils/auth-context";


export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => await gitHubSignIn();

    const handleSignOut = async () => await firebaseSignOut();

    return (
        <main>
            <h1 className="flex justify-center text-4xl font-bold m-6 text-green-600">
                User: {user?.displayName}
            </h1>
            <div className="flex justify-center">
            {user ? (
                <button className="bg-sky-800 text-white font-bold py-2 px-4 rounded m-4 p-2" onClick={handleSignOut}>Sign Out</button>
                ) : (
                <button className="bg-sky-800 text-white font-bold py-2 px-4 rounded m-4 p-2" onClick={handleSignIn}>Sign In</button>
            )}
            </div>
        </main>
    );
}
 
