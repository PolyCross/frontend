import Image from "next/image"

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center mt-10">
                <a href="https://github.com/PolyCross" target="_blank">
                    <Image alt="github" src='./github.svg' width={30} height={30} />
                </a>
            </div>
            <div className="flex justify-center mt-6">
                <h3>
                    Author: <b>Confucian</b>
                </h3>
            </div>
            <div className="flex justify-center mt-4">
                <h4>
                    <i>confucian.e@gmail.com</i>
                </h4>
            </div>
        </footer>
    )
}

export default Footer