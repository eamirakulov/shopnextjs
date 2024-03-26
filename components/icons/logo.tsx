import Image from "next/image";
import logo from "../../images/logo.png";

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <Image src={logo} alt='logo' className='main-logo' />
  );
}
