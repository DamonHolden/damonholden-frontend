const Footer = () => {

    const author = "A React App by Damon Holden | "
    const email = "d.holden@uos.ac.uk"
    const repository = "GitHub"

    return (
        <footer>
            <p className="author">
                {author}
                <a className="footer-link" href="mailto:d.holden@uos.ac.uk">
                    {email}
                </a> | 
                <a className="footer-link" href="https://github.com/DamonHolden/uos-dts-calculator" target={"_blank"} rel="noreferrer">
                    {repository}
                </a>
            </p>
        </footer>
    );
}

export default Footer