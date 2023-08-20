import React from 'react'
import "../Styles/Utils/ProfileCard.scss"

const ProfileCard = () => {
    return (
        <div className='card'>
            <span >
                <img alt="Logo" loading="lazy" src="https://www.plutonn.com/static/media/Mask.c87a2edc5f7bc40a251cbff35040b1cb.svg" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABWCAYAAACgqOpHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS+SURBVHgB7ZxBbxtVEMf/qZDghF0ucKHdXHpq6/SOqIMEByrUcEVCciSE6AERiQNCQoqrIorEASQkrgkp4ZoExDlJ4R47/QBe+8SJhE8wfeNdq6kbZ71+M+u39vykkS1tHL/9e3b2vZk3CxiGYRiGYRiGYRiGERgLCBwiqrqXyNmSs2pqA06dxelra2Fh4RQBE5zYTtzIvaw4u41E4CjHx2NnLWd7zg6c+DGM52HvdbbmbJ9kOXLWSH/A+SYVed3ZCenScbYxl6IXKPIw/H3rmBfcydZTT5smHZp1L6fEm0Ni9ryckrCxQ2HC46qiANSnfpRcrjtIpnGhEjtb1p4qqoqdCr2PfHPlaRFDWXA1sdNL8wjlEHoAL4iWtVail6DHBsolNMOhbgdKqIhNyV1+BeWkTkqzFPEwksbpDsoPh5MDCKIhNgsdofzEzm5Jxm/RMJJefhFmg8jZGgQR8+w0fPDso5AFQkGwVy9KebekZzcxW0IzfD5i3i3i2SVbvORFzLulPLuODKH/eXyIO++9gytvvIbKK5f6739/9CuKZMIxsHc3EAqUVERG8vBBk159eeFc42NF4DmGfYSAG0h00Si3tzZGnuTA/j7cJ02ExhDBE4kwUr/o4PajLWTx8Nv70ERoDN4rYu8bpPvFd93L3VHHOTZmUalW0fv3P2ghNIY9d5P0ElzCs2sXHeSTyOL/U93tHkJjqMETL7Hp2Qaakdy4mT3Gt96+DU2ExhCRZ0XH17Mzqy9ff5OdQPvo4wY0ERxDhGnhfukVGoPvHqyPnAXwsSIQGkMD04KSXUxj8Zubfr3/br1/cm++frn//rHylE9hDKKJqbxiF7MiCYcmPNAsixlDmNgF4it20PuhFfA6XxM7HzE88BW7hfnCy7m8ciOUrKhOMD9c9ikieHl2+sVdzAexb7XmJfjDoeQqFODkEFdXer0Yx+02et34ueNXrka4Wau53MdSP/8xTsLJgzamDeVYRY7D6ckJ/fLzT251t5yZ8B82/sz21iYp0cC0oYxKzbiwyFye4mV0XpGH7fq1RY1yW4QQIM8uL/ZkCZHPE13I048ggNRWBk7Q/IiccEy+9+kq/vpjb+TfcBy+88Fd3KgtoVKpOKsmVRUXv3vdLp4ct/Ck3eq/H8W9z7/A9z/kHt5ZVt3NcRMhQEkbR+7Or+vXonM9kr38qy/XcmXk+G8/+6RxQTyv04R0KLRmJ5ogAzgqt8zxe1K6cedc0TmkTMgGQoMm8O5BbnkgxnH7iKTgrQlnrxy+UiaAzydCiNAE3v3n3k4/qe/jzaNgL+f/71GkaEIQ0f3ZVM4+mlHwinERgojms9Pl7Cpmg2UII148SFsjdLc46XNfo0VPszWPNyPWUT52ndAfQgHtPkgWPOTO3mFiCPfRnEWtBpkOmD0kRjmIodhwyqgWfNO4xzeaGGEz6OyNoYh6dT09gVvOdhEmhyhA6MKh8Db1NDHLUJL/7tB06TirY16gxMun8Ywo/t5ZayHMhhIv3yR9T59fkYdJRW84a5EsB5TUSIMQOdQnVtaRNAxxy0CU4+NcruFp3AGSlWCMgCjLs1gHz2GN8OKzWPvPYYXAvg7DMAzDMAzDMAzDMAzDMIx8PAXDnXjodxSdEQAAAABJRU5ErkJggg==" alt=""></img>
            </span>
            <div className='text-info'>
                <h1>You Haven't Logg...</h1>
                <p>take your usernames now</p>
                <h3>Click the login button and make yourself a part of this wonderful community.</h3>
            </div>
            <button className='btn'>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="25" height="25" viewBox="0 0 24 24" ><path fill="currentColor" d="m17 8l-1.4 1.4l1.6 1.6H9v2h8.2l-1.6 1.6L17 16l4-4l-4-4M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5Z"></path></svg>
                <div>Login</div>
            </button>
        </div>
    )
}

export default ProfileCard
