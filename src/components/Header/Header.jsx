import { Container} from '@material-ui/core';
import './Header.css'

const Header = () => {

    return (
        <>
            <div className='logo'>
                <Container>
                    <img src="../../../img/logo.png" alt="" />
                </Container>
            </div>
        </>
    )
}

export default Header;
