import React from 'react'
import "../Styles/Utils/PostCard.scss"
const PostCard = () => {
    return (
        <>
            <header>
                <div className='post-header'>
                    <img src='https://d3gmywgj71m21w.cloudfront.net/3b2976ba93bbe9d96b4ed00a4966bd87' className="icon" alt='icon'></img>
                    <div className='username'>
                        <p>@username .
                            <span> 7'july , 2023</span>
                        </p>
                        <h1>Name</h1>
                    </div>
                </div>
                <div className='btn'>
                    <button className='follow-btn'>
                        <p><span>+</span>Follow</p>
                    </button>
                    <svg viewBox="0 0 24 24" height="24px" width="24px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
            </header>
            <section className='content'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit autem omnis nostrum numquam expedita. Facilis dignissimos necessitatibus accusantium molestiae sed!</p>
                <img src="https://d3gmywgj71m21w.cloudfront.net/0183e2ac705ed35aa179f7d5d15fdae5.png" alt="Tree img" />
            </section>
            <footer>
                <div className='interactions'>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--ph" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M132 24A100.11 100.11 0 0 0 32 124v84.33A15.69 15.69 0 0 0 47.67 224H132a100 100 0 0 0 0-200Zm0 184H48v-84a84 84 0 1 1 84 84Z"></path></svg><span>0</span>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--mdi" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"></path></svg><span>3</span>
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--mdi" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7c0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91c1.61 0 2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08Z"></path></svg>
                </div>
                <div className='like-icons'>
                    <div className="icon">A</div>
                    <div className="icon">B</div>
                    <div className="icon">+3</div>
                </div>
            </footer>
        </>
    )
}

export default PostCard
