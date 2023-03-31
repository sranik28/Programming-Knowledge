import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl my-5 text-amber-700'>Question <span className='text-orange-500'>Answer's</span></h1>
            <div className='lg:px-28 grid grid-cols-1 lg:grid-cols-2 my-10 gap-5'>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Props vs state</h2>
                        <p>Props can pass data from child components to parent components.Props are read-only, meaning that a component cannot modify its own props - they can only be modified by the parent component.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">How does useState work?</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto earum natus quis magnam nesciunt esse dignissimos? Ad temporibus praesentium veritatis dolore earum perferendis, repudiandae natus, illo obcaecati tempora cupiditate minima quasi cum repellat consequatur repellendus numquam quos esse sint? Fugit magnam eos consectetur iusto cumque, unde id quos dolor recusandae.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Purpose of useEffect other than fetching data.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores atque veniam possimus necessitatibus cumque, quaerat nisi molestias. Nulla ad aliquid earum? Totam suscipit deleniti necessitatibus consequatur rem odit accusantium vel mollitia, eaque quis officiis aliquam commodi? Laudantium in, beatae non quo ipsam similique id quis harum. Quas, libero voluptate?</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">How Does React work?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima labore qui ex, excepturi exercitationem doloribus quod officiis suscipit praesentium. Deleniti maiores, animi molestiae soluta aperiam sit distinctio laudantium est incidunt id reprehenderit consequatur quam a exercitationem neque sequi omnis illo aliquid repellat dolore! Voluptates perferendis veritatis saepe repellat doloremque.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;