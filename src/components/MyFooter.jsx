const MyFooter = () => {
    return ( <>
    <footer className="footer py-4 has-background-black-bis">
        <div className="container">
        <p className="has-text-white has-text-centered">© Copyright Consignment 2024 - {new Date().getFullYear()}</p>
        </div>
    </footer>
    </> );
}
 
export default MyFooter;