import React from 'react';

export default function NoPostsFound({message}) {
    return (
        <>
            <div className="col-span-3 md:col-span-2 mp:col-span-1 w-full min-h-[20vh] flex justify-center items-center">
                <h3 className="text-center">No posts found</h3>
            </div>
        </>
    );
}