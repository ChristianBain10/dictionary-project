import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className='color-row' />
            <div className="text-row">
                <h1 className='title'>
                    Dictionary
                    <span> Logo</span>
                </h1>
                <section className='tabs-section'>
                    <span className="tab-container">
                        <Link to={'/'}>Display 1</Link>
                    </span>
                    <span className="tab-container">
                        <Link to={'/display2'}>Display 2</Link>
                    </span>
                    <span className="tab-container">
                        <Link to={'/history'}>History</Link>
                    </span>
                </section>
                <section className='icons-section'>
                    <span className="icon-container">
                        i
                    </span>
                    <span className="icon-container">
                        i
                    </span>
                    <span className="icon-container">
                        i
                    </span>
                </section>
            </div>
        </nav>
    )
}