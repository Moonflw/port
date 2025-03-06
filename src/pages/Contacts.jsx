const Contacts = () => {
    return (
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Toshkent</p>
                    </li>
                    <li className="content-list__item">
                        <a href="https://t.me/Moonflw" className="title-2">Telegram </a>
                        <p><a href="tel:+998998697656">(99) 869-76-56</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:followmoon98@gmail.com">followmoon98@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    );
}
 
export default Contacts;