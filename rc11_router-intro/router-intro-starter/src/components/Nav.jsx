
import { NavLink, Link } from "react-router-dom";
const Nav = () => {
    return (
        <ul className="bg-warning">
            <li>
                <NavLink
                    className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                    }
                    to="/"
                >
                    Home
                </NavLink>
                {/*isActive, isPending className'e bir fonksiyon ilettiğimize dikkat edin. Kullanıcı
                NavLink'teki URL'de olduğunda, isActive true olacaktır. Aktif
                olmak üzereyken (veriler hala yükleniyorsa) isPending true
                olacaktır. Bu, kullanıcının nerede olduğunu kolayca göstermemize
                ve tıklanan ancak hala verilerin yüklenmesini beklediğimiz
                bağlantılar hakkında anında geri bildirim sağlamamıza olanak
                tanır. more==>https://reactrouter.com/en/main/start/tutorial */}
            </li>
            <li>
                <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    );
};

export default Nav;
