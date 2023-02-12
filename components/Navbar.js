import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={77} alt="ninja logo" />
            </div>
            <Link href={"/"} ><p>Home</p></Link>
            <Link href={"/about"}><p>About</p></Link>
            <Link href={"/ninjas"}><p>Ninja Listing</p></Link>
        </nav>
     );
}
 
export default Navbar;