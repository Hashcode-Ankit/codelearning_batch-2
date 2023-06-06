import './nav.css';

function Footer(){
return (
    <header className='footer'>
        <div className='navbar__title navbar__item'>Policies</div>
        <div className='navbar__item'><a href='/index' style={{color: 'white'}}>Home</a></div>
        <div className='navbar__item'><a href='/head' style={{color: 'white'}}>Versions</a></div>
        <div className='navbar__item'>Help</div>        
    </header>
);
}
export default Footer