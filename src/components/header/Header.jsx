import * as C from "./style"
import Logo from "../../assets/svgs/logo.svg"

const Header = () =>{
    return(
        <C.Header>
            <C.Logo src={Logo}/>
        </C.Header>
    )
}
export default Header;