import moment from 'moment'
import Logo from '../../assets/logo.png'
export default function Header() {
    return (
        <div>
            <div className='mx-auto w-96 pt-5'>
                <img src={Logo} alt="Title" />
            </div>
            <p className='text-center text-gray-500 text-lg p-3 font-light'>Journalism Without Fear or Favour</p>
            <p className='text-center text-gray-500 text-xl '>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    )
}
