import React from 'react';

const Question = () => {
    return (
        <>
            <h1 className='text-center font-bold text-4xl my-5 text-amber-700'>Question <span className='text-orange-500'>Answer's</span></h1>
            <div className='lg:px-28 grid grid-cols-1 lg:grid-cols-2 my-10 gap-5'>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Difference between 'props' and 'state' in react</h2>
                        <p><strong>Props</strong> can pass data from child components to parent components.Props are read-only, meaning that a component cannot modify its own props - they can only be modified by the parent component.<strong>State</strong> refers to a component's internal data that can change over time.State is mutable and can be updated using setState() method.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">How does useState work?</h2>
                        <p><strong>useState()</strong> is a React hook that allows functional components to use state. It takes an initial value as a parameter and returns an array with two elements: the current state value and a function to update the state. You can use this function to update the state in response to user interactions or other events, and React will automatically re-render the component with the new state value.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Purpose of 'useEffect' other than fetching data?</h2>
                        <p><strong>useEffect()</strong> is a React hook that allows functional components to perform side effects, such as fetching data from an API or updating the DOM. It takes two parameters: a function that performs the side effect, and an optional array of dependencies that specify when the effect should run.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">How Does React work?</h2>
                        <p><strong>React</strong> is a JavaScript library for building user interfaces. It works by using a declarative programming model to describe the state of a UI at any given time, and providing a way to update that state in response to user actions or other events.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;